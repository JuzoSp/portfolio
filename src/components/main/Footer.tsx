'use client';

import React, { useEffect, useState } from 'react';
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from 'react-icons/rx';

const Footer: React.FC = () => {
  // on démarre "null" pour éviter tout warning d'hydratation
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const year = (now ?? new Date()).getFullYear();

  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-row items-center justify-around flex-wrap">
          {/* Community */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <a
              href="https://discord.com/hasina9950/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>

            <a
              href="https://github.com/JuzoSp/"            /* ← remplace par ton vrai profil */
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/hasina-andriamahandry-26027a214/"   /* ← remplace */
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>

            <a
              href="https://instagram.com/speyer_hasin/"         /* ← remplace */
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
          </div>

          {/* About */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px]">Learn about me</span>
            </p>
            <a
              href="mailto:speyerhasina@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">speyerhasina@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Copyright + Date/Heure */}
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Hasina Dev {year} Inc. All rights reserved
          <br />
          <span className="text-sm text-gray-400">
            {now ? `${now.toLocaleDateString('fr-FR')} ${now.toLocaleTimeString('fr-FR')}` : '—'}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer
