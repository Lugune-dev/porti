import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  Bot,
  Code2,
  Terminal,
  Play,
  CheckCircle2,
  Zap,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Hero({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState("automation");
  const [simulating, setSimulating] = useState(false);
  const [logs, setLogs] = useState([
    " [SYSTEM] Initializing distributed automation mesh...",
    " [AI_WORKFLOW] RAG vector engine indexed 45,000 document embeddings.",
    " [FULLSTACK] React Hydration complete. WebSocket latency: 12ms.",
    " [STATUS] All systems operational (99.99% uptime target).",
  ]);

  const runSimulation = () => {
    setSimulating(true);
    const newLog = `⚡ [EXEC_${Math.floor(1000 + Math.random() * 9000)}] Automated ${
      activeTab === "automation"
        ? "CI/CD deployment trigger"
        : activeTab === "fullstack"
        ? "GraphQL mutation batching"
        : "Agentic LLM task delegation"
    } executed in 34ms.`;

    setTimeout(() => {
      setLogs((prev) => [newLog, ...prev.slice(0, 4)]);
      setSimulating(false);
    }, 600);
  };

  const tabs = [
    {
      id: "automation",
      label: "System Automation",
      icon: Workflow,
      badge: "Self-Healing",
      color: "from-blue-500 to-cyan-500",
      stats: "10M+ Daily Events",
      highlights: ["Event-Driven Pipeline", "Kubernetes Failover", "Zero-Downtime Deploy"],
    },
    {
      id: "fullstack",
      label: "Full-Stack Engine",
      icon: Code2,
      badge: "High Throughput",
      color: "from-indigo-500 to-blue-500",
      stats: "Sub-100ms p99",
      highlights: ["React 19 & Next.js", "FastAPI / Node.js Microservices", "PostgreSQL & Redis"],
    },
    {
      id: "ai",
      label: "AI Workflows",
      icon: Bot,
      badge: "Multi-Agent RAG",
      color: "from-purple-500 to-indigo-500",
      stats: "120ms Vector Search",
      highlights: ["Autonomous LLM Agents", "Vector Embeddings", "Document OCR Extraction"],
    },
  ];

  const currentTabInfo = tabs.find((t) => t.id === activeTab);

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient light mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_60%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Header Badge */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-6 shadow-xl shadow-blue-950/30 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Lead Engineering & Technical Consulting</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            Engineering{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Autonomous Systems
            </span>{" "}
            & Modern Full-Stack Platforms.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Specializing in <strong className="text-white font-semibold">Advanced System Automation</strong>, <strong className="text-white font-semibold">Full-Stack Development</strong>, and <strong className="text-white font-semibold">AI Workflow Pipelines</strong>.
          </motion.p>

          {/* User-Friendly CTA Buttons */}
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
              className="shadow-xl shadow-blue-600/30 font-semibold text-sm"
            >
              <span>Schedule Technical Intro</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-semibold text-sm"
            >
              <Activity className="h-4 w-4 text-blue-400" />
              <span>Explore Live Systems</span>
            </Button>
          </motion.div>
        </div>

        {/* Live Interactive Terminal & Architecture Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto rounded-3xl bg-slate-900/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-2xl"
        >
          {/* Terminal Window Top Bar */}
          <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-blue-400" />
                system-orchestrator.v2.4
              </span>
            </div>

            {/* Skill Tabs inside Simulator */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Simulator Content Area */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Tab Overview & Highlights */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-950/80 text-blue-400 border border-blue-800/60">
                  {currentTabInfo.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Metric: <strong className="text-emerald-400">{currentTabInfo.stats}</strong>
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {currentTabInfo.label} Architecture
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeTab === "automation" &&
                  "Event-driven automation engine handling infrastructure provisioning, automated failover, and continuous integration pipelines."}
                {activeTab === "fullstack" &&
                  "Decoupled full-stack architecture built with React, Next.js, FastAPI, Node.js, and high-performance relational & vector databases."}
                {activeTab === "ai" &&
                  "Agentic AI workflow suite supporting dynamic prompt chaining, vector embeddings search, and autonomous business logic."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {currentTabInfo.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200 font-medium flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Interactive Terminal Trigger */}
            <div className="md:col-span-5 bg-slate-950 p-4 rounded-2xl border border-slate-800/90 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                  Live Event Stream
                </span>
                <button
                  onClick={runSimulation}
                  disabled={simulating}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans text-[11px] font-semibold transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <Play className="h-3 w-3 fill-current" />
                  <span>Run Pulse Test</span>
                </button>
              </div>

              <div className="space-y-1.5 h-36 overflow-y-auto font-mono text-[11px] text-slate-300 selection:bg-blue-600">
                <AnimatePresence>
                  {logs.map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`leading-tight ${
                        log.includes("⚡")
                          ? "text-blue-300 font-semibold"
                          : "text-slate-400"
                      }`}
                    >
                      {log}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
