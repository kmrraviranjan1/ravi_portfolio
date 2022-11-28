import React from 'react'
import htmlIcon from '../assets/icons/html.png'
import reactIcon from '../assets/icons/react.png'
import githubIcon from '../assets/icons/github.png'
import cssIcon from '../assets/icons/css.png'
import javascriptIcon from '../assets/icons/javascript.png'
import nodeIcon from '../assets/icons/node.png'
import tailwindIcon from '../assets/icons/tailwind.png'
const Skills = () => {
    const techStacks = [
        {
            id: 1,
            displayPosition: 4,
            src: htmlIcon,
            title: 'Html',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            displayPosition: 1,
            src: reactIcon,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            displayPosition: 7,
            src: githubIcon,
            title: 'Github',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            displayPosition: 5,
            src: cssIcon,
            title: 'CSS',
            style: 'shadow-white'
        },
        {
            id: 5,
            displayPosition: 2,
            src: javascriptIcon,
            title: 'Javascript',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            displayPosition: 6,
            src: tailwindIcon,
            title: 'Tailwind',
            style: 'shadow-pink-500'
        },
        {
            id: 7,
            displayPosition: 3,
            src: nodeIcon,
            title: 'Node',
            style: 'shadow-gray-400'
        },
    ]
    return (
        <div name="skills" className="w-full bg-gradient-to-b to-gray-800 p-2 from-black" >
            <div className="max-w-screen-lg w-full text-white mx-auto p-4 py-20 flex flex-col justify-center" >
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Technical Skills</p>
                    <p className="py-6">Some of the tools, I worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {
                        techStacks.sort((stack1, stack2) => (stack1.displayPosition - stack2.displayPosition)).map(({ id, src, title, style }) => (
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