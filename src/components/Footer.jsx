import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  const lastUpdated = new Date().toLocaleDateString()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[#0f0f10] text-white mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div>
          <h2 className="text-2xl font-bold">Kuldeep Kohli</h2>
          <p className="text-sm text-white/70 mt-2">Computer Science student — building web apps, experimenting with AI, and learning every day.</p>
        </div>

        <div className="">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm text-white/80 space-y-2">
            <li><a href="#home" className="hover:text-red-200">Home</a></li>
            <li><a href="#skills" className="hover:text-red-200">Skills</a></li>
            <li><a href="#project" className="hover:text-red-200">Projects</a></li>
            <li><a href="#certification" className="hover:text-red-200">Certifications</a></li>
            <li><a href="#contact" className="hover:text-red-200">Contact</a></li>
          </ul>
        </div>

        <div className="text-sm text-white/80">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="mb-3">Email: <span className="text-red-200">kuldpkohli2003@gmail.com</span></p>
          <button onClick={scrollTop} className="inline-block bg-white/5 hover:bg-white/10 transition px-3 py-2 rounded-md text-sm">Back to top</button>
          <div className="mt-6 text-xs text-white/50">
            <div>Last updated: <span className="text-white/80">{lastUpdated}</span></div>
            <div className="mt-2">© {year} Kuldeep Kohli. All rights reserved.</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 mt-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 text-xs text-white/40 text-center">Design & built by Kuldeep Kohli</div>
      </div>
    </footer>
  )
}

export default Footer