import { siteConfig } from "@/data/siteConfig";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-dark to-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Collaborate?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Whether you have a question, a project idea, or just want to discuss
            the latest in Data Engineering, my inbox is always open.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-transform hover:scale-105"
            >
              <i className="fas fa-envelope" aria-hidden="true" /> Send Email
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 glass-card text-white font-bold rounded-full hover:bg-white/10 transition-transform hover:scale-105"
            >
              <i className="fab fa-linkedin" aria-hidden="true" /> LinkedIn
            </a>
          </div>

          {/* Footer */}
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2026 Narendra Bhandari. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Github
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
