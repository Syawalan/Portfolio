import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/global.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border border-zinc-100 my-4 fixed top-0 right-0 mx-auto left-0 w-5/6 backdrop-blur-md py-3 px-6 flex justify-between items-center z-50 rounded-full">
      <div className="text-lg font-bold text-white">
        <a href="/">Alan</a>
      </div>

      {/* Tombol Hamburger untuk Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden text-white"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu untuk Desktop */}
      <div className="hidden md:flex space-x-6 font-semibold">
        <a
          href="#"
          className="hover:text-[#3674B5] transition duration-200 ease-in-out text-white">Home</a>
        <a
          href="#about"
          className="hover:text-[#3674B5] transition duration-200 ease-in-out text-white">About</a>
        <a
          href="#portfolio"
          className="hover:text-[#3674B5] transition duration-200 ease-in-out text-white">Portfolio</a>
        <a
          href="/#contact"
          className="hover:text-[#3674B5] transition duration-200 ease-in-out text-white">Contact</a>
      </div>

      <a href="https://github.com/Syawalan" className="hidden md:block">
        <img src=" /assets/github-mark-white.svg" alt="Github" className="w-6 h-6" />
      </a>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="border border-zinc-100 absolute top-full left-0 w-full rounded-lg py-4 flex flex-col items-center space-y-4 md:hidden duration-300 ease-in-out opacity-100 bg-gray">
          <a href="/" className="text-white hover:text-[#3674B5] transition"> Home </a>
          <a href="#about" className="text-white hover:text-[#3674B5] transition"> About </a>
          <a href="/portfolio" className="text-white hover:text-[#3674B5] transition"> Portfolio </a>
          <a href="/contact" className="text-white hover:text-[#3674B5] transition"> Contact </a>
          <a href="https://github.com/Syawalan">
            <img src="/assets/github-mark-white.svg" alt="Github" className="w-6 h-6" />
          </a>
        </div>
      )}
    </nav>
  );
}
