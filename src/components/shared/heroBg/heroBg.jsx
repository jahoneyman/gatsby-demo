import React from 'react'
import Hero from '../../../assets/videos/hero.mp4';

const HeroBg = () => {
    return (
        <video src={Hero} autoPlay loop muted className='w-full h-full object-cover' />
    )
}

export default HeroBg