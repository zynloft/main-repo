'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';

const sentences = [
  'Sleek theme designs',
  'Custom Shopify experiences',
  'App integrations that work',
  'Pixel-perfect storefronts',
  'Conversion-focused layouts',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = sentences[index % sentences.length];
    const typingSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      setDisplayText(prev => {
        const nextText = isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1);
        return nextText;
      });
 
      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % sentences.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
 <section className="relative w-full h-screen overflow-hidden overflow-x-hidden">
 <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
    <ParticlesBackground />
  </div>

      {/* Foreground content */}
      <div className="relative z-10 flex items-center h-screen px-6 text-white">
        <div className="max-w-2xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[40px] leading-[110%] sm:text-6xl sm:leading-[1.2] font-bold mb-6"
          >
            Future-Ready Shopify Design by  <span className="text-cyan-400">Zenloft</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-2xl sm:text-3xl text-gray-300 mb-4 min-h-[3rem]"
          >
            {displayText}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg text-gray-400 mb-8 max-w-md mx-auto"
          >
          
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex flex-wrap justify-start gap-4"
          >
           <button
  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  className="cursor-pointer px-6 py-3 bg-cyan-600 text-white font-medium rounded-full transition border border-transparent hover:bg-transparent hover:border-cyan-600 hover:text-cyan-400"
>
  View Our Work
</button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer px-6 py-3 border border-cyan-600 hover:bg-cyan-700 hover:text-white transition rounded-full text-cyan-400 font-medium"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
