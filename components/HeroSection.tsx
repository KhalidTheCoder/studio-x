'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full h-[1188px] bg-black overflow-hidden'>
      {/* Background video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 w-full h-full object-cover'
      >
        <source src='/recolored_4B439B_cohesive.mp4' type='video/mp4' />
      </video> */}

      {/* Dark overlay on video for readability */}
      <div className='absolute inset-0 bg-black/40' />

      {/* Bottom gradient blur overlay */}
      <div className='absolute -left-[310px] bottom-0 w-[2420px] h-[225px] blur-[25px]'>
        <Image src='/icons/hero-gradient.svg' alt='' fill className='object-cover' />
      </div>

      {/* Large STUDIO X text at bottom */}
      <h2
        className='absolute left-1/2 -translate-x-1/2 bottom-0 text-center whitespace-nowrap select-none pointer-events-none font-berghan text-[452px] leading-[1em] tracking-[-0.02em] capitalize hero-title-gradient'
      >
        STUDIO X
      </h2>

      {/* Main content centered */}
      <div className='absolute left-1/2 -translate-x-1/2 top-[200px] w-[1165px] flex flex-col items-center gap-9'>
        {/* Title block */}
        <div className='w-full flex flex-col items-center gap-4'>
          <h1
            className='w-full text-center text-white font-berghan text-[96px] leading-[1em] tracking-[-0.02em] capitalize'
          >
            Building the brands & digital products of tomorrow
          </h1>
          <p
            className='text-center text-text-inverse-weak font-satoshi font-bold text-xl leading-[1.2em]'
          >
            We combine premium UI/UX design, product strategy, and performance marketing to turn
            your ideas into revenue engines.
          </p>
        </div>

        {/* CTA buttons */}
        <div className='flex items-center gap-3'>
          <button
            className='px-4 py-2 bg-brand-strong border border-brand-border rounded text-white text-sm font-satoshi hover:bg-[#5a51b0] transition-colors'
          >
            Book a Strategy Call
          </button>
          <button
            className='px-4 py-2 border border-white/50 rounded text-white text-sm font-satoshi hover:bg-white/10 transition-colors'
          >
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
