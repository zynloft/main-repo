'use client';

import { motion } from 'framer-motion';
import { Wrench, Paintbrush2, MonitorSmartphone, Rocket, Bolt, Layers } from 'lucide-react';

const services = [
  {
    icon: Paintbrush2,
    title: 'Custom Shopify Theme Design',
    desc: 'Pixel-perfect themes tailored to your brand’s identity and user needs.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Figma to Shopify',
    desc: 'Transform Figma designs into fast, responsive Shopify storefronts.',
  },
  {
    icon: Bolt,
    title: 'App Integration & Automation',
    desc: 'Seamlessly connect your store to apps and streamline workflows.',
  },
  {
    icon: Wrench,
    title: 'Advanced Shopify Functions',
    desc: 'Subscriptions, custom carts, metafields, dynamic pricing — fully supported.',
  },
  {
    icon: Layers,
    title: 'Performance Optimization',
    desc: 'Lightning-fast load times and performance tuning for higher conversions.',
  },
  {
    icon: Rocket,
    title: 'Store Setup & Launch',
    desc: 'From zero to launch — complete Shopify store setup and onboarding.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-6"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg"
        >
          We build stunning Shopify experiences — from wireframe to launch, theme to app, speed to conversion.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition"
            >
              <service.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
