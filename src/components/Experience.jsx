import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle, Sparkles } from "lucide-react";
import { experiences } from "../data/experience";
import { Badge } from "./ui/badge";

export default function Experience() {
  const [expandedId, setExpandedId] = useState("exp-1");

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold mb-3">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Interactive Reactive Ledger</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Track record designing mission-critical frontend engines, scaling cloud microservices, and leading distributed engineering squads.
          </p>
        </div>

        {/* Ledger List */}
        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                  delay: index * 0.1,
                }}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                  isExpanded
                    ? "bg-slate-900/90 border-violet-500/50 shadow-2xl shadow-violet-950/20"
                    : "bg-slate-900/50 hover:bg-slate-900/80 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                {/* Ledger Item Header / Clickable Accordion */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {index === 0 && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-violet-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="p-1 rounded-full bg-slate-800 text-slate-400"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Ledger Item Body / Highlights */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-5 border-t border-slate-800/80 space-y-4">
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {exp.summary}
                        </p>

                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Key Accomplishments
                          </h4>
                          <ul className="space-y-2">
                            {exp.highlights.map((item, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                <CheckCircle className="h-4 w-4 text-violet-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {exp.skills.map((skill) => (
                              <Badge key={skill} variant="default" className="text-[11px]">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
