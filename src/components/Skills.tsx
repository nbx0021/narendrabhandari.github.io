import { skills } from "@/data/skills";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-secondary">Arsenal</span>
            </h2>
            <p className="text-gray-400">
              Tools and technologies I use to bring data to life.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category) => (
              <div
                key={category.title}
                className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${category.bgClass} flex items-center justify-center mb-4 ${category.colorClass}`}
                >
                  <i className={`fas ${category.icon} text-xl`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
