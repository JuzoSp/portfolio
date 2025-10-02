"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./sub/ProjectCard";

const projects = [
  {
    src: "/Pharmacy.webp",
    title: "Application Web de Gestion de Pharmacie",
    description:
      "Conçue pour répondre aux besoins spécifiques d'une pharmacie locale, cette plateforme offre sept services de gestion essentiels pour optimiser les opérations quotidiennes.",
    techIcons: [
      { src: "/icons/react.svg", alt: "React" },
      { src: "/icons/tailwind.svg", alt: "Tailwind" },
    ],
    githubUrl: "https://github.com/JuzoSp/pharmacie",
  },
  {
    src: "/lgcfp2.webp",
    title: "Logiciel de gestion collaborative",
    description:
      "Logiciel développé pour la gestion des formations professionnelles au sein de l'entreprise Upskill Analamahintsy. J'ai contribué au développement du backend et frontend.",
    techIcons: [
      { src: "/icons/react.svg", alt: "React" },
      { src: "/icons/nextjs.svg", alt: "Next.js" },
    ],
    liveUrl: "https://formafusion.io/index.html",
  },
  {
    src: "/Agence_Immo.webp",
    title: "Application web Agence Immobilière",
    description:
      "Application web sécurisée pour agence immobilière, utilisant Laravel pour le backend et système d'authentification des utilisateurs.",
    techIcons: [
      { src: "/icons/react.svg", alt: "React" },
      { src: "/icons/laravel.svg", alt: "Laravel" },
    ],
    githubUrl: "https://github.com/JuzoSp/Agence_immo",
  },
  {
    src: "/Portfolio.webp",
    title: "Portfolio SpaceWebsite",
    description: "Mon portfolio personnel avec quelques projets réalisés, construit avec Next.js.",
    techIcons: [
      { src: "/icons/react.svg", alt: "React" },
      { src: "/icons/nextjs.svg", alt: "Next.js" },
    ],
    liveUrl: "https://hasina-seven-delta-73.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-10">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 text-center">
        Mes Projets
      </h1>

      {/* Carrousel horizontal */}
      <motion.div
        className="flex gap-6 overflow-x-scroll scrollbar-hide py-4"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
      >
        {projects.map((project, idx) => (
          <motion.div key={idx} className="min-w-[280px] md:min-w-[320px] flex-shrink-0">
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
              techIcons={project.techIcons}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
