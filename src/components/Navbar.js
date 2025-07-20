import Link from 'next/link';
import React from 'react';

const Navbar = ({ className = '' }) => {
  return (
    <nav className={`space-x-8 font-medium text-base leading-6 ${className}`}>
      <Link href='/'>Home</Link>
      <Link href='/About'>About us</Link>
      <Link href='/features'>Features</Link>
      <Link href='/pricing'>Pricing</Link>
      <Link href='/faq'>FAQ</Link>
      <Link href='/blog'>Blog</Link>
    </nav>
  );
};

export default Navbar;
