import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  const links = {
    Studio: ['About Us', 'Our Team', 'Careers', 'Press'],
    Services: ['Architecture', 'Interior Design', 'Construction', 'Consultation'],
    Projects: ['Completed', 'Ongoing', 'Upcoming', 'Case Studies'],
    Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Policy'],
  }

  return (
    <footer className="bg-[#080808] text-white border-t border-white/[0.05]">

      {/* TOP SECTION */}
      <div className="px-6 md:px-16 lg:px-24 py-20 border-b border-white/[0.05]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          <div className="max-w-2xl">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#c8a97e] mb-5">
              Est. 2015 · Alayem Architects
            </p>

            <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light uppercase leading-[1.05]">
              Designing the <br />
              <span className="italic text-white/25">World of</span>{' '}
              <span className="italic text-[#c8a97e]">Tomorrow</span>
            </h2>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm w-full">
            <p className="text-[8px] tracking-[0.35em] uppercase text-white/25 mb-4">
              Stay Informed
            </p>

            {subscribed ? (
              <div className="border border-white/[0.07] px-6 py-5">
                <p className="text-[#c8a97e] text-xs uppercase tracking-wide">
                  You're subscribed ✔
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="flex border border-white/[0.08]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent px-5 py-3 text-sm outline-none"
                  />
                  <button className="px-5 bg-[#c8a97e] text-black text-xs uppercase">
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* MAIN GRID */}
      <div className="px-6 md:px-16 lg:px-24 py-16 border-b border-white/[0.05]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div>
            <img
              src={assets.logo_dark}
              alt="logo"
              className="w-24 mb-4 invert opacity-70"
            />
            <p className="text-sm text-white/40">
              A multidisciplinary architecture studio crafting bold spaces.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-xs text-[#c8a97e] uppercase mb-4">
                {section}
              </p>

              <ul className="space-y-2">
                {items.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink(link)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition"
                    >
                      <span
                        className={`h-[1px] bg-[#c8a97e] transition-all ${
                          hoveredLink === link ? 'w-4' : 'w-0'
                        }`}
                      />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* BOTTOM */}
      <div className="px-6 md:px-16 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Alayem Architects
        </p>

        <p className="text-xs text-white/30">
          Crafted with Precision
        </p>

      </div>

    </footer>
  )
}

export default Footer