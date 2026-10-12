import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Workflow, RefreshCw, CheckCircle2 } from "lucide-react";
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

  const categories = ["All", "System Automation", "Full-Stack Development", "AI Workflow"];

  // Filter projects by skill category or tag
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (p.category === activeFilter) return true;
    return p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  // Simulated Skeletal Loading Shim demonstration
  const triggerSimulatedLoad = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background glow anchor */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-3">
              <Workflow className="h-3.5 w-3.5" />
              <span>Production Workflows & Featured Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              System Showcase Bento Grid
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Clean asymmetrical layout displaying automation orchestrators, full-stack web products, and AI workflow pipelines.
            </p>
          </div>

          {/* Skill Filter Buttons & Shim Loader Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={triggerSimulatedLoad}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/80 shadow-sm cursor-pointer"
              title="Test Skeletal Loading Shims"
            >
              <RefreshCw className={`h-3.5 w-3.5 text-blue-400 ${isLoading ? "animate-spin" : ""}`} />
              <span>Shimmer Shims</span>
            </motion.button>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                  className={`p-6 sm:p-8 bg-slate-900/90 border border-slate-800/90 rounded-3xl ${p.size} relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-950/30`}
                >
                  {/* Glowing ambient gradient backdrop */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0`}
                  />

                  {/* Card Content Top */}
                  <div className="relative z-10 space-y-3">
                    {/* Top Row: Metrics & Quick Action */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
                        {p.metrics}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        onClick={() => setSelectedProject(p)}
                        className="h-8 w-8 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-blue-600 flex items-center justify-center transition-colors border border-slate-700/70"
                        aria-label={`Inspect ${p.title}`}
                      >
                        <Eye className="h-4 w-4" />
                      </motion.button>
                    </div>

                    {/* Title & Category Badge */}
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                        {p.category}
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                        {p.title}
                      </h3>
                    </div>

                    {/* Subtitle / Description */}
                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {p.subtitle || p.description}
                    </p>
                  </div>

                  {/* Card Content Bottom: Tags & Quick Inspect Button */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant={p.badgeColor || "default"}>
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setSelectedProject(p)}
                      className="text-xs text-slate-200 hover:text-white p-0 h-auto self-start sm:self-auto hover:bg-transparent"
                    >
                      <span className="underline underline-offset-4 decoration-blue-500/50 hover:decoration-blue-400">
                        Inspect Architecture
                      </span>
                      <ExternalLink className="h-3 w-3 ml-1 text-blue-400" />
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
                <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-800/50">
                  {selectedProject.metrics}
                </span>
                <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-800/40 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" /> Verified System
                </span>
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  >
                    <span>Launch Live System Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>View Source Repository</span>
                  </a>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Category: {selectedProject.category}
                </span>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
