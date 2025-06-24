// context/AppContext.tsx
'use client';

import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react';

// Types
export type Skill = {
    id: number;
    name: string;
    icon: string;
    category: string;
};

export type Project = {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    github: string;
    category: string
};

type AppContextType = {
    projects: Project[];
    skills: Skill[];
    loading: boolean;
    error: string | null;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projectsRes, skillsRes] = await Promise.all([
                    fetch('/api/projects'),
                    fetch('/api/skills'),
                ]);

                if (!projectsRes.ok || !skillsRes.ok) {
                    throw new Error('Failed to fetch data');
                }

                const [projectsData, skillsData] = await Promise.all([
                    projectsRes.json(),
                    skillsRes.json(),
                ]);

                setProjects(projectsData);
                setSkills(skillsData);
            } catch (err: any) {
                setError(err.message || 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white">
                <div className="animate-pulse text-2xl font-semibold">Loading...</div>
            </div>
        );
    }

    return (
        <AppContext.Provider value={{ projects, skills, loading, error }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
};
