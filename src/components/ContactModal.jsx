import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, Copy, Check, Sparkles, Workflow, Bot, Code2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("System Automation");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const emailAddress = "alex.rivera.eng@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
      onClose();
    }, 2400);
  };

  const inquiryTopics = [
    { label: "System Automation", icon: Workflow },
    { label: "Full-Stack Project", icon: Code2 },
    { label: "AI Workflows", icon: Bot },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Direct Engineering Consultation
            </span>
          </div>
          <DialogTitle>Let's Build & Automate Together</DialogTitle>
          <DialogDescription>
            Initiate a conversation regarding Advanced System Automation, Full-Stack applications, or AI Workflow architecture.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-10 text-center space-y-3"
          >
            <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="text-lg font-bold text-white">Inquiry Transmitted Successfully</h4>
            <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
              Thank you! I will review your requirements for <strong className="text-blue-400">{inquiryType}</strong> and respond within 24 hours.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4 pt-1">
            {/* Quick Email Copy Bar */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-200 font-mono truncate">
                  {emailAddress}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-700/90 hover:bg-slate-700 text-xs font-semibold text-slate-100 transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Topic Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Primary Focus Area
              </label>
              <div className="grid grid-cols-3 gap-2">
                {inquiryTopics.map((topic) => {
                  const Icon = topic.icon;
                  const isSelected = inquiryType === topic.label;
                  return (
                    <button
                      key={topic.label}
                      type="button"
                      onClick={() => setInquiryType(topic.label)}
                      className={`p-2.5 rounded-xl border text-left flex flex-col justify-between gap-1 transition-all ${
                        isSelected
                          ? "bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-600/20"
                          : "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isSelected ? "text-blue-400" : "text-slate-400"}`} />
                      <span className="text-[11px] font-semibold leading-tight">{topic.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Satya Nadella"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="satya@microsoft.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Vision & System Requirements
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your automation, full-stack, or AI workflow goals..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" className="w-full py-2.5 shadow-lg shadow-blue-600/30">
                  <Send className="h-4 w-4" />
                  <span>Transmit Inquiry</span>
                </Button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
