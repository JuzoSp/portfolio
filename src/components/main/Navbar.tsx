"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Socials } from "../../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "À propos", href: "#about-me" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 backdrop-blur-md transition-all duration-300 px-4 md:px-10 ${
        scrolled
          ? "bg-black/80 shadow-lg shadow-[#2A0E61]/50"
          : "bg-[#03001417] shadow-sm"
      } flex items-center justify-between h-[65px]`}
    >
      {/* Logo */}
      <a
        href="#about-me"
        className="flex items-center transition-transform duration-300"
      >
        <motion.div
          animate={{ scale: scrolled ? 0.9 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-[54px] h-[54px] rounded-full flex justify-center items-center bg-gradient-to-tr from-purple-400 to-cyan-200"
        >
          <Image
            src="/profil.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer rounded-full"
          />
        </motion.div>
        <span className="font-bold ml-3 hidden md:block text-gray-300">
          Hasina Speyer
        </span>
      </a>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-4">
        {navLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{
              scale: 1.1,
              background:
                "linear-gradient(90deg, #8b5cf6, #22d3ee, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-4 py-2 rounded-full text-gray-200 hover:opacity-80 transition"
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      {/* Social icons desktop */}
      <div className="hidden md:flex gap-5">
        {Socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#22d3ee" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src={social.src} alt={social.name} width={24} height={24} />
          </motion.a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <RxCross1 size={28} className="text-gray-200" />
          ) : (
            <RxHamburgerMenu size={28} className="text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-6 z-40"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1, color: "#22d3ee" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2xl text-gray-200 transition"
              >
                {link.label}
              </motion.a>
            ))}
            <div className="flex gap-6 mt-6">
              {Socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#22d3ee" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={social.src} alt={social.name} width={28} height={28} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
