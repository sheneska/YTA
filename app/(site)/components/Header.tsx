'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

type PageType = 'home' | 'about' | 'services' | 'roster' | 'case-studies';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigationItems: { id: PageType; label: string; href?: string }[] = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About Us', href: "/about" },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'roster', label: 'Roster', href: '/roster' },
    { id: 'case-studies', label: 'Case Studies', href: '/casestudies' },
  ];

  <nav className="hidden md:flex items-center space-x-8">
  {navigationItems.map((item) => (
    <Link
      key={item.id}
      href={item.href || '#'}
      onClick={() => {
        setCurrentPage(item.id);
        setIsMenuOpen(false);
      }}
      className={[
        'relative px-4 py-2 rounded-lg font-medium transition-all duration-300',
        currentPage === item.id
          ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 shadow-md'
          : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50',
      ].join(' ')}
    >
      {item.label}
      {currentPage === item.id && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
      )}
    </Link>
  ))}
</nav>


  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <Link
              href="/"
              className="flex items-center space-x-3 group"
              aria-label="Go to Home"
            >
            {/* Logo in a rounded square (remove wrapper div if you want the logo alone) */}
              <Image
                src="/assets/logos/ytalogo.png"
                alt="Young Talent Agency"
                width={40}
                height={40}
                priority
                className="h-14 w-auto object-contain"
              />

            {/* <div className="text-left">
              <div className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Young Talent Agency
              </div>
              <div className="text-xs text-gray-600 -mt-1">Creator Management</div>
            </div> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                 <Link
                  key={item.id}
                  href={item.href ?? '#'}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={[
                    'relative px-4 py-2 rounded-lg font-medium transition-all duration-300',
                    isActive
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 shadow-md'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50',
                  ].join(' ')}
                  >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu toggle */}
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
                const isActive = currentPage === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href ?? '#'}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={[
                      'px-4 py-3 rounded-lg font-medium text-left transition-all duration-300',
                      isActive
                        ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50',
                    ].join(' ')}
                    >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="#contact"
                className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-center"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
