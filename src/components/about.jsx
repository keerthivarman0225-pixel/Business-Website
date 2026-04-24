import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#111] text-white py-24 md:py-32 px-6 md:px-16 lg:px-28 scroll-mt-32"
    >

      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c8a97e] mb-4">
          Est. 2015 · Alayem Architects
        </p>

        {/* Gold Line */}
        <div className="w-12 h-px bg-[#c8a97e] mb-6" />

        {/* Headline */}
        <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light uppercase leading-tight mb-16 md:mb-20">
          We Don&apos;t Just <br />
          Design — We{' '}
          <span className="italic text-[#c8a97e]">Redefine</span>
        </h2>

        {/* Two Column Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          
          <div className="space-y-6">
            <p className="text-sm md:text-[13px] leading-relaxed text-white/60 font-light tracking-wide">
              Founded in 2015, Alayem Architects was built on a single conviction:
              that great architecture is not just about structure — it is about shaping
              how people experience the world around them.
            </p>

            <p className="text-sm md:text-[13px] leading-relaxed text-white/60 font-light tracking-wide">
              Over a decade, we have grown from a bold idea into a multidisciplinary
              studio delivering architecture, interior design, and construction with
              unwavering precision and vision.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-sm md:text-[13px] leading-relaxed text-white/60 font-light tracking-wide">
              Every project we undertake is a statement — a fusion of innovation,
              craftsmanship, and deeply considered design thinking. We push boundaries
              without losing sight of purpose.
            </p>

            <p className="text-sm md:text-[13px] leading-relaxed text-white/60 font-light tracking-wide">
              From concept sketches to final construction, we control every detail —
              ensuring every space we create is as functional as it is extraordinary.
            </p>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 border border-white/[0.08]">
          {[
            { num: '10+', label: 'Years of Excellence' },
            { num: '150+', label: 'Projects Delivered' },
            { num: '3', label: 'Core Disciplines' },
            { num: '100%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#111] px-6 md:px-8 py-8 md:py-10 
              border-r border-b border-white/[0.08] 
              last:border-r-0 md:[&:nth-child(4)]:border-r-0
              hover:bg-[#151515] transition duration-300"
            >
              <div className="font-cormorant text-4xl md:text-5xl font-light text-white">
                {stat.num}
              </div>

              <div className="text-[10px] tracking-[0.25em] uppercase text-white/40 mt-3">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.08] my-20" />

        {/* Services */}
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c8a97e] mb-8">
          What We Do
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.08]">
          {[
            {
              num: '01',
              title: 'Architecture',
              desc: 'Bold, purposeful structures that stand as landmarks. We design buildings that speak — balancing form, function, and future.',
            },
            {
              num: '02',
              title: 'Interior Design',
              desc: 'Spaces curated with intention. Every detail — light, material, proportion — is crafted to create environments that inspire.',
            },
            {
              num: '03',
              title: 'Construction',
              desc: 'End-to-end construction managed with precision. We build what we design — no compromises, no exceptions.',
            },
          ].map((svc, i) => (
            <div
              key={i}
              className="group bg-[#111] px-8 py-10 border-r border-white/[0.08] 
              last:border-r-0 border-t-2 border-t-transparent 
              hover:border-t-[#c8a97e] hover:bg-[#151515] transition-all duration-300"
            >
              <div className="font-cormorant text-4xl font-light text-white/10 mb-5">
                {svc.num}
              </div>

              <div className="text-[11px] tracking-[0.2em] uppercase text-white mb-3">
                {svc.title}
              </div>

              <div className="text-[13px] leading-relaxed text-white/50 font-light">
                {svc.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.08] my-20" />

        {/* Timeline */}
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c8a97e] mb-8">
          Our Milestones
        </p>

        <div className="divide-y divide-white/[0.08] border-t border-white/[0.08]">
          {[
            { year: '2015', title: 'Studio Founded', desc: 'Alayem Architects was established with a vision to redefine architectural design.' },
            { year: '2017', title: 'Interior Division Launched', desc: 'Expanded into interior design with a dedicated studio.' },
            { year: '2019', title: '50th Project Milestone', desc: 'Delivered our 50th landmark project.' },
            { year: '2021', title: 'Construction Arm Established', desc: 'Brought construction in-house for full control.' },
            { year: '2025', title: 'A Decade of Design', desc: '10+ years, 150+ projects, growing legacy.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-8 md:gap-12 py-6 md:py-8">
              
              <div className="font-cormorant text-2xl md:text-3xl text-[#c8a97e] min-w-[70px]">
                {item.year}
              </div>

              <div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-white mb-2">
                  {item.title}
                </div>

                <div className="text-[13px] text-white/50 leading-relaxed font-light">
                  {item.desc}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About