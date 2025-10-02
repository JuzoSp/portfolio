"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const slideInFromLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
  });

  const slideInFromRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
  });

  const slideInFromTop = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-40 w-full z-[20]"
    >
      {/* Texte */}
      <div className="flex flex-col gap-5 text-start max-w-[600px] w-full">
        {/* Sparkles / Full-stack */}
        <motion.div variants={slideInFromTop} className="flex items-center gap-2 py-1 px-2 border border-[#7042f88b] bg-black/30 rounded-md">
          <SparklesIcon className="text-[#b49bff] h-5 w-5 animate-pulse" />
          <h1 className="text-xs text-white font-medium">Full-Stack Developer</h1>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          variants={slideInFromLeft(0.3)}
          className="text-3xl md:text-5xl font-bold text-white leading-snug"
        >
          Offrir{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            les meilleures
          </span>{" "}
          expériences à la réalisation des projets
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-gray-400 text-lg"
        >
          Je suis un développeur de logiciels front-end et full-stack avec
          expérience dans le développement de sites web, applications mobiles
          et logiciels. Découvrez mes projets et mes compétences.
        </motion.p>

        {/* Call-to-action */}
        <motion.a
          href="https://www.linkedin.com/in/hasina-andriamahandry-26027a214/"
          variants={slideInFromLeft(0.7)}
          whileHover={{ scale: 1.05, background: "linear-gradient(90deg,#8b5cf6,#22d3ee)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-3 py-2 px-5 rounded-lg text-white font-medium cursor-pointer bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-300 text-center max-w-[200px]"
        >
          Me contacter
        </motion.a>
      </div>

      {/* Image */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="w-full md:w-auto flex justify-center md:justify-end mb-10 md:mb-0"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64 md:w-[420px] md:h-[420px]"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work_icons"
            fill
            className="object-contain rounded-lg drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Background gradient / overlay subtil */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900 via-black/70 to-cyan-900 opacity-20" />
    </motion.div>
  );
};

export default HeroContent;
