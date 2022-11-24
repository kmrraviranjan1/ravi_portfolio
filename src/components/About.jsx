import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus tenetur repudiandae inventore facilis nostrum eum odio veniam ex sint quia nisi, fuga vero eveniet quo dolorum in, ea rem? Porro nihil, dignissimos pariatur suscipit inventore labore reiciendis voluptatem ipsam minus voluptates deleniti, facere eligendi accusantium totam molestias quia iste.</p>
            <br />
            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, distinctio? Rem hic excepturi facere fugit, deserunt rerum est cupiditate tempore aut sit libero adipisci recusandae? Molestiae similique laboriosam consectetur recusandae iste possimus quia perspiciatis, error, esse rerum consequatur veritatis repellat quibusdam cumque enim neque odit ab maiores, voluptatibus quis excepturi.</p>
        </div>
    </div>
  )
}

export default About