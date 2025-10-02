"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    src: "/danapay.webp",
    title: "Danapay",
    description:
      "Danapay est une technologie blockchain qui interconnecte de façon décentralisée les acteurs économiques (particuliers et professionnels) africains pour leur permettre de réaliser des opérations financières entre eux et avec le reste du monde.",
    techIcons: [
      { src: "/icons/react.svg", alt: "React" },
      { src: "/icons/nextjs.svg", alt: "Next" },
      { src: "/icons/tailwind.svg", alt: "Tailwind" },
      { src: "/icons/laravel.svg", alt: "Laravel" },
    ],
    liveUrl: "https://www.danapay.io/",
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth / 2; // scroll moitié écran
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-10 relative">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 text-center">
        Mes Projets
      </h1>

      {/* Flèche gauche */}
      {isDesktop && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-cyan-400/50 transition"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Carousel */}
      <motion.div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto md:overflow-x-hidden scrollbar-hide snap-x snap-mandatory py-4"
        drag={isDesktop ? "x" : false}
        whileTap={{ cursor: isDesktop ? "grabbing" : "auto" }}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-start"
            whileHover={isDesktop ? { scale: 1.05, zIndex: 1 } : {}}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Flèche droite */}
      {isDesktop && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-cyan-400/50 transition"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </section>
  );
};

export default Projects;
