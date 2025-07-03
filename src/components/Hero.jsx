import React from "react";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center">
      {/* profile */}
      <div className="w-32 h-32 rounded-full border-4 border-gray-300 overflow-hidden animate-fade-in-up">
        <img src="" alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* judul */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 animate-fade-in-up">Hi, I'am Syawalan Finanda</h1>

      {/* sub judul */}
      <p className="text-gray-600 text-lg md:text-xl mb-6 animate-fade-in-up">Fullstack Developer</p>

      {/* tombol */}
      <div className="flex gap-4 mb-6 animate-fade-in-up">
        <a href="#contact" className="px-5 py-2.5 bg-[#173B45] text-white font-semibold rounded-md hover:bg-[#347928] transition">Contact Me</a>
        <a href="#project" className="px-5 py-2.5 border border-[#173B45] text-black font-semibold rounded-md hover:bg-[#347928] transition">View Project</a>
      </div>

      {/* social section */}
      <div className="flex gap-6 text-gray-700 animate-fade-in-up">
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