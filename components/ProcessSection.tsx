export default function ProcessSection() {
  const steps = [
    {
      num: '01.',
      title: 'Discovery & Strategy',
      desc: "We begin by deeply analyzing your business model, target audience, and market gaps. We don't write a line of code or push a pixel until we have a bulletproof tactical roadmap.",
    },
    {
      num: '02.',
      title: 'Prototyping & Design',
      desc: 'We translate the strategic roadmap into user flows, high-fidelity wireframes, and interactive prototypes. Your team gets to see, feel, and test the user experience before development starts.',
    },
    {
      num: '03.',
      title: 'Engineering & Launch',
      desc: 'Our development process focuses on clean code, rapid loading speeds, and fluid transitions. We construct a secure, responsive, and highly scalable digital infrastructure tailored to your needs.',
    },
    {
      num: '04.',
      title: 'Optimization & Growth',
      desc: 'Launching is just the beginning. We continuously analyze real user data, implement conversion rate optimization tweaks, and launch performance marketing campaigns to turn traffic into revenue.',
    },
  ];

  return (
    <section className="w-full py-[100px] px-20 flex flex-col items-center gap-16">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-text-strong text-center max-w-[916px] font-berghan text-[64px] leading-[1.1em] capitalize">
          A Proven Blueprint for Velocity and Scale
        </h2>
        <p className="text-text-weak text-base text-center font-satoshi">
          We eliminate guesswork. Our structured, four-phase framework ensures your project transitions seamlessly from strategy to market-ready product.
        </p>
      </div>

      {/* Steps */}
      <div className="w-full flex items-center">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className={`flex-1 flex flex-col gap-6 px-6 py-9 ${
              i === 1 ? 'border-l border-border-weak' : ''
            }${
              i === 2 ? 'border-x border-border-weak' : ''
            }`}
          >
            <span className="text-brand-weak font-berghan text-[64px] leading-[1.1em] capitalize">
              {step.num}
            </span>
            <div className="flex flex-col gap-[18px]">
              <h3 className="text-text-strong font-berghan text-[32px] leading-[1.2em]">
                {step.title}
              </h3>
              <p className="text-text-weak font-satoshi text-base leading-[1.25em]">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
