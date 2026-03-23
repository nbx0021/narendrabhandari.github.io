import { techStrip } from "@/data/techStrip";

export default function TechStrip() {
  return (
    <div className="w-full border-y border-white/5 bg-white/5 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 text-sm mb-8 tracking-widest uppercase">
          Powering Analytics With
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {techStrip.map((tech) => (
            <div
              key={tech.name}
              className={`flex items-center gap-2 ${tech.hoverColor} transition-colors`}
            >
              <i
                className={`${tech.iconPrefix === "fab" ? "fab" : "fas"} ${tech.icon} text-2xl`}
                aria-hidden="true"
              />
              <span className="font-display font-bold text-lg">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
