'use client'

import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="flex items-center justify-center h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Hunter Harris</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Engineer. Data Analyst and Scientist. Lover of AI. Creating what’s in my head.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="py-20 px-8 bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
            <li>Python</li>
            <li>React</li>
            <li>Data Analysis</li>
            <li>Machine Learning</li>
            <li>SQL</li>
            <li>JavaScript</li>
          </ul>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="py-20 px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            Let’s connect! Reach me via email or check out my GitHub.
          </p>
          <div className="space-x-6">
            <a
              href="mailto:importantemailsforjames@gmail.com"
              className="underline text-blue-400 hover:text-blue-300"
            >
              Email
            </a>
            <a
              href="https://github.com/JamesPortfolioProjects"
              className="underline text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
