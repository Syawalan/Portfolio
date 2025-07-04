import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
      <p className="mb-2 text-white md:mb-0"> © 2025 Syawalan Finanda. All rights reserved.</p>

      <div className="flex space-x-6 text-white">
        <a href="https://github.com/Syawalan" target="_blank" rel="noreferrer">
          <Github size={20}/>
        </a>
        <a
          href="https://www.linkedin.com/in/syawalan-finanda-402534312/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={20} />
        </a>
        <a href="mailto:syawalanf@gmail.com">
          <Mail size={20} />
        </a>
      </div>
    </footer>
  )
}