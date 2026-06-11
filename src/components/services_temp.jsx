import React, { useState, useEffect } from 'react'

const services = [
  {
    number: '01',
    title: 'Architecture',
    subtitle: 'Form Meets Vision',
    description:
      'We design structures that transcend the ordinary — buildings that command presence, challenge convention, and leave a lasting impression on the skyline and the people who inhabit them.',
    details: [
      'Concept & Schematic Design',
      'Architectural Drawings & Documentation',
      '3D Visualization & Rendering',
      'Site Analysis & Planning',
      'Regulatory Approvals & Permits',
      'Sustainable Design Integration',
    ],
    stat: { num: '80+', label: 'Buildings Designed' },
  },
  {
    number: '02',
    title: 'Interior Design',
    subtitle: 'Space As Experience',
    description:
      'Every interior we craft is a carefully curated world — where light, material, proportion, and detail converge to create spaces that move people emotionally and function flawlessly.',
    details: [
      'Concept Development & Mood Boards',
      'Space Planning & Layout',
      'Material & Finish Selection',
      'Custom Furniture & Millwork',
      'Lighting Design',
      'Art & Accessory Curation',
    ],
    stat: { num: '120+', label: 'Interiors Delivered' },
  },
  {
    number: '03',
    title: 'Construction',
    subtitle: 'Built Without Compromise',
    description:
      'We bring designs to life with the same precision and ambition with which they were conceived. End-to-end construction management — zero shortcuts, absolute accountability.',
    details: [
      'Project Management & Scheduling',
      'Structural & Civil Works',
      'MEP Coordination',
      'Quality Control & Inspection',
      'Material Procurement',
      'Handover & Post-Construction Support',
    ],
    stat: { num: '50+', label: 'Projects Built' },
  },
]

// ─── Inquiry Modal Steps ───────────────────────────────────────────────────

const STEPS = [
  { id: 'service',   label: 'Service'   },
  { id: 'type',      label: 'Type'      },
  { id: 'details',   label: 'Details'   },
  { id: 'contact',   label: 'Contact'   },
]

const serviceOptions = [
  {
    key: 'architecture',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 24h20M14 4l8 8v12H6V12L14 4z" stroke="#c8a97e" strokeWidth="0.9"/>
        <path d="M10 24v-6h8v6" stroke="#c8a97e" strokeWidth="0.9"/>
      </svg>
    ),
    label: 'Architecture',
    sub: 'Design & structure',
  },
  {
    key: 'interior',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="0" stroke="#c8a97e" strokeWidth="0.9"/>
        <path d="M4 14h20M14 6v16" stroke="#c8a97e" strokeWidth="0.9" strokeDasharray="2 2"/>
        <circle cx="10" cy="10" r="1.5" fill="#c8a97e"/>
      </svg>
    ),
    label: 'Interior Design',
    sub: 'Space & ambiance',
  },
  {
    key: 'construction',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22h20M8 22V12l6-6 6 6v10" stroke="#c8a97e" strokeWidth="0.9"/>
        <rect x="11" y="16" width="6" height="6" stroke="#c8a97e" strokeWidth="0.9"/>
      </svg>
    ),
    label: 'Construction',
    sub: 'Build & deliver',
  },
  {
    key: 'elevation',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20h20M4 20l4-12h12l4 12" stroke="#c8a97e" strokeWidth="0.9"/>
        <path d="M10 20v-6h8v6" stroke="#c8a97e" strokeWidth="0.9"/>
        <path d="M13 14h2" stroke="#c8a97e" strokeWidth="0.9"/>
      </svg>
    ),
    label: 'Elevation Design',
    sub: 'Façade & exterior',
  },
]

