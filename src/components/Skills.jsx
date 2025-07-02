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
    <section id="skills" className="py-16 px-4 md:px-10 bg-[#FFFBE6] text-black">
      {/* judul */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
        <div className="w-16 h-1 bg-black mx-auto mt-2 rounded"/>
        <p className="text-gray-500 mt-2">Here are the technologies and Tools I work with</p>
      </div>

      {/* grid skills */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="border border-gray-300 rounded-md py-4 px-6 text-center font-medium text-black hover:shadow-md transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}