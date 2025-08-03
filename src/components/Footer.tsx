'use client';

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright & Phone */}
        <div className="text-sm text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Zenloft. All rights reserved.</p>
          <a
            href="tel:+918720069456" // Replace with your number
            className="inline-flex items-center gap-2 mt-2 text-gray-400 hover:text-cyan-400 transition"
          >
            <FaPhone className="text-base" /> +91 8720069456
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-xl justify-center">
          <a
            href="https://www.linkedin.com/in/zyn-loft-373171372/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          {/* <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a> */}

          <a
            href="https://x.com/ZynLoft"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.instagram.com/zynloft/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/918720069456" // Replace with your full WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:zynloft@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
