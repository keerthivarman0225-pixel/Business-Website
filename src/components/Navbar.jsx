import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = ['Home', 'About', 'Services', 'Projects']

  // ✅ Smooth scroll with offset
  const handleScrollTo = (e, id) => {
    e.preventDefault()

    const element = document.getElementById(id)

    if (element) {
      const yOffset = -100
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      })
    }

    setMenuOpen(false)
  }

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 px-10 py-5 flex items-center justify-between transition-all duration-500
        ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4'
            : 'bg-transparent backdrop-blur-sm border-b border-white/5'
        }`}
      >
        {/* Logo */}
        <span className="font-cormorant text-xl font-semibold tracking-[0.2em] text-white uppercase">
          AlayeM Architects
          <span className="inline-block w-1.5 h-1.5 bg-[#c8a97e] rounded-full ml-1.5"></span>
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScrollTo(e, item.toLowerCase())}
                className="relative text-[10px] tracking-[0.25em] uppercase text-white/60 hover:text-white transition duration-300 group pb-1"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-[#c8a97e] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* ✅ CONTACT BUTTON (FIXED) */}
        <button
          onClick={(e) => handleScrollTo(e, 'contact')}
          className="hidden md:block text-[10px] tracking-[0.2em] uppercase text-white/60 border border-white/20 px-5 py-2.5 hover:border-[#c8a97e] hover:text-[#c8a97e] transition-all duration-300"
        >
          Contact
        </button>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          className="md:hidden w-6 cursor-pointer invert opacity-70 hover:opacity-100 transition-opacity"
          alt="menu"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center">
          
          {/* Logo */}
          <div className="absolute top-8 left-10 font-cormorant text-xl font-semibold tracking-[0.2em] text-white uppercase">
            AlayeM Architects
            <span className="inline-block w-1.5 h-1.5 bg-[#c8a97e] rounded-full ml-1.5"></span>
          </div>

          {/* Close */}
          <img
            src={assets.cross_icon}
            alt="close"
            className="absolute top-6 right-8 w-5 cursor-pointer invert opacity-60 hover:opacity-100 transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <ul className="flex flex-col gap-8 text-center">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScrollTo(e, item.toLowerCase())}
                  className="font-cormorant text-5xl font-light text-white/80 hover:text-white tracking-widest uppercase transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* ✅ MOBILE CONTACT BUTTON (BONUS FIX) */}
          <button
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="mt-10 text-[10px] tracking-[0.2em] uppercase text-white/60 border border-white/20 px-6 py-3 hover:border-[#c8a97e] hover:text-[#c8a97e]"
          >
            Contact
          </button>

          {/* Footer */}
          <div className="absolute bottom-10 text-[9px] tracking-[0.3em] text-white/20 uppercase">
            Est. 2015 · Design Studio
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar