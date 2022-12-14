import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'
// import HeroImage from "../assets/ravi.JPG"
import HeroImage from "../assets/raviNoBg.png"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    const words = [" Full Stack Developer", " Web App Developer", " Front-end Developer", " Backend Developer"," MERN Stack Developer", " Android Developer"]
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row " >
                <div className="flex flex-col justify-center h-full text-white" >
                    <div className=''>
                        <div>
                            Hi There!
                            <span role="img" className='wave'  aria-labelledby="wave">   👋🏻    </span>
                        </div>

                        <h1 className="heading-name my-2">
                            I'M
                            <strong className="main-name text-3xl md:text-5xl text-orange-300"> RAVI RANJAN KUMAR</strong>
                        </h1>
                        <p>and a
                            <span className="text-2xl md:text-3xl text-blue-400">
                                <Typewriter words={words} typeSpeed={300} deleteSpeed={200}  cursor cursorStyle='_' cursorColor='white' loop={0} />
                            </span>
                        </p>
                    </div>
 
                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" >
                            <Link to='resume'>Resume</Link>
                            <span className="group-hover:rotate-90 duration-300" >
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                </div>
            </div>
        </div>
    )
}

export default Home