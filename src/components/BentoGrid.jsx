import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Sparkles, Layers, RefreshCw, CheckCircle2 } from "lucide-react";
import { Github } from "./ui/icons";
import { projects } from "../data/projects";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { BentoSkeletonCard } from "./ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

export default function BentoGrid() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects if needed
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.tags.includes(activeFilter);
  });

  // Simulated Skeletal Loading Shim demonstration
  const triggerSimulatedLoad = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background glow anchor */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold mb-3">
              <Layers className="h-3.5 w-3.5" />
              <span>Decoupled Architecture • Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Responsive Bento Grid Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Asymmetrical grid layout assembling engineering case studies into responsive, metadata-driven presentation cards.
            </p>
          </div>

          {/* Skeletal Loading Shims Demo Toggle & Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={triggerSimulatedLoad}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/80 shadow-sm cursor-pointer"
              title="Test Skeletal Loading Shims requirement"
            >
              <RefreshCw className={`h-3.5 w-3.5 text-violet-400 ${isLoading ? "animate-spin" : ""}`} />
              <span>Simulate Shimmer Shims</span>
            </motion.button>

            {["All", "React", "Node", "WebSockets"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                    : "bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Container: strictly uses the blueprint classes:
            "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
          <AnimatePresence mode="wait">
            {isLoading ? (
              // Skeletal Loading Shims Template
              projects.map((p) => (
                <BentoSkeletonCard key={`skel-${p.id}`} size={p.size} />
              ))
            ) : (
              // Dynamic Bento Grid Project Cards
              filteredProjects.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl ${p.size} relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-950/30`}
                >
                  {/* Glowing ambient gradient backdrop */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0`}
                  />

                  {/* Card Content Top */}
                  <div className="relative z-10 space-y-3">
                    {/* Top Row: Metrics & Quick Action */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-violet-400 bg-violet-950/40 px-2.5 py-1 rounded-full border border-violet-800/40">
                        {p.metrics}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        onClick={() => setSelectedProject(p)}
                        className="h-8 w-8 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-violet-600 flex items-center justify-center transition-colors border border-slate-700/60"
                        aria-label={`Inspect ${p.title}`}
                      >
                        <Eye className="h-4 w-4" />
                      </motion.button>
                    </div>

                    {/* Blueprint standard title */}
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                      {p.title}
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                      {p.subtitle || p.description}
                    </p>
                  </div>

                  {/* Card Content Bottom: Tags & Quick Inspect Button */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <Badge key={tag} variant={p.badgeColor || "default"}>
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setSelectedProject(p)}
                      className="text-xs text-slate-300 hover:text-white p-0 h-auto self-start sm:self-auto hover:bg-transparent"
                    >
                      <span className="underline underline-offset-4 decoration-violet-500/50 hover:decoration-violet-400">
                        Deep Dive
                      </span>
                      <ExternalLink className="h-3 w-3 ml-1 text-violet-400" />
                    </Button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Radix Dialog Modal for Case Study Deep Dive */}
      <Dialog
        open={Boolean(selectedProject)}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-violet-400 bg-violet-950/50 px-2.5 py-0.5 rounded-full border border-violet-800/40">
                  {selectedProject.metrics}
                </span>
                {selectedProject.featured && (
                  <span className="text-xs font-medium text-amber-300 bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-800/40 flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Featured Architecture
                  </span>
                )}
              </div>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                {selectedProject.subtitle}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  System Architecture Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.features && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Key Technical Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white transition-colors"
                  >
                    <span>Launch Live Showcase</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>View Repository</span>
                  </a>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  Schema: {selectedProject.size}
                </span>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
