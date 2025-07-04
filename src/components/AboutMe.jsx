import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 px-4 md:px-10 text-white">
      {/* section title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <div className="w-16 h-1 bg-white mx-auto mt-2 rounded" />
      </div>

      {/* content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div className="w-full h-72 bg-gray-200 rounded-lg flex items-center justify-center" data-aos="fade-right" data-aos-delay="100">
          <img
            src=""
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* deskripsi */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4" data-aos="fade-up">
            Fullstack Developer
          </h3>
          <p className="text-white mb-4" data-aos="fade-up" data-aos-delay="200">
            I'm a passionate fullstack developer with over 3 years of experience
            in building modern, scalable, and user-friendly web applications.
            Skilled in frontend development using React.js, Tailwindcss, and
            bootstrap, and backend development with Node.js (Express.js) and
            Laravel. Proficient in managing database such as MySQL, and
            experienced in building and integrating REST APIs.
          </p>
          <p className="text-white mb-6" data-aos="fade-up" data-aos-delay="200">
            I focus on writing clean and maintainable code, delivering great
            user experience (UX), and ensuring high performance. I'm comfortable
            working independently or as part of an Agile/Scrum team. I also have
            experience with Git, and third-party service integrations such as
            WhatsApp API.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#F97A00] text-white px-5 py-2 rounded-md hover:bg-[#FED16A] transition"
            data-aos="fade-up" data-aos-delay="230"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
