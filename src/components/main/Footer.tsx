import React, { useState, useEffect } from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo
} from "react-icons/rx"

const Footer = () => {
    const [dateTime, setDateTime] = useState(new Date());

    // Mettre à jour la date/heure toutes les secondes
    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
            <div className='w-full flex flex-col items-center justify-center m-auto '>
                <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
                    
                    {/* Community */}
                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>Community</div>

                        <a href="https://discord.com/hasina9950" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </a>

                        <a href="https://github.com/JuzoSp" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <RxGithubLogo />
                            <span className='text-[15px] ml-[6px]'>Github</span>
                        </a>

                        <a href="https://www.linkedin.com/in/hasina-andriamahandry-26027a214/" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <RxLinkedinLogo />
                            <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                        </a>

                        <a href="https://instagram.com/speyer_hasin/" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <RxInstagramLogo />
                            <span className='text-[15px] ml-[6px]'>Instagram</span>
                        </a>
                    </div>
                    
                    {/* About */}
                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>About</div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <span className='text-[15px] ml-[6px]'>Learn about me</span>
                        </p>
                        <a href="mailto:speyerhasina@gmail.com" className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <span className='text-[15px] ml-[6px]'>speyerhasina@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Copyright + Date/Heure */}
                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Hasina Dev {dateTime.getFullYear()} Inc. All rights reserved <br />
                    <span className="text-sm text-gray-400">
                        {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
