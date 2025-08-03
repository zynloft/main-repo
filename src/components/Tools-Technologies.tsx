'use client';

import { motion } from 'framer-motion';

const tools = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Figma",
  "Shopify",
  "WordPress",
  "Framer Motion",
  "Git",
  "Vercel",
  "HTML5",
  "CSS3",
];

export default function TechStackSection() {
  return (
    <section id="tech" className="bg-black text-white py-28 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-16"
        >
          Tools & Technologies We Use
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-gray-900 rounded-xl py-6 px-4 text-cyan-300 text-lg font-medium hover:bg-gray-800 transition"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
