'use client'

import Link from 'next/link'
import Navbar from './Navbar'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='py-5 bg-flyByNight relative z-50'>
      <div className='flex justify-between items-center myContainer'>
        {/* Logo */}
        <Link href='/'>
          <img src='/svg/Logo.svg' alt='Logo' className='w-32 lg:w-auto' />
        </Link>

        <div className='flex items-center'>
          {/* Desktop Navbar */}
          <div className='hidden lg:block'>
            <Navbar className='text-cosmic space-x-8' />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className='lg:hidden text-white focus:outline-none ml-4'
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
              />
            </svg>
          </button>

          {/* Contact Button (Desktop only) */}
          <button className='ml-4 lg:ml-12 text-white font-medium text-base py-3 px-8 border-2 border-gravelFint rounded-full hidden lg:block'>
            Contact us
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}>
          {/* Sidebar */}
          <div
            className="absolute top-0 left-0 w-64 h-full bg-flyByNight p-6 flex flex-col gap-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className='text-white self-end'
            >
              ✕
            </button>

            {/* Navbar in column */}
            <Navbar className='text-white flex flex-col gap-4 space-x-0' />

            {/* Contact Button */}
            <button className='text-white font-medium text-base py-3 px-6 border-2 border-gravelFint rounded-full w-full'>
              Contact us
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
