import React from "react";
import {Home, User, Settings, FolderKanban, Phone} from 'lucide-react';

const navItems = [
  {icon: <Home size={15} />, label: "Home", href: "#home"},
  {icon: <User size={15} />, label: "About", href: "#about"},
  {icon: <Settings size={15} />, label: "skills", href: "#skills"},
  {icon: <FolderKanban size={15} />, label: "Project", href: "#project"},
  {icon: <Phone size={15} />, label: "Contact", href: "#contact"},
]

export default function Header() {
  return(
    <header className="fixed z-50 w-full md:w-[40%] left-1/2 -translate-x-1/2 mt-3 top-auto bottom-0 md:top-0 md:bottom-auto bg-[#F97A00] mx-auto md:rounded-full shadow-md">
      <nav className="flex justify-between items-center px-4 md:px-8 py-2 md:py-4">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`flex flex-col items-center justify-center text-white hover:text-[#163473] transition ${
              item.isCenter
                ? "absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg w-14 h-14 z-10 border"
                : ""
            }`}
          >
            <div>{item.icon}</div>
            <span className="text-xs md:text-sm">{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  )
}