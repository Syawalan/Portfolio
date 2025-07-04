import { ExternalLink, Code2 } from "lucide-react";
import { space } from "postcss/lib/list";

const projects = [
  {
    title: "E-commerce",
    description: "A fully responsive e-commerce built with React.js and Laravel",
    tech: ["React.js", "Laravel", "MySQL"],
    codeLink: "https://github.com/Syawalan/e-commerce",
    demoLink: "https://ecommerce.com",
    image: ""
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations and responsive design",
    tech: ["React.js", "Tailwindcss"],
    codeLink: "https://github.com/Syawalan/Portfolio",
    demoLink: "https://ecommerce.com",
    image: ""
  },
  {
    title: "E-commerce",
    description: "A fully responsive e-commerce built with React.js and Laravel",
    tech: ["React.js", "Laravel", "MySQL"],
    codeLink: "https://github.com/Syawalan/e-commerce",
    demoLink: "https://ecommerce.com",
    image: ""
  },
]

export default function Project() {
  return(
    <section id="projects" className="py-16 px-4 md:px-10 text-white">
      {/* judul */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl fw-bold" data-aos="fade-up">My Project</h2>
        <div className="w-16 h-1 bg-white mx-auto mt-2 rounded"/>
        <p className="text-white mt-2" data-aos="fade-up" data-aos-delay="100">Check out some of my recent work</p>
      </div>

      {/* gird project */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div data-aos="fade-up" data-aos-delay={index * 100} key={index} className="border border-gray-200 p-2 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
            {/* gambar */}
            <div className="w-full h-48 bg-gray-200">
              <img src="" alt="" className="w-full h-full object-cover"/>
            </div>

            {/* konten */}
            <div className="pt-4">
              <h3 className="text-xl fw-semibold mb-2">{project.title}</h3>
              <p className="text-white text-sm mb-4">{project.description}</p>

              {/* tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item, i) => (
                  <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-md" key={i}>
                    {item}
                  </span>
                ))}
              </div>

              {/* tombol */}
              <div className="flex gap-2">
                <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 border border-gray-300 text-black px-4 py-1.5 rounded-md hover:bg-gray-100 transition">
                  <Code2 size={16}/>
                  Code
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 bg-black text-white px-4 py-1.5 rounded-md hover:bg-gray-800 transition"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}