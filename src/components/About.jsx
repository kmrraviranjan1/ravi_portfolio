import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white">
      <div className="max-w-screen-lg p-4 pt-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className='text-xl md:mt-20'>1-year experiencd Full Stack Software Developer, having worked on multiple production projects in a highly paced product-based Ed-tech Startup environment.</p>
        <br />
        <p className='text-xl'>Had spent 7 months Full time in a coding Bootcamp Masai school, learning 1000+ hours of coding and solving 300+ data structure and algorithm problems.</p>
        <br />
        <p className='text-xl' >A persistent learner possessing good communication skills with a passion to be a part of a cross-functional dynamic team that works towards the achievement of organisational goals.</p>

      </div>
    </div>
  )
}

export default About