import Image from 'next/image';
import React from 'react'
import { Socials } from '../../../constants';

const Navbar = () => {
    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                    <div className='w-[54px] h-[54px] rounded-full flex justify-center items-center bg-gradient-to-tr from-purple-400 to-cyan-200'>
                        <Image
                            src="/Image.jpg"
                            alt='logo'
                            width={50}
                            height={50}
                            className='cursor-pointer hover:animate-slowspin rounded-full'
                        />
                    </div>
                    <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                        Hasina
                    </span>
                </a>
                <div className='w-[640px] h-full flex flex-row items-center gap-2 justify-between md:mr-10'>
                    <div className='flex items-center justify-between w-full h-[54px] border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" className='cursor-pointer hover:bg-gradient-to-tr from-purple-600 to-cyan-500 hover:opacity-50 rounded-full p-2'>About</a>
                        <a href="#skills" className='cursor-pointer hover:bg-gradient-to-tr from-purple-600 to-cyan-500 hover:opacity-50 rounded-full p-2'>Compétences</a>
                        <a href="#projects" className='cursor-pointer hover:bg-gradient-to-tr from-purple-600 to-cyan-500 hover:opacity-50 rounded-full p-2'>Projets</a>
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    {Socials.map((social) => (
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={24}
                            height={24}
                        />
                    )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar