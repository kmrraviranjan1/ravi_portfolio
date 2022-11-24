import React from 'react'
import htmlIcon from '../assets/html.png'
import reactIcon from '../assets/react.png'
import githubIcon from '../assets/github.png'
import cssIcon from '../assets/css.png'
import javascriptIcon from '../assets/javascript.png'
import nodeIcon from '../assets/node.png'
import tailwindIcon from '../assets/tailwind.png'
const Skills = () => {
    const techStacks = [
        {
            id: 1,
            src: htmlIcon,
            title: 'Html',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: reactIcon,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: githubIcon,
            title: 'Github',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: cssIcon,
            title: 'Css',
            style: 'shadow-white'
        },
        {
            id: 5,
            src: javascriptIcon,
            title: 'Javascript',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: tailwindIcon,
            title: 'Tailwind',
            style: 'shadow-pink-500'
        },
        {
            id: 7,
            src: nodeIcon,
            title: 'Node',
            style: 'shadow-gray-400'
        },
    ]
    return (
        <div name="skills" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black" >
            <div className="max-w-screen-lg w-full h-full text-white mx-auto p-4 flex flex-col justify-center" >
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Technical Skills</p>
                    <p className="py-6">Some of the tools, I worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {
                        techStacks.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className="mt-4">{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Skills