const typeOptions = {
  architecture: [
    { key: 'residential', label: 'Residential', icon: '⌂', sub: 'Homes & villas' },
    { key: 'commercial',  label: 'Commercial',  icon: '▦', sub: 'Offices & retail' },
    { key: 'hospitality', label: 'Hospitality', icon: '◈', sub: 'Hotels & resorts' },
    { key: 'institutional', label: 'Institutional', icon: '◻', sub: 'Schools & civic' },
  ],
  interior: [
    { key: 'living',   label: 'Living Space',  icon: '⌂', sub: 'Lounges & rooms' },
    { key: 'kitchen',  label: 'Kitchen',        icon: '◈', sub: 'Modern kitchens' },
    { key: 'office',   label: 'Office',         icon: '▦', sub: 'Work environments' },
    { key: 'retail',   label: 'Retail',         icon: '◻', sub: 'Shops & showrooms' },
  ],
  construction: [
    { key: 'residential', label: 'Residential', icon: '⌂', sub: 'Homes & villas' },
    { key: 'commercial',  label: 'Commercial',  icon: '▦', sub: 'Offices & shops' },
    { key: 'villa',       label: 'Villa',        icon: '◈', sub: 'Luxury villas' },
    { key: 'renovation',  label: 'Renovation',  icon: '◻', sub: 'Refurbishment' },
  ],
  elevation: [
    { key: 'modern',      label: 'Modern',      icon: '▦', sub: 'Clean lines' },
    { key: 'classical',   label: 'Classical',   icon: '◈', sub: 'Timeless detail' },
    { key: 'contemporary',label: 'Contemporary',icon: '⌂', sub: 'Current trends' },
    { key: 'industrial',  label: 'Industrial',  icon: '◻', sub: 'Raw & bold' },
  ],
}

const budgetRanges = [
  '₹ 25L – 50L',
  '₹ 50L – 1Cr',
  '₹ 1Cr – 3Cr',
  '₹ 3Cr – 5Cr',
  '₹ 5Cr+',
]

const timelineOptions = [
  'ASAP (within 1 month)',
  '1 – 3 months',
  '3 – 6 months',
  '6 months+',
]

// ─── Step Progress Bar ─────────────────────────────────────────────────────

const StepBar = ({ current }) => (
  <div className="flex items-center gap-0 mb-10">
    {STEPS.map((s, i) => (
      <React.Fragment key={s.id}>
        <div className="flex flex-col items-center gap-1.5">
          <div className={`w-7 h-7 border flex items-center justify-center text-[9px] tracking-widest
            transition-all duration-300
            ${i < current  ? 'border-[#c8a97e] bg-[#c8a97e] text-black' :
              i === current ? 'border-[#c8a97e] text-[#c8a97e]' :
                              'border-white/10 text-white/20'}`}>
            {i < current ? (
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M1 3l2 2 4-4" stroke="black" strokeWidth="1.2"/>
              </svg>
            ) : (
              i + 1
            )}
          </div>
          <span className={`text-[8px] tracking-[0.25em] uppercase transition-colors duration-300
            ${i <= current ? 'text-[#c8a97e]' : 'text-white/15'}`}>
            {s.label}
          </span>
        </div>
        {i < STEPS.length - 1 && (
          <div className={`flex-1 h-px mx-2 mb-4 transition-all duration-500
            ${i < current ? 'bg-[#c8a97e]' : 'bg-white/[0.06]'}`} />
        )}
      </React.Fragment>
    ))}
  </div>
)

// ─── Option Card ───────────────────────────────────────────────────────────

const OptionCard = ({ selected, onClick, icon, label, sub, textIcon }) => (
  <button
    onClick={onClick}
    className={`group relative text-left p-5 border transition-all duration-300
      ${selected
        ? 'border-[#c8a97e] bg-[#c8a97e]/5'
        : 'border-white/[0.07] hover:border-white/20 bg-transparent'}`}
  >
    {selected && (
      <span className="absolute top-3 right-3 w-4 h-4 bg-[#c8a97e] flex items-center justify-center">
        <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
          <path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="black" strokeWidth="1.1"/>
        </svg>
      </span>
    )}
    <div className="mb-3">
      {icon || (
        <span className={`text-xl ${selected ? 'opacity-100' : 'opacity-30 group-hover:opacity-50'} transition-opacity`}>
          {textIcon}
        </span>
      )}
    </div>
    <p className={`font-cormorant text-xl font-light uppercase tracking-wide leading-none transition-colors duration-300
      ${selected ? 'text-[#c8a97e]' : 'text-white/70 group-hover:text-white'}`}>
      {label}
    </p>
    {sub && (
      <p className="text-[9px] tracking-[0.2em] uppercase text-white/25 mt-1.5">{sub}</p>
    )}
  </button>
)

// ─── Modal Component ───────────────────────────────────────────────────────

