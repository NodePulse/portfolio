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
  {
    id: 1,
    name: "Three",
    icon: "/images/logos/three.png",
  },
  {
    id: 2,
    name: "Python",
    icon: "/images/logos/python.svg",
  },
  {
    id: 3,
    name: "Node JS",
    icon: "/images/logos/node.png",
  },
  {
    id: 4,
    name: "React",
    icon: "/images/logos/react.png",
  },
];

export const projects = [
  {
    name: "GPT-UI",
    description: "Description 1",
    image: "/images/projects/gpt-ui.png",
    link: "https://react-gpt-ui.vercel.app/",
  },
  {
    name: "TextUtils",
    description: "Description 2",
    image: "/images/projects/textutils.png",
    link: "https://nodepulse.github.io/Text-React/",
  },
  {
    name: "Google docs clone",
    description: "Description 3",
    image: "/images/projects/google-docs-clone.png",
    link: "https://google-docs-clone-pied.vercel.app/",
  },
  {
    name: "GPT-UI",
    description: "Description 1",
    image: "/images/projects/gpt-ui.png",
    link: "https://react-gpt-ui.vercel.app/",
  },
  {
    name: "TextUtils",
    description: "Description 2",
    image: "/images/projects/textutils.png",
    link: "https://nodepulse.github.io/Text-React/",
  },
  {
    name: "Google docs clone",
    description: "Description 3",
    image: "/images/projects/google-docs-clone.png",
    link: "https://google-docs-clone-pied.vercel.app/",
  },
];
