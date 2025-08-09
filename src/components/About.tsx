'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { Code2, Brush, Zap, Puzzle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-gray-950 text-white py-28 px-6 min-h-[800px] flex items-center"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-cyan-400">
            About Zenloft
          </h2>
          <p className="text-lg text-gray-300 mb-6">
           We are a team of experienced Shopify developers who specialize in transforming Figma designs into powerful, high-performing online stores.
            Whether you need a custom theme, app integrations, or advanced storefront functionality — we bring your vision to life with precision and creativity.
          </p>

          <div className="grid gap-4 mt-8">
            <Feature icon={Brush} title="Custom Theme Design" />
            <Feature icon={Code2} title="Figma to Shopify Development" />
            <Feature icon={Zap} title="App Integration & Automation" />
            <Feature icon={Puzzle} title="Advanced Custom Functionality" />
          </div>
        </motion.div>

        {/* Right - Image or graphic */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/modern-website-design.webp"
            alt="About Zenloft"
            width={500}
            height={500}
            className="w-full max-w-md rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <Icon className="w-6 h-6 text-cyan-400" />
      <span className="text-white text-lg">{title}</span>
    </div>
  );
}
