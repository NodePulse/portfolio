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
    icon: "/images/logos/react.png",
    category: "development",
  },
  {
    id: 2,
    name: "Node.js",
    icon: "/images/logos/node.png",
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
    id: 11,
    name: "Next.js",
    icon: "/images/logos/nextJs.svg",
    category: "development",
  },
  {
    id: 12,
    name: "GraphQL",
    icon: "/images/logos/graphql.png",
    category: "development",
  },
  {
    id: 13,
    name: "Docker",
    icon: "/images/logos/docker.png",
    category: "development",
  },
  {
    id: 14,
    name: "MongoDB",
    icon: "/images/logos/mongodb.svg",
    category: "development",
  },

  // Data Science Skills
  {
    id: 5,
    name: "TensorFlow",
    icon: "/images/logos/tensorflow.png",
    category: "data-science",
  },
  {
    id: 6,
    name: "PyTorch",
    icon: "/images/logos/pytorch.png",
    category: "data-science",
  },
  {
    id: 7,
    name: "Scikit-learn",
    icon: "/images/logos/scikit-learn.png",
    category: "data-science",
  },
  {
    id: 8,
    name: "Pandas",
    icon: "/images/logos/pandas.png",
    category: "data-science",
  },
  {
    id: 15,
    name: "NumPy",
    icon: "/images/logos/numpy.png",
    category: "data-science",
  },
  {
    id: 16,
    name: "Matplotlib",
    icon: "/images/logos/matplotlib.png",
    category: "data-science",
  },
  {
    id: 17,
    name: "Seaborn",
    icon: "/images/logos/seaborn.png",
    category: "data-science",
  },
  {
    id: 18,
    name: "Jupyter Notebook",
    icon: "/images/logos/jupyter.png",
    category: "data-science",
  },

  // Others
  {
    id: 9,
    name: "Git",
    icon: "/images/logos/git.png",  // update icon path
    category: "others",
  },
  {
    id: 10,
    name: "Linux",
    icon: "/images/logos/linux.png",  // update icon path
    category: "others",
  },
  {
    id: 19,
    name: "AWS",
    icon: "/images/logos/aws.png",
    category: "others",
  },
  {
    id: 20,
    name: "Firebase",
    icon: "/images/logos/firebase.png",
    category: "others",
  },
  {
    id: 21,
    name: "VS Code",
    icon: "/images/logos/vscode.png",
    category: "others",
  },
  {
    id: 22,
    name: "Jenkins",
    icon: "/images/logos/jenkins.png",
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
