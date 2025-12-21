import React, { useState } from 'react'
import useInView from '../hooks/useInView'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [ref, visible] = useInView({ threshold: 0.05 })

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name.trim() || !emailRegex.test(email) || message.trim().length < 6) {
      alert('Please provide a valid name, email, and message.')
      return
    }

    e.currentTarget.submit()
  }

  return (
    // 🔥 FULL WIDTH SECTION (NO BOX)
    <section id="contact" className="w-full py-28">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 ${
          visible ? 'fade-up-enter-active' : 'fade-up-enter'
        }`}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT TEXT */}
          <div>
            <p className="text-gray-300 mb-4 text-lg">
              Want to work together or have a question?
            </p>
            <p className="text-gray-400 mb-6">
              Send a message and I’ll get back to you.
            </p>

            <p className="text-gray-400">
              Email:{' '}
              <a
                href="mailto:yashika@example.com"
                className="text-purple-400 hover:underline"
              >
                yashikakannan05@gmail.com
              </a>
            </p>
          </div>

          {/* FORM CARD */}
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8"
          >
            <input type="hidden" name="form-name" value="contact" />

            <label className="block mb-4">
              <span className="text-sm text-gray-300">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full p-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500"
                required
              />
            </label>

            <label className="block mb-4">
              <span className="text-sm text-gray-300">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full p-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500"
                required
              />
            </label>

            <label className="block mb-6">
              <span className="text-sm text-gray-300">Message</span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full p-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500"
                required
              />
            </label>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
