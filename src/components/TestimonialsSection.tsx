'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah J.",
    role: "Founder, Revi Glow",
    quote:
      "Zenloft brought our brand to life with a stunning website that exceeded expectations. The process was smooth and super professional!",
  },
  {
    name: "David R.",
    role: "CEO, MindRight",
    quote:
      "Top-notch design and execution. Zenloft delivered exactly what we needed to scale our digital presence.",
  },
  {
    name: "Elena M.",
    role: "Marketing Lead, Kickit",
    quote:
      "Impressive attention to detail and fast delivery. The site looks modern, clean, and works perfectly on all devices.",
  },
  {
    name: "Chris D.",
    role: "Owner, Clean Pets",
    quote:
      "They completely transformed our site’s look and feel — our conversion rate improved instantly!",
  },
  {
    name: "Amanda K.",
    role: "Director, ColorLab Transfers",
    quote:
      "Highly recommend Zenloft — creative, reliable, and focused on results. We'll definitely work with them again.",
  },
  {
    name: "Jason T.",
    role: "Brand Manager, Blow Gas Co.",
    quote:
      "From strategy to design, Zenloft nailed it. The team’s work ethic and design instincts are unmatched.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gray-950 text-white py-28 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-16"
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-700/20 transition"
            >
              <p className="text-gray-300 italic mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="text-cyan-400 font-semibold">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
