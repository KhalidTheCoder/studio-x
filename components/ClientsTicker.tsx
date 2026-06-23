'use client';
import Image from 'next/image';

const brands = [
  { name: 'Name', icon: '/icons/vk.svg' },
  { name: 'Name', icon: '/icons/whatsapp.svg' },
  { name: 'Name', icon: '/icons/wordpress.svg' },
  { name: 'Name', icon: '/icons/zendesk.svg' },
  { name: 'Name', icon: '/icons/youtube.svg' },
  { name: 'Name', icon: '/icons/zerpply.svg' },
  { name: 'Name', icon: '/icons/wire.svg' },
  { name: 'Name', icon: '/icons/airtable.svg' },
  { name: 'Name', icon: '/icons/slack.svg' },
  { name: 'Name', icon: '/icons/pinterest.svg' },
];

export default function ClientsTicker() {
  return (
    <section className="w-full py-12 overflow-hidden bg-black border-y border-border-weak/30">
      <div className="relative flex w-full overflow-hidden">
        {/* Double the list to ensure seamless looping */}
        <div className="flex gap-16 shrink-0 animate-marquee min-w-full justify-around">
          {brands.map((brand, i) => (
            <div key={`b1-${i}`} className="flex items-center gap-3 shrink-0">
              <Image src={brand.icon} alt={brand.name} width={48} height={48} />
              <span className="text-text-strong text-xl font-bold font-satoshi">
                {brand.name}
              </span>
            </div>
          ))}
          {/* Duplicate list */}
          {brands.map((brand, i) => (
            <div key={`b2-${i}`} className="flex items-center gap-3 shrink-0">
              <Image src={brand.icon} alt={brand.name} width={48} height={48} />
              <span className="text-text-strong text-xl font-bold font-satoshi">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
