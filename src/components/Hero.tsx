"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative">
      {/* Animated background blobs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass-card text-sm text-accent font-medium tracking-wide"
        >
          ✨ Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
        >
          Transforming Data into <br />
          <span className="gradient-text">Strategic Insights</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Hi, I&apos;m{" "}
          <span className="text-white font-semibold">Narendra Bhandari</span>. A
          Data Engineer &amp; Analyst building scalable pipelines and intelligent
          dashboards to solve complex business problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass-card text-white font-semibold rounded-full hover:bg-white/10 transition-all border border-white/10"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
