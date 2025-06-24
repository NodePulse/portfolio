interface WordsProps {
  index: number;
  text: string;
  imgPath: string;
}

export const words: WordsProps[] = [
  {
    index: 0,
    text: "Ideas",
    imgPath: "/images/ideas.svg",
  },
  {
    index: 1,
    text: "Concepts",
    imgPath: "/images/concepts.svg",
  },
  {
    index: 2,
    text: "Designs",
    imgPath: "/images/designs.svg",
  },
  {
    index: 3,
    text: "Code",
    imgPath: "/images/code.svg",
  },
  {
    index: 4,
    text: "Ideas",
    imgPath: "/images/ideas.svg",
  },
  {
    index: 5,
    text: "Concepts",
    imgPath: "/images/concepts.svg",
  },
  {
    index: 6,
    text: "Designs",
    imgPath: "/images/designs.svg",
  },
  {
    index: 7,
    text: "Code",
    imgPath: "/images/code.svg",
  },
];

export const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

export const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 2,
    name: "About",
    link: "#about",
  },
  {
    id: 3,
    name: "Skills",
    link: "#skills",
  },
  {
    id: 4,
    name: "Projects",
    link: "#projects",
  },
];

export const skills = [
  // Development Skills
  {
    id: 1,
    name: "React",
    icon: "/images/logos/react.svg",
    category: "development",
  },
  {
    id: 2,
    name: "Node.js",
    icon: "/images/logos/node.svg",
    category: "development",
  },
  {
    id: 3,
    name: "Python",
    icon: "/images/logos/python.svg",
    category: "development",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: "/images/logos/typescript.svg",
    category: "development",
  },
  {
    id: 5,
    name: "Next.js",
    icon: "/images/logos/nextJs.svg",
    category: "development",
  },
  {
    id: 6,
    name: "GraphQL",
    icon: "/images/logos/graphql.svg",
    category: "development",
  },
  {
    id: 7,
    name: "Docker",
    icon: "/images/logos/docker.svg",
    category: "development",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: "/images/logos/mongodb.svg",
    category: "development",
  },

  // Data Science Skills
  {
    id: 9,
    name: "TensorFlow",
    icon: "/images/logos/tensorflow.svg",
    category: "data science",
  },
  {
    id: 10,
    name: "PyTorch",
    icon: "/images/logos/pytorch.svg",
    category: "data science",
  },
  {
    id: 11,
    name: "Scikit-learn",
    icon: "/images/logos/scikit-learn.svg",
    category: "data science",
  },
  {
    id: 12,
    name: "Pandas",
    icon: "/images/logos/pandas.svg",
    category: "data science",
  },
  {
    id: 13,
    name: "NumPy",
    icon: "/images/logos/numpy.svg",
    category: "data science",
  },
  {
    id: 14,
    name: "Matplotlib",
    icon: "/images/logos/matplotlib.svg",
    category: "data science",
  },
  {
    id: 15,
    name: "Seaborn",
    icon: "/images/logos/seaborn.svg",
    category: "data science",
  },
  {
    id: 16,
    name: "Jupyter Notebook",
    icon: "/images/logos/jupyter.svg",
    category: "data science",
  },

  // Others
  {
    id: 17,
    name: "Git",
    icon: "/images/logos/git.svg",
    category: "others",
  },
  {
    id: 18,
    name: "Linux",
    icon: "/images/logos/linux.svg",
    category: "others",
  },
  {
    id: 19,
    name: "AWS",
    icon: "/images/logos/aws.svg",
    category: "others",
  },
  {
    id: 20,
    name: "Firebase",
    icon: "/images/logos/firebase.svg",
    category: "others",
  },
  {
    id: 21,
    name: "VS Code",
    icon: "/images/logos/vscode.svg",
    category: "others",
  },
  {
    id: 22,
    name: "Jenkins",
    icon: "/images/logos/jenkins.svg",
    category: "others",
  },
];


export const projects = [
  {
    id: 1,
    name: "GPT-UI",
    description: "Description 1",
    image: "/images/projects/gpt-ui.png",
    link: "https://react-gpt-ui.vercel.app/",
    category: "development",
    github: "" // Add category property for developmen
  },
  {
    id: 2,
    name: "TextUtils",
    description: "Description 2",
    image: "/images/projects/textutils.png",
    link: "https://nodepulse.github.io/Text-React/",
    category: "development",
    github: ""
  },
  {
    id: 3,
    name: "Google docs clone",
    description: "Description 3",
    image: "/images/projects/google-docs-clone.png",
    link: "https://google-docs-clone-pied.vercel.app/",
    category: "development",
    github: ""
  },
  {
    id: 4,
    name: "GPT-UI",
    description: "Description 1",
    image: "/images/projects/gpt-ui.png",
    link: "https://react-gpt-ui.vercel.app/",
    category: "development",
    github: ""
  },
  {
    id: 5,
    name: "TextUtils",
    description: "Description 2",
    image: "/images/projects/textutils.png",
    link: "https://nodepulse.github.io/Text-React/",
    category: "data-science",
    github: ""
  },
  {
    id: 6,
    name: "Google docs clone",
    description: "Description 3",
    image: "/images/projects/google-docs-clone.png",
    link: "https://google-docs-clone-pied.vercel.app/",
    category: "data-science",
    github: ""
  },
];