import React from 'react'
import proj1 from '../assets/projects_image/proj_orbitz.png'
import proj2 from '../assets/projects_image/proj_moviePedia.png'
import proj3 from '../assets/projects_image/proj_nordstrome.png'
import proj4 from '../assets/projects_image/proj_hungerPark.png'
import proj5 from '../assets/projects_image/proj_naukri.png'
import proj6 from '../assets/projects_image/proj_nordstrome.png'

const Projects = () => {
    const myProjects = [
        {
            id: 1,
            displayPosition: 1,
            isActive: true,
            src: proj1,
            demo: "https://orbitz.netlify.app/",
            code: "https://github.com/kmrraviranjan1/orbitz-clone"
        },
        {
            id: 2,
            displayPosition: 4,
            isActive: true,
            src: proj2,
            demo: "https://itsamoviepedia.netlify.app/",
            code: "https://github.com/kmrraviranjan1/movie_pedia"
        },
        {
            id: 3,
            displayPosition: 3,
            isActive: true,
            src: proj3,
            demo: "https://kmrraviranjan1.github.io/nordstromClone/",
            code: "https://github.com/kmrraviranjan1/nordstromClone"
        },
        {
            id: 4,
            displayPosition: 2,
            isActive: true,
            src: proj4,
            demo: "https://hungerpark.netlify.app/",
            code: "https://github.com/kmrraviranjan1/hunger_park"
        },
        {
            id: 5,
            displayPosition: 5,
            isActive: false,
            src: proj5,
            demo: "",
            code: ""
        },
        {
            id: 6,
            displayPosition: 6,
            isActive: false,
            src: proj6,
            demo: "",
            code: ""
        },
    ]
    
    return (
        <div name="projects" className="w-full bg-gradient-to-b p-2 to-black from-gray-800 text-white" >
            <div className="max-w-screen-lg p-4 pt-20 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8 mt-2 '>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className="py-6">Checkout some of my work</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 px-12 sm:px-0" >
                    {
                        myProjects.filter((project) => (project.isActive)).sort((proj1, proj2) => (proj1.displayPosition - proj2.displayPosition)).map(({ id, src, demo, code }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                <div className="flex items-center justify-center">
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        <a href={demo} target="_blank" rel='noreferrer'>Demo</a>
                                    </button>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        <a href={code} target="_blank" rel='noreferrer'>Code</a>
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Projects