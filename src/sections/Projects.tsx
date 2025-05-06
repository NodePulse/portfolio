import { projects } from "../constants";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => (
  <article className="relative w-[300px] max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
    <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10" />
    <div className="relative z-10">
      <figure className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
            Live Preview
          </button>
        </a>
      </figure>
      <div className="px-6 py-4">
        <header>
          <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        </header>
        <p className="text-gray-200 text-base">{description}</p>
      </div>
    </div>
  </article>
);

const Projects = () => {
  return (
    <main className="p-4">
      <section id="projects">
        <div data-aos="fade-up" data-aos-delay="300">
          <header className="text-center">
            <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
              My <span className="text-purple-400">Projects</span>
            </h1>
            <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores ea nostrum cum voluptatibus rerum voluptatum quod
              tempora soluta temporibus qui.
            </p>
          </header>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-wrap gap-4 justify-center mt-6"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
