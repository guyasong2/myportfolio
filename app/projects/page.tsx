import React from "react";
import Image from "next/image";
import Link from "next/link";

// Projects Data
const projects = [
  {
    title: "Country Info Finder",
    image: "/country.png",
    description: "A Next.js app that provides detailed information about countries worldwide.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    image: "/portfolio.png",
    description: "A sleek personal portfolio built with Next.js and Tailwind CSS.",
    link: "https://cguru.netlify.app",
  },
  {
    title: "Github User Finder",
    image: "/gitfinduser.png",
    description: "A simple app to search for Github users and view their profiles.",
    link: "https://gitfinduser.netlify.app/",
  }
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <p className="text-lg text-gray-300 mb-12">
          Here are some of the projects I have worked on:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <Link href={project.link} target="_blank">
                  <span className="inline-block mt-4 px-5 py-2 bg-white text-black rounded-lg transition">
                    View Project
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
