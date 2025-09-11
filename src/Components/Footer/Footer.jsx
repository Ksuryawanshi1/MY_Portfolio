import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-12 px-[10vw] md:px-[7vw] lg:px-[20vw] border-t border-gray-800">
      <div className="container mx-auto text-center">
        
        {/* Name */}
        <h2 className="text-2xl font-bold text-purple-400">
          Kunal Suryawanshi
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full"></div>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="relative text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/kunal-suryawanshi-a36b702a7/" },
            { icon: <FaGithub />, link: "https://github.com/Ksuryawanshi1" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#131025] border border-gray-700 text-2xl hover:text-purple-400 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-10">
          &copy; 2025 Kunal Surywanshi. All rights reserved
          Made by Kunal Suryawanshi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
