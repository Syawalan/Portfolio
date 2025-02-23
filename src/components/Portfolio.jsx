import React from "react";


export default function LatestProjects() {
    const projects = [
      {
        title: "GotoSend",
        description: "E-commerce for selling remittances, mob...",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "D-Kanto",
        description: "E-commerce website for selling technolog...",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "D-Kanto Admins",
        description: "Admin Dashboard for an E-commerce we...",
        image: "https://via.placeholder.com/300",
      },
    ];
  
    return (
      <section className="bg-gradient-to-b py-12 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg shadow-lg overflow-hidden w-80"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  