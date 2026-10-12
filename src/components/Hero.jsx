import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal, Code2, Layers, Cpu, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero({ onOpenContact }) {
  const stats = [
    { label: "Production Scale", value: "1.2B+ reqs/mo", icon: Layers },
    { label: "Avg p99 Latency", value: "<45ms", icon: Cpu },
    { label: "Enterprise Uptime", value: "99.99%", icon: ShieldCheck },
  ];

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic gradient aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-violet-600/20 via-indigo-500/15 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Availability Badge with spring hover */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 dark:bg-violet-950/40 border border-violet-500/30 text-violet-600 dark:text-violet-300 text-xs font-semibold mb-6 shadow-sm shadow-violet-500/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Staff Engineering & Fractional Advisory</span>
        </motion.div>

        {/* Primary Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] max-w-4xl mx-auto"
        >
          Building{" "}
          <span className="bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            fluid interfaces
          </span>{" "}
          backed by resilient distributed engines.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Staff Frontend Architect specializing in React performance, Framer Motion spring micro-interactions, and decoupled distributed systems.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Explore Bento Showcase</span>
            <ArrowDown className="h-4 w-4" />
          </Button>

          <Button
            size="lg"
            variant="secondary"
            onClick={onOpenContact}
          >
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span>Schedule Technical Intro</span>
          </Button>
        </motion.div>

        {/* Stat Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.4 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/40 dark:bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3.5 text-left transition-all hover:border-slate-700"
              >
                <div className="p-2.5 rounded-xl bg-violet-600/10 text-violet-400 border border-violet-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white tracking-tight">{s.value}</div>
                  <div className="text-xs text-slate-400">{s.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
