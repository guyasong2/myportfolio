import React from "react";
import Image from "next/image";

// Skills Data
const skills = [
    { name: "HTML", image: "/html.svg" },
    { name: "CSS", image: "/css.svg" },
    { name: "JavaScript", image: "/javascript.svg" },
    { name: "React", image: "/react.svg" },
    { name: "Next.js", image: "/nextjs.svg" },
    { name: "Tailwind CSS", image: "/tailwind.svg" },
    { name: "Git", image: "/git.svg" },
    { name: "TypeScript", image: "/typescript.svg" },
];

export default function Skills() {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">My Skills</h2>
                <p className="text-lg text-gray-300 mb-12">
                    Here are some of the technologies I work with:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                        >
                            <Image src={skill.image} alt={skill.name} width={60} height={60} />
                            <p className="mt-3 text-lg font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
