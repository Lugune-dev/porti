import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin, Twitter } from "./components/ui/icons";
import { ThemeProvider } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillPlayground from "./components/SkillPlayground";
import BentoGrid from "./components/BentoGrid";
import Experience from "./components/Experience";
import ContactModal from "./components/ContactModal";
import { Button } from "./components/ui/button";

function PortfolioShell() {
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 relative selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Subtle grid background mesh */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-20" />

      {/* Floating routing navbar */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Main presentation layers */}
      <main className="relative z-10">
        <Hero onOpenContact={() => setContactOpen(true)} />

        {/* Interactive Skill Playground */}
        <SkillPlayground onOpenContact={() => setContactOpen(true)} />

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
              className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-blue-950/40 border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Available for Senior / Lead Engineering Roles & Consulting
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to automate & build your next system?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Whether you need advanced system automation, full-stack application development, or custom AI workflow integration.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => setContactOpen(true)}
                  className="shadow-lg shadow-blue-600/30"
                >
                  <Mail className="h-4 w-4" />
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
                  <span>Explore GitHub Repos</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Global Application Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-md py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-blue-500/20">
              AR
            </div>
            <div>
              <p className="text-xs font-bold text-white">Alex Rivera</p>
              <p className="text-[11px] text-slate-400">
                System Automation • Full-Stack • AI Workflows
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Alex Rivera. Built with user-friendly CTA flow & trust-driven visual hierarchy.
          </p>

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
