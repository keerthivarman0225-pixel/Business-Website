import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  const inputBase = "w-full bg-transparent border-b border-white/10 py-4 text-sm text-white outline-none transition"
 

  const offices = [
    {
      type: 'Head Office',
      address: 'Chennai — 600127',
      mapUrl: 'https://maps.google.com',
    },
    {
      type: 'Branch Office',
      address: 'Pudukkottai — 622001',
      mapUrl: 'https://maps.google.com',
    },
  ]

  const contacts = [
    { label: 'Email', value: 'alayemarchitects@gmail.com', href: 'mailto:alayemarchitects@gmail.com' },
    { label: 'Mobile', value: '+91 91763 60856', href: 'tel:+919176360856' },
  ]

  return (
    <section className="bg-[#0a0a0a] text-white px-6 md:px-16 py-24">

      {/* HEADER */}
      <h2 className="text-4xl md:text-6xl mb-16">
        Let’s Build <span className="text-[#c8a97e]">Together</span>
      </h2>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-16">

        {/* FORM */}
        <div>
          {submitted ? (
            <p className="text-[#c8a97e] text-xl">Message Sent ✔</p>
          ) : (
            <form onSubmit={submit} className="space-y-8">

              <input name="name" placeholder="Full Name" onChange={handle} className={inputBase} />
              <input name="email" placeholder="Email" onChange={handle} className={inputBase} />
              <input name="phone" placeholder="Phone" onChange={handle} className={inputBase} />

              <textarea name="message" placeholder="Message" rows={4} onChange={handle} className={inputBase} />

              <button className="bg-[#c8a97e] px-8 py-3 text-black">
                {loading ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">

          {/* OFFICES */}
          <div>
            <h3 className="text-[#c8a97e] mb-4">Our Offices</h3>
            {offices.map((o, i) => (
              <div key={i} className="mb-4">
                <p className="text-sm">{o.type}</p>

                {/* ✅ FIXED MAP LINK */}
                <a href={o.mapUrl} target="_blank" className="text-xs text-[#c8a97e]">
                  View Map
                </a>

                <p className="text-white/40">{o.address}</p>
              </div>
            ))}
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[#c8a97e] mb-4">Contact</h3>

            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="block text-white/60 hover:text-[#c8a97e] mb-2"
              >
                {c.label}: {c.value}
              </a>
            ))}
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4">
            <a href="#" className="border px-4 py-2">Instagram</a>
            <a href="#" className="border px-4 py-2">LinkedIn</a>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact