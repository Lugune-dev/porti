import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Workflow, Bot, Code2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero({ onOpenContact }) {
  const stats = [
    { label: "Automation Reliability", value: "99.99%", icon: Workflow, accent: "text-blue-400" },
    { label: "Full-Stack Throughput", value: "1.2B+ reqs/mo", icon: Code2, accent: "text-sky-400" },
    { label: "AI Pipeline Efficiency", value: "10x Speedup", icon: Bot, accent: "text-indigo-400" },
  ];

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic trust aura glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-cyan-500/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Availability Badge with spring hover */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-950/40 border border-blue-500/30 text-blue-400 dark:text-blue-300 text-xs font-semibold mb-6 shadow-sm shadow-blue-500/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for System Automation, Full-Stack & AI Roles</span>
        </motion.div>

        {/* Primary Heading with strong visual hierarchy */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] max-w-4xl mx-auto"
        >
          Automating systems, building{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            full-stack platforms
          </span>{" "}
          & AI workflows.
        </motion.h1>

        {/* Subtitle explicitly emphasizing user's 3 top skills */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-300 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Senior Systems Specialist specializing in <strong className="text-white font-semibold">Advanced System Automation</strong>, <strong className="text-white font-semibold">Full-Stack Development</strong>, and <strong className="text-white font-semibold">AI Workflow Integration</strong>.
        </motion.p>

        {/* User-Friendly CTA Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={onOpenContact}
            className="shadow-lg shadow-blue-600/25"
          >
            <span>Start Conversation / Hire</span>
            <ArrowRight className="h-4 w-4" />
          </Button>

          <Button
            size="lg"
            variant="secondary"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Workflow className="h-4 w-4 text-blue-400" />
            <span>Explore Workflows & Projects</span>
            <ArrowDown className="h-4 w-4" />
          </Button>
        </motion.div>

        {/* Stat Highlights - Trust Driven */}
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
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-sm flex items-center gap-3.5 text-left transition-all hover:border-blue-500/40 hover:bg-slate-900/80 shadow-md"
              >
                <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className={`text-lg font-extrabold tracking-tight ${s.accent}`}>
                    {s.value}
                  </div>
                  <div className="text-xs font-medium text-slate-400">{s.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
