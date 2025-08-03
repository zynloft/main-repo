'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Podcast Monkey",
    description: "A podcast production service handling editing, social media content, and distribution for creators effortlessly.",
    link: "https://podcastmonkey.co/",
    image: "/podcastmonkey.png",
  },
  {
    title: "Appa Life",
    description: "AppaLife offers caffeine-free, mushroom-based energy shots for natural, jitter-free focus and vitality.",
    link: "https://www.appalife.com/",
    image: "/appa-life.png",
  },
  {
    title: "Blow Gas",
    description: "Blow Gas Co sells a variety of hemp products, including THCA flowers, vapes, and edibles.",
    link: "https://blowgas.com/",
    image: "/blow-gas.png",
  },
  {
    title: "Lammar Marie",
    description: "Lammar Marie offers gourmet popcorn with unique flavors, perfect for gifting or special occasions.",
    link: "https://lammarmarie.com/",
    image: "/lammarmarie.png",
  },
  {
    title: "Clean Pets",
    description: "Clean Pets offers natural wellness chews for pets, supporting gut health, joints, skin, and more.",
    link: "https://shopcleanpets.com/",
    image: "/clean-pets.png",
  },
  {
    title: "Kick It",
    description: "Kickit offers a fun and easy-to-play soccer tennis game, perfect for all ages and skill levels.",
    link: "https://kickit.net/",
    image: "/kick-it.png",
  },
  {
    title: "Native Ceuticals",
    description: "PureSkin Organic offers natural, organic skincare products for rejuvenation and nourishment.",
    link: "https://pureskinorganic.com/",
    image: "/pureskinorganic.png",
  },
  {
    title: "Drink Miils",
    description: "​MIILS offers space-inspired meal shakes with 19g protein, 3g sugar, and crispy inclusions.",
    link: "https://www.drinkmiils.com/",
    image: "/miils.png",
  },
  {
    title: "Doctor Skin Collagen",
    description: "Doctor Skin Collagen offers collagen-boosting skincare for youthful, radiant skin.",
    link: "https://doctorskincollagen.com/",
    image: "/doctorskincollagen.png",
  },
];

const moreProjects = [
  { name: "Revi Glow", link: "https://reviglow.com/" },
  { name: "Hook Ya", link: "https://hookyaproducts.com/" },
  { name: "Strongrr", link: "https://strongrrsupplements.com/" },
  { name: "Nature Fusion Glow", link: "https://naturefusionglow.com/" },
  { name: "Everwell Hemp", link: "https://everwellhemp.com/" },
  { name: "Mind Right", link: "https://getmindright.com/" },
  { name: "Green Virgin", link: "https://greenvirginproducts.com/" },
  { name: "DesMirage", link: "https://www.desmirage.com/" },
  { name: "Cases By Source", link: "https://www.casesbysource.com/" },
  { name: "Power Fit", link: "https://thepowerfit.com/" },
  { name: "Runur Run", link: "https://runur.run/" },
  { name: "BDD Brands", link: "https://bddbrands.com/" },
  { name: "ColorLab Transfers", link: "https://www.colorlabtransfers.com/" },
  { name: "Ipso Facto", link: "https://ipsopromo.com/pages/landing-page" },
  { name: "PurPet", link: "https://purpetco.com/" },
  { name: "Health Vape", link: "https://healthvape.com/" },
  { name: "Leefy Organics", link: "https://leefyorganics.com/" },
];

export default function PortfolioSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-12 text-center">
          Our Work
        </h2>

        {/* Main Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div
                className="relative h-[300px] overflow-hidden cursor-pointer"
                onClick={() => setActiveImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={1000}
                  className="absolute top-0 left-0 w-full h-auto transition-transform duration-[10000ms] ease-linear hover:-translate-y-[65%]"
                />
              </div>
              <div className="p-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-cyan-400 font-semibold hover:underline"
                >
                  {project.title}
                </a>
                <p className="text-sm text-gray-400 mt-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-6 text-center text-cyan-400">More Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {moreProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-white hover:underline transition"
              >
                {project.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-white/10 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition"
              onClick={() => setActiveImage(null)}
            >
              &times;
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-transparent rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '90%',
                height: '90%',
                maxWidth: '60%',
              }}
            >
              <div className="h-full overflow-y-auto rounded-md shadow-xl">
                <Image
                  src={activeImage}
                  alt="Full project preview"
                  width={1200}
                  height={3000}
                  className="object-contain w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    
  );
}
