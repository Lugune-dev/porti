import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Mail,
  ArrowUp,
  Cpu,
  Layers,
  Palette,
  Boxes,
  Zap,
} from "lucide-react";
import { Github, Linkedin, Twitter } from "./components/ui/icons";
import { ThemeProvider } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Experience from "./components/Experience";
import ContactModal from "./components/ContactModal";
import { Button } from "./components/ui/button";

function PortfolioShell() {
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stackPillars = [
    {
      layer: "Framework",
      tech: "Vite + React",
      desc: "Ultra-fast HMR and single-page application hydration flow.",
      icon: Zap,
    },
    {
      layer: "Styling",
      tech: "Tailwind CSS",
      desc: "Atomic utility constraints eliminating monolithic stylesheets.",
      icon: Palette,
    },
    {
      layer: "Primitives",
      tech: "Radix UI / Shadcn",
      desc: "Unstyled accessible foundational blocks handling focus loops and dialogs.",
      icon: Boxes,
    },
    {
      layer: "Animation",
      tech: "Framer Motion",
      desc: "Responsive elastic spring physics replacing rigid linear transitions.",
      icon: Cpu,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 relative selection:bg-violet-600 selection:text-white">
      {/* Subtle grid background mesh */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-20" />

      {/* Floating routing navbar */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Main presentation layers */}
      <main className="relative z-10">
        <Hero onOpenContact={() => setContactOpen(true)} />

        {/* Technical Architecture Pillar Showcase */}
        <section className="py-12 border-y border-slate-800/80 bg-slate-900/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">
                Blueprint Architecture Stack
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Decoupled Core Technical Stack
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stackPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-violet-500/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono text-slate-400">
                          {pillar.layer}
                        </span>
                        <div className="p-2 rounded-xl bg-violet-600/10 text-violet-400">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {pillar.tech}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bento Grid Projects Showcase */}
        <BentoGrid />

        {/* Interactive Reactive Experience Ledger */}
        <Experience />

        {/* Call To Action Banner */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-violet-950/30 border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-medium mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Available for Engineering Leadership
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to elevate your digital product?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
                Whether you need a full architectural redesign, ultra-fast frontend performance, or fractional technical leadership.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => setContactOpen(true)}
                >
                  <span>Start Conversation</span>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => {
                    window.open("https://github.com", "_blank");
                  }}
                >
                  <Github className="h-4 w-4" />
                  <span>Explore GitHub</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Global Application Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
              AR
            </div>
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Alex Rivera. Engineered with React Portfolio Blueprint.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full hover:text-white hover:bg-slate-800 transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Dialog Modal Container */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioShell />
    </ThemeProvider>
  );
}
