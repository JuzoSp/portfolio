"use client";

import React, { useEffect, useState } from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { motion } from "framer-motion";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const Footer: React.FC = () => {
  const [now, setNow] = useState<Date>(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Composant monté côté client
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const year = now.getFullYear();

  const socialLinks: SocialLink[] = [
    {
      icon: <RxDiscordLogo />,
      label: "Discord",
      href: "https://discord.com/hasina9950/",
    },
    {
      icon: <RxGithubLogo />,
      label: "GitHub",
      href: "https://github.com/JuzoSp/",
    },
    {
      icon: <RxLinkedinLogo />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hasina-andriamahandry-26027a214/",
    },
    {
      icon: <RxInstagramLogo />,
      label: "Instagram",
      href: "https://instagram.com/speyer_hasin/",
    },
  ];

  return (
    <footer className="w-full bg-black/80 text-gray-200 shadow-lg p-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Liens sociaux */}
        <div className="w-full flex flex-wrap justify-around mb-6">
          <div className="flex flex-col items-center min-w-[200px] mb-6 md:mb-0">
            <div className="font-bold text-[16px] mb-3">Communauté</div>
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center my-2 cursor-pointer"
                whileHover={{ scale: 1.1, color: "#22d3ee" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.icon}
                <span className="ml-2 text-[15px]">{link.label}</span>
              </motion.a>
            ))}
          </div>

          {/* About */}
          <div className="flex flex-col items-center min-w-[200px]">
            <div className="font-bold text-[16px] mb-3">About</div>
            <motion.p
              className="text-[15px] my-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Learn about me
            </motion.p>
            <motion.a
              href="mailto:speyerhasina@gmail.com"
              className="text-[15px] my-2 cursor-pointer"
              whileHover={{ scale: 1.05, color: "#22d3ee" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              speyerhasina@gmail.com
            </motion.a>
          </div>
        </div>

        {/* Copyright + date/heure */}
        <div className="text-[15px] text-center text-gray-400">
          &copy; Hasina Dev {year} Inc. All rights reserved
          <br />
          <span className="text-sm">
            {mounted
              ? `${now.toLocaleDateString("fr-FR")} ${now.toLocaleTimeString("fr-FR")}`
              : "—"}
          </span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