const InquiryModal = ({ onClose }) => {
  const [step, setStep]           = useState(0)
  const [service, setService]     = useState(null)
  const [type, setType]           = useState(null)
  const [budget, setBudget]       = useState(null)
  const [timeline, setTimeline]   = useState(null)
  const [plotSize, setPlotSize]   = useState('')
  const [notes, setNotes]         = useState('')
  const [name, setName]           = useState('')
  const [phone, setPhone]         = useState('')
  const [email, setEmail]         = useState('')
  const [city, setCity]           = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const canNext = () => {
    if (step === 0) return !!service
    if (step === 1) return !!type
    if (step === 2) return !!budget && !!timeline
    if (step === 3) return name.trim() && phone.trim() && email.trim()
    return false
  }

  const handleSubmit = () => {
    if (!canNext()) return
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: 'blur(6px)', background: 'rgba(10,10,10,0.85)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-[#0e0e0e] border border-white/[0.08] w-full max-w-2xl mx-4
        max-h-[90vh] overflow-y-auto">

        {/* Modal header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-white/[0.05]">
          <div>
            <p className="text-[8px] tracking-[0.45em] uppercase text-[#c8a97e] mb-2">New Inquiry</p>
            <h2 className="font-cormorant text-3xl font-light uppercase leading-none text-white">
              Start a Project
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 border border-white/10 flex items-center justify-center
              hover:border-white/30 transition-colors mt-1"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 1l8 8M9 1l-8 8" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
            </svg>
          </button>
        </div>

        <div className="px-8 py-8">
          {submitted ? (
            /* ── Success Screen ── */
            <div className="text-center py-8">
              <div className="w-14 h-14 border border-[#c8a97e] flex items-center justify-center mx-auto mb-6">
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
                  <path d="M1 7l6 6L19 1" stroke="#c8a97e" strokeWidth="0.9"/>
                </svg>
              </div>
              <p className="text-[9px] tracking-[0.45em] uppercase text-[#c8a97e] mb-3">Received</p>
              <h3 className="font-cormorant text-4xl font-light uppercase text-white mb-4">
                We'll Be In Touch
              </h3>
              <p className="text-[12px] leading-loose text-white/35 max-w-sm mx-auto mb-8">
                Thank you, <span className="text-white/60">{name}</span>. Our team will review your inquiry and reach out within 24 hours.
              </p>
              <div className="border border-white/[0.06] p-6 text-left inline-block min-w-[280px]">
                <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    ['Service',  serviceOptions.find(s => s.key === service)?.label],
                    ['Type',     typeOptions[service]?.find(t => t.key === type)?.label],
                    ['Budget',   budget],
                    ['Timeline', timeline],
                  ].map(([k, v]) => v && (
                    <div key={k}>
                      <p className="text-[8px] tracking-[0.25em] uppercase text-white/20 mb-0.5">{k}</p>
                      <p className="text-[11px] text-white/50">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <button
                  onClick={onClose}
                  className="text-[9px] tracking-[0.3em] uppercase text-[#c8a97e] border border-[#c8a97e]
                    px-8 py-3 hover:bg-[#c8a97e] hover:text-black transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <StepBar current={step} />

              {/* ── Step 0: Choose Service ── */}
              {step === 0 && (
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase text-white/25 mb-6">
                    What service are you looking for?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceOptions.map(opt => (
                      <OptionCard
                        key={opt.key}
                        selected={service === opt.key}
                        onClick={() => setService(opt.key)}
                        icon={opt.icon}
                        label={opt.label}
                        sub={opt.sub}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* ── Step 1: Choose Type ── */}
              {step === 1 && service && (
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase text-white/25 mb-1">
                    {serviceOptions.find(s => s.key === service)?.label} ›
                  </p>
                  <p className="text-[9px] tracking-[0.35em] uppercase text-white/25 mb-6">
                    What type of project?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {typeOptions[service]?.map(opt => (
                      <OptionCard
                        key={opt.key}
                        selected={type === opt.key}
                        onClick={() => setType(opt.key)}
                        textIcon={opt.icon}
                        label={opt.label}
                        sub={opt.sub}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* ── Step 2: Project Details ── */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <p className="text-[9px] tracking-[0.35em] uppercase text-white/25 mb-5">
                      Budget Range
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map(b => (
                        <button
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`text-[9px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-200
                            ${budget === b
                              ? 'border-[#c8a97e] text-[#c8a97e] bg-[#c8a97e]/5'
                              : 'border-white/[0.08] text-white/30 hover:border-white/20 hover:text-white/50'}`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[9px] tracking-[0.35em] uppercase text-white/25 mb-5">
                      Project Timeline
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {timelineOptions.map(t => (
                        <button
                          key={t}
                          onClick={() => setTimeline(t)}
                          className={`text-[9px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-200
                            ${timeline === t
                              ? 'border-[#c8a97e] text-[#c8a97e] bg-[#c8a97e]/5'
                              : 'border-white/[0.08] text-white/30 hover:border-white/20 hover:text-white/50'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[8px] tracking-[0.3em] uppercase text-white/25 block mb-2">
                        Plot / Site Size (optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2400 sq.ft"
                        value={plotSize}
                        onChange={e => setPlotSize(e.target.value)}
                        className="w-full bg-transparent border border-white/[0.07] px-4 py-3
                          text-[11px] text-white/60 placeholder-white/15
                          focus:outline-none focus:border-[#c8a97e]/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[8px] tracking-[0.3em] uppercase text-white/25 block mb-2">
                        Additional Notes (optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Any specific vision..."
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                        className="w-full bg-transparent border border-white/[0.07] px-4 py-3
                          text-[11px] text-white/60 placeholder-white/15
                          focus:outline-none focus:border-[#c8a97e]/40 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 3: Contact ── */}
              {step === 3 && (
                <div className="space-y-5">
                  <p className="text-[9px] tracking-[0.35em] uppercase text-white/25 mb-2">
                    Your contact details
                  </p>
                  {[
                    { label: 'Full Name',     value: name,  set: setName,  placeholder: 'Your full name',    required: true },
                    { label: 'Phone Number',  value: phone, set: setPhone, placeholder: '+91 98765 43210',   required: true },
                    { label: 'Email Address', value: email, set: setEmail, placeholder: 'you@example.com',   required: true },
                    { label: 'City / Area',   value: city,  set: setCity,  placeholder: 'Chennai, Bangalore…', required: false },
                  ].map(({ label, value, set, placeholder, required }) => (
                    <div key={label}>
                      <label className="text-[8px] tracking-[0.3em] uppercase text-white/25 flex items-center gap-1 mb-2">
                        {label}
                        {required && <span className="text-[#c8a97e]">*</span>}
                      </label>
                      <input
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={e => set(e.target.value)}
                        className="w-full bg-transparent border border-white/[0.07] px-4 py-3
                          text-[12px] text-white/60 placeholder-white/15
                          focus:outline-none focus:border-[#c8a97e]/50 transition-colors"
                      />
                    </div>
                  ))}

                  {/* Summary strip */}
                  {service && type && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {[
                        serviceOptions.find(s => s.key === service)?.label,
                        typeOptions[service]?.find(t => t.key === type)?.label,
                        budget,
                        timeline,
                      ].filter(Boolean).map(tag => (
                        <span key={tag}
                          className="text-[8px] tracking-[0.2em] uppercase border border-white/[0.07]
                            px-3 py-1 text-white/25">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ── Navigation ── */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/[0.05]">
                <button
                  onClick={() => step > 0 ? setStep(s => s - 1) : onClose()}
                  className="text-[9px] tracking-[0.3em] uppercase text-white/25
                    hover:text-white/50 transition-colors flex items-center gap-2"
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M11 4H1M4 1L1 4l3 3" stroke="currentColor" strokeWidth="0.8"/>
                  </svg>
                  {step === 0 ? 'Cancel' : 'Back'}
                </button>

                {step < STEPS.length - 1 ? (
                  <button
                    onClick={() => canNext() && setStep(s => s + 1)}
                    disabled={!canNext()}
                    className={`flex items-center gap-3 text-[9px] tracking-[0.25em] uppercase
                      px-8 py-4 font-medium border transition-all duration-300
                      ${canNext()
                        ? 'bg-[#c8a97e] text-black border-[#c8a97e] hover:bg-transparent hover:text-[#c8a97e]'
                        : 'bg-transparent text-white/15 border-white/[0.06] cursor-not-allowed'}`}
                  >
                    Continue
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="0.9"/>
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canNext()}
                    className={`flex items-center gap-3 text-[9px] tracking-[0.25em] uppercase
                      px-8 py-4 font-medium border transition-all duration-300
                      ${canNext()
                        ? 'bg-[#c8a97e] text-black border-[#c8a97e] hover:bg-transparent hover:text-[#c8a97e]'
                        : 'bg-transparent text-white/15 border-white/[0.06] cursor-not-allowed'}`}
                  >
                    Submit Inquiry
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="0.9"/>
                    </svg>
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main Section ──────────────────────────────────────────────────────────

const Services = () => {
  const [active, setActive]       = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section
        id="services"
        className="bg-[#0e0e0e] text-white px-6 md:px-16 lg:px-24 py-28 scroll-mt-20"
      >
        {/* Eyebrow */}
        <p className="text-[9px] tracking-[0.4em] uppercase text-[#c8a97e] mb-4">
          What We Do
        </p>
        <div className="w-10 h-px bg-[#c8a97e] mb-6" />

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light uppercase leading-none">
            Three Disciplines,<br />
            <span className="italic text-[#c8a97e]">One Vision</span>
          </h2>
          <p className="text-[12px] leading-loose text-white/35 font-light max-w-xs md:text-right">
            From the first sketch to the final build — we control every layer of the process with precision and intent.
          </p>
        </div>

        {/* Service Accordion Rows */}
        <div className="flex flex-col divide-y divide-white/[0.06] border-t border-white/[0.06]">
          {services.map((svc, i) => (
            <div key={i}>
              <div
                className="group grid grid-cols-[64px_1fr_auto] md:grid-cols-[80px_1fr_160px_80px] items-center gap-4 py-8 cursor-pointer"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="font-cormorant text-4xl font-light text-white/10 group-hover:text-[#c8a97e] transition-colors duration-300">
                  {svc.number}
                </span>
                <div>
                  <h3 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wide leading-none group-hover:text-[#c8a97e] transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-white/25 mt-2">
                    {svc.subtitle}
                  </p>
                </div>
                <div className="hidden md:block text-right">
                  <div className="font-cormorant text-3xl font-light text-white/20 group-hover:text-white/50 transition-colors duration-300">
                    {svc.stat.num}
                  </div>
                  <div className="text-[8px] tracking-[0.2em] uppercase text-white/20 mt-1">
                    {svc.stat.label}
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className={`w-8 h-8 border border-white/10 flex items-center justify-center
                    transition-all duration-300
                    ${active === i ? 'border-[#c8a97e] rotate-45' : 'group-hover:border-white/30'}`}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke={active === i ? '#c8a97e' : 'rgba(255,255,255,0.4)'} strokeWidth="0.8"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out
                ${active === i ? 'max-h-[600px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pl-0 md:pl-20 pb-4 border-t border-white/[0.05] pt-10">
                  <div>
                    <p className="text-[13px] leading-[2] text-white/45 font-light mb-8">
                      {svc.description}
                    </p>
                    <div className="border border-white/[0.07] p-6 inline-block">
                      <div className="font-cormorant text-5xl font-light text-[#c8a97e] leading-none">
                        {svc.stat.num}
                      </div>
                      <div className="text-[8px] tracking-[0.3em] uppercase text-white/25 mt-2">
                        {svc.stat.label}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.35em] uppercase text-[#c8a97e] mb-6">
                      What's Included
                    </p>
                    <ul className="space-y-0 divide-y divide-white/[0.05]">
                      {svc.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-4 py-3.5">
                          <span className="w-1 h-1 rounded-full bg-[#c8a97e] flex-shrink-0" />
                          <span className="text-[11px] tracking-[0.1em] text-white/45 font-light">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border border-white/[0.06] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#c8a97e] mb-3">
              Ready to Build?
            </p>
            <h3 className="font-cormorant text-4xl md:text-5xl font-light uppercase leading-tight">
              Let's Create Something<br />
              <span className="italic text-white/40">Extraordinary</span>
            </h3>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-3 text-[9px] tracking-[0.25em] uppercase
              bg-[#c8a97e] text-black px-8 py-4 font-medium
              hover:bg-transparent hover:text-[#c8a97e] border border-[#c8a97e] transition-all duration-300 whitespace-nowrap"
          >
            Start a Project
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="0.9"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Inquiry Modal */}
      {modalOpen && <InquiryModal onClose={() => setModalOpen(false)} />}
    </>
  )
}

export default Services
