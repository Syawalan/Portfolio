import React from "react";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 gap-4">
      {/* profile */}
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-gray-300 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
        <img src="" alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* judul */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2" data-aos="fade-up" data-aos-delay="100">Hi, I'am Syawalan Finanda</h1>

      {/* sub judul */}
      <p className="text-white text-lg md:text-xl mb-6" data-aos="fade-up" data-aos-delay="100">Fullstack Developer</p>

      {/* tombol */}
      <div className="flex gap-4 mb-6" data-aos="fade-up" data-aos-delay="100">
        <a href="#contact" className="px-5 py-2.5 bg-[#F97A00] text-white font-semibold rounded-md hover:bg-[#FED16A] transition">Contact Me</a>
        <a href="#project" className="px-5 py-2.5 border-2 border-[#F97A00] text-white font-semibold rounded-md ">View Project</a>
      </div>

      {/* social section */}
      <div className="flex gap-6 text-white" data-aos="fade-up" data-aos-delay="100">
        <a href="https://github.com/Syawalan" target="_blank" rel="noreferrer">
          <Github size={22}/>
        </a>
        <a href="https://www.linkedin.com/in/syawalan-finanda-402534312/" target="_blank" rel="noreferrer">
          <Linkedin size={22}/>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <FileText size={22}/>
        </a>
        <a href="mailto:syawalanf@gmail.com" target="_blank" rel="noreferrer">
          <Mail size={22}/>
        </a>
      </div>

    </section>
  )
}