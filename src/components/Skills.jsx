import React from "react";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwindcss",
    "Bootstrap5",
    "Node.js",
    "PHP",
    "Laravel",
    "RESTful APIs",
    "Git"
  ]

  return (
    <section id="skills" className="py-16 px-4 md:px-10 text-white">
      {/* judul */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold" data-aos="fade-up">My Skills</h2>
        <div className="w-16 h-1 bg-white mx-auto mt-2 rounded"/>
        <p className="text-white mt-2" data-aos="fade-up" data-aos-delay="150">Here are the technologies and Tools I work with</p>
      </div>

      {/* grid skills */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="border border-[#F97A00] rounded-md py-4 px-6 text-center font-medium text-white hover:shadow-md transition"
            data-aos="zoom-in" data-aos-delay="100"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}