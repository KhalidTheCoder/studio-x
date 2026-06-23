'use client';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between py-6 px-20 z-50">
      {/* Logo — purple italic 'x' clipped in a small box */}
      <div className="w-[62px] h-12 overflow-hidden relative">
        <span
          className="absolute -top-4 left-0 leading-none select-none text-brand-strong italic font-medium text-[48px]"
        >
          x
        </span>
      </div>

      {/* Center navigation links */}
      <div className="flex items-center gap-9">
        <a
          href="#portfolio"
          className="font-satoshi font-medium text-lg text-white hover:text-brand-strong transition-colors"
        >
          Our Portfolio
        </a>
        <a
          href="#about"
          className="font-satoshi font-medium text-lg text-white hover:text-brand-strong transition-colors"
        >
          About Us
        </a>
        <a
          href="#contact"
          className="font-satoshi font-medium text-lg text-white hover:text-brand-strong transition-colors"
        >
          Contact Us
        </a>
      </div>

      {/* Right — social icons + light mode toggle */}
      <div className="flex items-center gap-4">
        {/* Social icon buttons */}
        <button className="w-12 h-12 border border-brand-strong rounded-full flex items-center justify-center hover:bg-brand-strong/10 transition-colors">
          <Image src="/icons/x-social.svg" width={24} height={24} alt="X" />
        </button>
        <button className="w-12 h-12 border border-brand-strong rounded-full flex items-center justify-center hover:bg-brand-strong/10 transition-colors">
          <Image src="/icons/instagram.svg" width={24} height={24} alt="Instagram" />
        </button>
        <button className="w-12 h-12 border border-brand-strong rounded-full flex items-center justify-center hover:bg-brand-strong/10 transition-colors">
          <Image src="/icons/facebook.svg" width={24} height={24} alt="Facebook" />
        </button>

        {/* Light mode toggle */}
        <button className="flex items-center gap-0.5 hover:opacity-80 transition-opacity">
          <Image src="/icons/sun.svg" width={12} height={12} alt="Sun" />
          <span className="text-xs text-white">Light Mode</span>
        </button>
      </div>
    </nav>
  );
}
