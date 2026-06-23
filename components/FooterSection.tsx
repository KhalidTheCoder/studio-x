import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="relative flex w-full flex-col items-stretch justify-between min-h-[1576px] pt-[100px] px-20 pb-0">
      {/* Background image */}
      <Image
        src="/images/footer-bg-492354.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
        priority={false}
      />

      {/* All content sits above the background */}
      <div className="relative z-10 flex w-full flex-col gap-[180px]">
        {/* ── Inner content ── */}
        <div className="flex w-full flex-col gap-[180px]">
          {/* CTA Section */}
          <div className="flex flex-col items-center gap-9">
            {/* Title block */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-center capitalize font-berghan text-[96px] leading-[1em] tracking-[-0.02em] text-text-strong">
                Ready to Turn Your Vision into a Growth Engine?
              </h2>

              <p className="max-w-3xl text-center font-satoshi text-xl leading-[1.2em] text-text-weak">
                We integrate cutting-edge UI/UX design, strategic product
                development, and targeted marketing solutions to transform your
                concepts into thriving revenue streams.
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-[310px] py-2 px-4 rounded bg-brand-strong border border-brand-border font-satoshi text-sm text-text-strong cursor-pointer">
              Contact Us Now
            </button>
          </div>

          {/* Footer Links */}
          <div className="flex w-full flex-row justify-between">
            {/* Product */}
            <div className="flex flex-col gap-4">
              <h3 className="font-berghan text-[22px] text-text-strong">
                Product
              </h3>
              <ul className="flex flex-col gap-2">
                {["Media & Content", "Marketing", "Barding", "Product strategy"].map(
                  (link) => (
                    <li
                      key={link}
                      className="font-satoshi text-base text-text-weak"
                    >
                      <a href="#" className="hover:underline">
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-berghan text-[22px] text-text-strong">
                Links
              </h3>
              <ul className="flex flex-col gap-2">
                {["Portfolio", "About Us", "Contact Us"].map((link) => (
                  <li
                    key={link}
                    className="font-satoshi text-base text-text-weak"
                  >
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h3 className="font-berghan text-[22px] text-text-strong">
                Company
              </h3>
              <ul className="flex flex-col gap-2">
                {["Team", "Career", "Culture"].map((link) => (
                  <li
                    key={link}
                    className="font-satoshi text-base text-text-weak"
                  >
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-4">
              <h3 className="font-berghan text-[22px] text-text-strong">
                Contact Us
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  { icon: "/icons/phone.svg", text: "0123654793" },
                  {
                    icon: "/icons/map-pin.svg",
                    text: "548 Market St, Suite 402, San Francisco, CA 94104",
                  },
                  {
                    icon: "/icons/clock.svg",
                    text: "Fri, 9:00 AM – 6:00 PM (EST)",
                  },
                  { icon: "/icons/mail.svg", text: "hello@studiox.com" },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex flex-row items-center gap-2 font-satoshi text-base text-text-weak"
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom section ── */}
        <div className="flex w-full flex-row justify-between gap-9">
          {/* Left – Logo & description */}
          <div className="flex flex-col w-[700px] gap-9">
            {/* Logo row */}
            <div className="flex flex-row items-center gap-3">
              <Image
                src="/images/logo-x.png"
                alt="Studio X logo"
                width={70}
                height={59}
              />
              <span className="capitalize font-berghan text-4xl leading-[1.1em] text-text-strong">
                STUDIO X
              </span>
            </div>

            <p className="font-satoshi text-base text-text-strong">
              We are a premium, multi-disciplinary digital studio bridging the
              gap between high-end aesthetics and raw business performance. Born
              out of a frustration with superficial design agencies, we
              deliberately integrate bespoke UI/UX design, rigorous product
              strategy, and data-backed digital growth engines under a single,
              unified execution framework.
            </p>
          </div>

          {/* Right – Email subscribe */}
          <div className="flex flex-col gap-2 w-[700px]">
            <label className="font-satoshi text-sm text-text-strong">
              Drop Your Email to Receive Updates
            </label>

            <div className="flex flex-row items-stretch gap-1">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 rounded text-xs py-2.5 px-3 bg-text-weak/15 border border-border-weak font-satoshi text-[#0F0F11]"
              />
              <button className="w-[180px] rounded bg-brand-weak border border-brand-border font-satoshi text-sm text-text-strong cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="relative z-10 flex w-full flex-row items-center justify-center py-9 border-t border-brand-strong/50">
        <span className="text-center font-satoshi text-base text-text-weak">
          Studio X - 2026
        </span>
      </div>
    </footer>
  );
}
