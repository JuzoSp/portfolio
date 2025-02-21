import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo
} from "react-icons/rx"

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Récupérer l'année actuelle
    return (
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
            <div className='w-full flex flex-col items-center justify-center m-auto '>
                <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>Community</div>
                        <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer" className="cursro-pointer flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </a>
                        <a href='' className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <RxGithubLogo />
                            <span className='text-[15px] ml-[6px]'>Github</span>
                        </a>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <RxLinkedinLogo />
                            <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                        </p>
                    </div>
                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>About</div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <span className='text-[15px] ml-[6px]'>Learn about me</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <span className='text-[15px] ml-[6px]'>speyerhasina@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Hasina Dev {currentYear} Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
