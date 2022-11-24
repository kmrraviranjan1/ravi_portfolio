import React from 'react'

const Contact = () => {
  return (
    <div className="w-full h-screen text-white bg-gradient-to-b from-black to-gray-800 p-4">
        <div className="max-w-screen-lg mx-auto h-full flex flex-col justify-center p-4">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500" >Contact</p>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/a33ed1db-5073-4124-aede-6e08fe700494" method='POST' className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder='Enter your name' className="p-2 bg-transparent text-white rounded-md outline-white focus:outline-none" />
                    <input type="email" name="email" placeholder='Enter your email' className=" my-6 p-2 bg-transparent text-white rounded-md focus:outline-none" />
                    <textarea name="message" rows="10" placeholder='Leave your message' className="p-2 bg-transparent text-white rounded-md focus:outline-none" ></textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300">Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact