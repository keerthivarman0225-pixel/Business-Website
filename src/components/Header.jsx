import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './navbar'

const Header = () => {
  return (
    <div id="header" className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={assets.header_img}
        alt="header"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-20 -z-10"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      ></div>

      <Navbar />

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full text-white text-center px-6">

        {/* Eyebrow */}
      <p className='text-[13px] tracking-[0.4em] uppercase text-black mb-6'>
  Est. 2015 · Design Studio
</p>

        {/* Gold accent line */}
        <div className='w-10 h-px bg-[#c8a97e] mb-6'></div>

        {/* BLACK Welcome heading */}
        <h1 className="font-cormorant font-light uppercase tracking-[0.28em] text-black"
    style={{ fontSize: 'clamp(72px, 16vw, 140px)' }}>
  ALAYEM
</h1>

        <p className="text-[16px] tracking-[0.35em] uppercase text-black mb-12 font-light">
  Let's Build Your Dream Destiny
</p>
        <div className="flex gap-4 items-center flex-wrap justify-center">
          <a href="#projects">
            <button className="px-8 py-3.5 text-[10px] font-medium tracking-[0.25em] uppercase
              bg-white text-black hover:bg-[#c8a97e] hover:text-white transition-all duration-300">
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className="px-8 py-3.5 text-[10px] font-medium tracking-[0.25em] uppercase
              border border-white/30 text-white/70 hover:border-[#c8a97e] hover:text-[#c8a97e] transition-all duration-300">
              Contact Studio
            </button>
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'>
        <div className='w-px h-10 bg-gradient-to-b from-transparent to-white/30'></div>
        <span className='text-[8px] tracking-[0.3em] uppercase text-white/25'>Scroll</span>
      </div>

    </div>
  )
}

export default Header