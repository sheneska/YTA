'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* Logo chip */}
                <Image
                  src="/assets/logos/ytalogo3.png"
                  alt="Young Talent Agency"
                  width={40}
                  height={40}
                  className="h-20 w-auto object-contain"
                  priority
                />
            </div>

            <p className="text-gray-300 leading-relaxed">
              Connecting brands with authentic creators to build meaningful partnerships and
              drive exceptional results through strategic influencer marketing.
            </p>

            {/* Social chips */}
            <div className="flex gap-4">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter,   label: 'Twitter'   },
                { Icon: Linkedin,  label: 'LinkedIn'  },
                { Icon: Youtube,   label: 'YouTube'   },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg grid place-items-center
                             bg-gradient-to-r from-purple-600/20 to-pink-600/20
                             border border-purple-500/30 text-purple-200
                             transition-all duration-300 hover:from-purple-600 hover:to-pink-600
                             hover:border-purple-400 hover:text-white transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Services</h4>
            <ul className="space-y-3">
              {[
                'Influencer Marketing',
                'Talent Management',
                'Web Development & Design'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Roster', 'Case Studies'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg grid place-items-center
                                bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-300">contact@youngtalentsagency.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Young Talent Agency. Design & Development by Bix LLC.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
