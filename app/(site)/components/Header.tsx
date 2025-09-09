'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

type PageType = 'home' | 'about' | 'services' | 'roster' | 'case-studies';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // e.g. '/', '/services', '/services#brand-services' => '/services'

  const navigationItems: { id: PageType; label: string; href: string; match: (p: string) => boolean }[] = [
    { id: 'home',         label: 'Home',         href: '/',              match: (p) => p === '/' },
    { id: 'about',        label: 'About Us',     href: '/about',         match: (p) => p.startsWith('/about') },
    { id: 'services',     label: 'Services',     href: '/services',      match: (p) => p.startsWith('/services') },
    { id: 'roster',       label: 'Roster',       href: '/roster',        match: (p) => p.startsWith('/roster') },
    { id: 'case-studies', label: 'Case Studies', href: '/case-studies',  match: (p) => p.startsWith('/case-studies') },
  ];

  const linkClasses = (active: boolean) =>
    [
      'relative px-4 py-2 rounded-lg font-medium transition-all duration-300',
      active
        ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 shadow-md'
        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50',
    ].join(' ');

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="Go to Home">
            <Image
              src="/assets/logos/ytalogo.png"
              alt="Young Talent Agency"
              width={40}
              height={40}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const active = item.match(pathname);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={linkClasses(active)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => {
                const active = item.match(pathname);
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={[
                      'px-4 py-3 rounded-lg font-medium text-left transition-all duration-300',
                      active
                        ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-center"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
