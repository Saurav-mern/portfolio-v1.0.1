import React from 'react'
import image from './backpacker-2.jpg'

export default function Home(){
    return (
        <main>
            <img src={image} alt="Image of a man on mountain" className='absolute object-cover w-full h-full'/>
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-39 px-8'>
                <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>Namaste. I'm Saurav. </h1>
            </section>
        </main>
    )
}