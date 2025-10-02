"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ExternalLink, Github } from "lucide-react";

interface Props {
  src: string;
  title: string;
  description: string;
  techIcons?: { src: string; alt: string }[]; // ex: [{src: "/icons/react.svg", alt: "React"}]
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ src, title, description, techIcons = [], githubUrl, liveUrl }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Évite les erreurs de hydration SSR
  useEffect(() => setMounted(true), []);

  return (
    <div
      className="relative rounded-2xl shadow-lg border border-[#2A0E61]
                 bg-black/40 backdrop-blur-md cursor-pointer overflow-hidden
                 transition-all duration-300 hover:border-cyan-400/50"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Image + hover scale */}
      <motion.div
        className="relative w-full h-48 md:h-56"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={src} alt={title} fill className="object-cover w-full h-full" />
      </motion.div>

      {/* Toggle + / − */}
      <div className="absolute top-3 right-3 text-white bg-black/40 rounded-full p-1 z-20">
        {mounted && (
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </motion.div>
        )}
      </div>

      {/* Overlay description */}
      <AnimatePresence>
        {mounted && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 text-white text-center z-10"
          >
            <p className="text-sm mb-3">{description}</p>

            {/* Tech icons */}
            {techIcons.length > 0 && (
              <div className="flex gap-3 mb-2">
                {techIcons.map((icon, idx) => (
                  <Image key={idx} src={icon.src} alt={icon.alt} width={24} height={24} />
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4 mt-2">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
             {/* Titre */}
            <div className="absolute bottom-3 left-3 right-5 text-white font-semibold text-md z-20">
                {title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
