import React from 'react'
import HeroContent from './sub/HeroContent'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full bg-gradient-to-b from-gray-900 to-black">
      <HeroContent />
    </div>
  )
}

export default Hero
