import Image from "next/image";

const projects = [
  {
    category: "Digital Marketing",
    categoryColor: "text-brand-strong",
    leftBg: "bg-[#E1D9FD]",
    name: "Nexus AI",
    nameColor: "text-text-strong",
    description:
      "We engineered a multi-layered growth engine. We built a data-driven SEO content architecture to capture high-intent search traffic, built high-converting programmatic landing pages, and completely overhauled their LinkedIn and Google Ads targeting matrix.",
    descriptionColor: "text-text-weak",
    primaryBg: "bg-brand-strong",
    primaryBorder: "border-brand-border",
    primaryText: "text-black",
    secondaryBorder: "border-brand-strong",
    secondaryText: "text-brand-strong",
    image: "/images/project-nexus.png",
    rowPadding: "px-[60px]",
    shadow: "",
  },
  {
    category: "Product Strategy",
    categoryColor: "text-brand-weak",
    leftBg: "bg-[#C7D2FE]",
    name: "Pulse Health",
    nameColor: "text-text-strong",
    description:
      "We stepped in to strip away the noise. We defined their core MVP (Minimum Viable Product) feature set, built rapid high-fidelity prototypes, and ran a 3-week user validation framework. We mapped out a rock-solid, scalable cloud architecture before a single line of final production code was written.",
    descriptionColor: "text-text-weak",
    primaryBg: "bg-brand-weak",
    primaryBorder: "border-brand-border",
    primaryText: "text-black",
    secondaryBorder: "border-brand-weak",
    secondaryText: "text-brand-weak",
    image: "/images/project-pulse.png",
    rowPadding: "px-10",
    shadow: "",
  },
  {
    category: "Design & Branding",
    categoryColor: "text-brand-strong",
    leftBg: "bg-[#E1D9FD]",
    name: "Lyra Pay",
    nameColor: "text-text-strong",
    description:
      "We engineered a comprehensive visual identity and design system from the ground up—establishing typography, color theory, and tone of voice. We then completely reimagined their user experience, turning a dense web panel into an intuitive, high-fidelity mobile and desktop application ecosystem.",
    descriptionColor: "text-text-weak",
    primaryBg: "bg-brand-strong",
    primaryBorder: "border-brand-border",
    primaryText: "text-black",
    secondaryBorder: "border-brand-strong",
    secondaryText: "text-brand-strong",
    image: "/images/project-lyra-b842b3.png",
    rowPadding: "px-5",
    shadow: "",
  },
  {
    category: "Media Production",
    categoryColor: "text-brand-weak",
    leftBg: "bg-[#C7D2FE]",
    name: "COS Clothing Brand",
    nameColor: "text-black",
    description:
      "We directed and produced a series of cinematic, low-contrast campaign videos and editorial lookbooks. By prioritizing negative space, subtle textures, and striking geometric composition, we created storytelling assets designed specifically to capture attention on premium ad networks.",
    descriptionColor: "text-black",
    primaryBg: "bg-brand-weak",
    primaryBorder: "border-brand-border",
    primaryText: "text-black",
    secondaryBorder: "border-brand-weak",
    secondaryText: "text-brand-weak",
    image: "/images/project-cos.png",
    rowPadding: "",
    shadow: "shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)]",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="flex flex-col items-center w-full py-[100px] px-20 gap-16">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center capitalize font-berghan text-[64px] leading-[1.1em] text-text-strong max-w-[916px]">
          Featured Projects
        </h2>
        <p className="text-center font-satoshi text-base text-text-weak">
          We don&apos;t just build beautiful interfaces—we engineer digital
          ecosystems that drive measurable commercial growth.
        </p>
      </div>

      {/* Projects container */}
      <div className="flex flex-col items-center w-full gap-10">
        {/* Stacked cards */}
        <div className="flex flex-col items-center w-full">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`flex flex-row items-center w-full relative ${project.rowPadding} ${project.shadow} ${
                index > 0 ? '-mt-[333px]' : ''
              }`}
              style={{ zIndex: index }}
            >
              {/* Left panel */}
              <div
                className={`flex flex-col flex-1 ${project.leftBg} rounded-l-3xl p-9 gap-9 h-[470px]`}
              >
                {/* Category label */}
                <span className={`capitalize text-left font-berghan text-[64px] leading-[1.1em] ${project.categoryColor}`}>
                  {project.category}
                </span>

                {/* Content area */}
                <div className="flex flex-col stretch justify-between flex-1">
                  {/* Top: name + description */}
                  <div className="flex flex-col gap-2">
                    <h3 className={`font-berghan text-[32px] ${project.nameColor}`}>
                      {project.name}
                    </h3>
                    <p className={`font-satoshi text-base ${project.descriptionColor}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom: buttons */}
                  <div className="flex flex-row gap-3">
                    <button
                      className={`flex-1 py-2 px-4 rounded flex flex-row items-center justify-center gap-1 ${project.primaryBg} ${project.primaryBorder} border ${project.primaryText} font-satoshi text-sm`}
                    >
                      View Details
                      <Image
                        src="/icons/external-link.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </button>
                    <button
                      className={`flex-1 py-2 px-4 rounded flex flex-row items-center justify-center gap-1 bg-transparent ${project.secondaryBorder} border ${project.secondaryText} font-satoshi text-sm`}
                    >
                      View More of This Category
                      <Image
                        src="/icons/arrow-right.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div
                className="flex-1 h-[470px] rounded-r-3xl bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </div>
          ))}
        </div>

        {/* View Portfolio button */}
        <button className="w-64 py-2 px-4 rounded flex items-center justify-center bg-brand-strong border border-brand-border text-text-strong font-satoshi text-sm">
          View Portfolio
        </button>
      </div>
    </section>
  );
}
