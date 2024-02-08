
import React from 'react'
import ProjectCard from './sub/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                Mes Projets
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src='/Pharmacy.png'
                    title='Modern Management Web App'
                    description='Conçue pour répondre aux besoins spécifiques d un pharmacie, cette plateforme offre sept services de gestion essentiels pour optimiser les opérations quotidiennes.'
                />
                <ProjectCard
                    src='/NextWebsite.png'
                    title='Modern Next.js Portfolio'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium natus dolorum in. Repudiandae quia dolorem ex nam tenetur nisi atque dignissimos praesentium iste explicabo voluptates, iusto quae neque aut impedit?'
                />
                <ProjectCard
                    src='/NextWebsite.png'
                    title='Modern Next.js Portfolio'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium natus dolorum in. Repudiandae quia dolorem ex nam tenetur nisi atque dignissimos praesentium iste explicabo voluptates, iusto quae neque aut impedit?'
                />
            </div>
        </div>
    )
}

export default Projects