
import React from 'react'
import ProjectCard from './sub/ProjectCard'

const Projects = () => {
    return (
        <div id='projects' className='flex flex-col items-center justify-center py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                Mes Projets
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src='/Pharmacy.png'
                    title='Application Web de Gestion de Pharmacie'
                    description='Conçue pour répondre aux besoins spécifiques d un pharmacie, cette plateforme offre sept services de gestion essentiels pour optimiser les opérations quotidiennes.'
                />
                <ProjectCard
                    src='/lgcfp2.png'
                    title='Logicel de gestion collaboratives de formation professionnels'
                    description='Ce logiciel est conçue au sein de l entreprise Upskill pour la gestion des formation professionnels offert par cet entreprise. Je contribue au dévelopement de ce logiciel.'
                />
                <ProjectCard
                    src='/Agence_Immo.png'
                    title='Application web Agence Immobilière'
                    description='Application web d agence immobilière est également entièrement sécurisée garantissant la confidentialité des données. Utilisant le système d authentification offert par Laravel. J ai conçu système sécurisé des utilisateur connéctés.'
                />
                <ProjectCard
                    src='/Portfolio.png'
                    title='Portfolio SpaceWebsite'
                    description='Ce site représente mon portfolio, et quelques projets que j avais réalisé. Conçue avec Next.js.'
                />
            </div>
        </div>
    )
}

export default Projects