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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I&apos;m Hunter Harris</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Engineer. Data Analyst and Scientist. Lover of AI. Creating what&#39;s in my head.
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

      {/* Projects */}
      <section className="py-20 px-8 bg-gray-950">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://github.com/JamesPortfolioProjects/edgar-financial-extractor" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
              <h3 className="text-2xl font-semibold mb-2">SEC EDGAR Financial Extractor</h3>
              <p className="text-gray-400 text-sm">
                Python pipeline that scrapes and parses 10-K filings from EDGAR using AI-based tagging and exports clean financial statements into Excel.
              </p>
            </a>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-2">AI Shopping Assistant (In Progress)</h3>
              <p className="text-gray-400 text-sm">
                Real-time AI-powered product recommendation engine combining scraping, embeddings, and smart UI.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-2">Global Deaf Research Dashboard</h3>
              <p className="text-gray-400 text-sm">
                Tableau visualization project exploring data for the Global Deaf community: accessibility, education, outreach.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-2">Portfolio Site (This Site)</h3>
              <p className="text-gray-400 text-sm">
                Developer portfolio using React, Next.js, Tailwind, and Framer Motion. Includes interactive scenes and 3D visual intro (coming soon).
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section className="py-20 px-8 bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold">Data Science Intern – AI Labs (2024)</h3>
              <p className="text-sm">Worked on training and deploying machine learning models for internal analytics dashboards. Contributed to data cleaning pipeline using Python & Pandas.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Student Developer – Louisiana Tech University</h3>
              <p className="text-sm">Collaborated on student-led engineering demos and coursework involving financial modeling, dashboard creation, and basic AI tool integrations.</p>
            </div>
          </div>
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
            Let&apos;s connect! Reach me via email or check out my GitHub.
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
