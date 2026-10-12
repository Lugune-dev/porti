import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { Button } from "./ui/button";

export default function Navbar({ onOpenContact }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Workflows & Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={`pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/90 dark:bg-slate-900/95 bg-white/90 shadow-2xl shadow-blue-950/20 border border-slate-800/80 dark:border-slate-800/80 backdrop-blur-xl"
            : "bg-slate-900/80 dark:bg-slate-900/80 bg-white/80 border border-slate-800/60 dark:border-slate-800/60 backdrop-blur-lg"
        } w-full max-w-5xl`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-slate-100 dark:text-white font-bold tracking-tight text-sm sm:text-base group"
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-xs shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
            AR
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm leading-tight">
              Alex Rivera
            </span>
            <span className="text-[10px] text-blue-400 font-mono hidden sm:inline">
              Automation • Full-Stack • AI
            </span>
          </div>
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse ml-1" title="Available for hire" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Zero-flicker theme toggle button with spring physics */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={toggleTheme}
            aria-label="Toggle Theme Mode"
            className="p-2 rounded-full text-slate-300 hover:bg-slate-800 border border-transparent hover:border-slate-700/60 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-blue-400" />
            )}
          </motion.button>

          {/* Contact / CTA Button */}
          <Button
            size="sm"
            variant="primary"
            onClick={onOpenContact}
            className="text-xs shadow-md shadow-blue-600/20"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="pointer-events-auto absolute top-20 inset-x-4 max-w-sm mx-auto p-4 rounded-3xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-2xl flex flex-col gap-2 z-50 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-400">Appearance</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-xs text-slate-200 bg-slate-800 px-3 py-1.5 rounded-full"
              >
                {theme === "dark" ? <Sun className="h-3.5 w-3.5 text-amber-400" /> : <Moon className="h-3.5 w-3.5 text-blue-400" />}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
