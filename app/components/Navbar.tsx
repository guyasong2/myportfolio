"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex w-full sm:w-[80%] mx-auto justify-between items-center h-16 px-6 md:px-12">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white font-[Oswald]">
          Cguru<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li className="text-lg text-white font-[Poppins] hover:text-blue-500 transition">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg text-white font-[Poppins] hover:text-blue-500 transition">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="text-lg text-white font-[Poppins] hover:text-blue-500 transition">
            <Link href="/projects">Projects</Link>
          </li>
          <a href="/Resume.pdf" download>
          <button className="cursor-pointer ml-3 bg-white text-black px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
            Resume
          </button>
          </a>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          <AiOutlineMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-6 transform ${menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 -translate-x-full"} transition-all duration-500 md:hidden`}>
        
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <AiOutlineClose size={30} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="mt-10 space-y-6">
          <li className="text-lg text-white font-[Poppins] block px-4 py-2 hover:text-gray-900 transition">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg text-white font-[Poppins] block px-4 py-2 hover:text-gray-900 transition">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="text-lg text-white font-[Poppins] block px-4 py-2 hover:text-gray-900 transition">
            <Link href="/projects">Projects</Link>
          </li>
          <a href="/Resume.pdf" download>
          <button className="w-full bg-white text-black py-3 rounded-md shadow-md hover:bg-gray-200 transition">
            Resume
          </button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
