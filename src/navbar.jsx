import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="#home">MyPortfolio</a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center md:gap-8 absolute md:static bg-green-400 md:bg-transparent w-full md:w-auto transition-transform ${
            isOpen ? "top-[80px]" : "top-[-500px]"
          } md:top-auto left-0`}
        >
          <a
            href="#about"
            className="text-white text-lg py-2 px-4 md:py-0 hover:bg-blue-400 md:hover:bg-transparent"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white text-lg py-2 px-4 md:py-0 hover:bg-blue-400 md:hover:bg-transparent"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white text-lg py-2 px-4 md:py-0 hover:bg-blue-400 md:hover:bg-transparent"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white text-lg py-2 px-4 md:py-0 hover:bg-blue-400 md:hover:bg-transparent"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;