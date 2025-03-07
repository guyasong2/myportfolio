import React from "react";
import Image from "next/image"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Hero = () => {
  return (
    <main className="w-full flex flex-col sm:flex-row items-center justify-center px-6 md:px-20 py-16 min-h-screen bg-gradient-to-br from-blue-900 to-black text-white">
      
      {/* Left Side - Image Placeholder */}
      <div className="sm:flex w-full sm:w-1/2 justify-center">
        <div className="flex items-center justify-center">
          <Image src="/guy.png" width={500} height={500} alt="Guy Asong"/>
        </div>
      </div>

      {/* Right Side - Hero Content */}
      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
        Guy Asong. Frontend Developer
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-lg">
        I craft interactive and visually stunning websites using Next.js, React, and Tailwind CSS. Let’s build something amazing!
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          {[
            { href: "https://www.facebook.com/dean.lewis.988711?mibextid=LQQJ4d", icon: AiFillFacebook },
            { href: "https://www.instagram.com/guy.asong?igsh=MXNobmNxZmM4c3lzMw%3D%3D&utm_source=qr", icon: AiFillInstagram },
            { href: "https://x.com/@guy_asong", icon: AiFillTwitterCircle },
            { href: "https://www.linkedin.com/in/guy-asong-b8b1441b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: AiFillLinkedin },
            { href: "https://github.com/guyasong2/", icon: AiFillGithub },
            { href: "https://youtube.com/@codeguru3204?si=fsOIJ42QLqLAsX1a", icon: AiFillYoutube }
          ].map(({ href, icon: Icon }, index) => (
            <a key={index} href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={40} className="transition-all duration-300 bg-gray-200 text-black hover:text-cyan-500 rounded-full p-2 shadow-md hover:scale-110" />
            </a>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Hero;
