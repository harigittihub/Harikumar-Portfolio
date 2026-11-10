"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Download,
  FileText,
  ExternalLink,
  Check,
  ChevronUp,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export function ContactDrawer() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [downloadedEn, setDownloadedEn] = useState(false);
  const [downloadedDe, setDownloadedDe] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsContactOpen(false);
        setIsResumeOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsContactOpen(false);
        setIsResumeOpen(false);
      }
    };
    if (isContactOpen || isResumeOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isContactOpen, isResumeOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:harikumar.ok2001@gmail.com?subject=${encodeURIComponent(
      subject || "Secure Transmission from Portfolio"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setSubject("");
      setBody("");
      setIsContactOpen(false);
    }, 100);
  };

  const handleDownload = (type: "en" | "de") => {
    if (type === "en") {
      setDownloadedEn(true);
      setTimeout(() => setDownloadedEn(false), 2400);
    } else {
      setDownloadedDe(true);
      setTimeout(() => setDownloadedDe(false), 2400);
    }
  };

  const springTransition = {
    type: "spring" as const,
    stiffness: 380,
    damping: 26,
    mass: 0.85,
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 420,
        damping: 24,
      },
    },
  };

  const isAnyOpen = isContactOpen || isResumeOpen;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isAnyOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => {
              setIsContactOpen(false);
              setIsResumeOpen(false);
            }}
            className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Fixed bottom-right container */}
      <div
        ref={containerRef}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
      >
        {/* Slide-up Contact Panel */}
        <AnimatePresence>
          {isContactOpen && (
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: 22, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={springTransition}
              className="w-[calc(100vw-3rem)] sm:w-88 rounded-2xl border border-surface-outline bg-background/85 backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden origin-bottom-right"
            >
              {/* Specular highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none rounded-2xl" />
              {/* Top accent bar */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <div className="relative z-10 p-6 flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-primary/70 tracking-widest uppercase mb-1">
                      Incoming Transmission
                    </p>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      Send a message
                    </h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    onClick={() => setIsContactOpen(false)}
                    aria-label="Close contact form"
                    className="p-1.5 rounded-lg text-secondary hover:text-foreground hover:bg-surface-variant transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Form */}
                <form suppressHydrationWarning onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="drawer-subject"
                      className="block text-[11px] font-mono font-medium text-secondary mb-1.5 tracking-wide"
                    >
                      Subject
                    </label>
                    <input
                      suppressHydrationWarning
                      type="text"
                      id="drawer-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Let's build something"
                      className="w-full bg-surface/60 border border-surface-outline rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-secondary/40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="drawer-body"
                      className="block text-[11px] font-mono font-medium text-secondary mb-1.5 tracking-wide"
                    >
                      Message
                    </label>
                    <textarea
                      id="drawer-body"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      rows={5}
                      required
                      placeholder="Type your message here…"
                      className="w-full bg-surface/60 border border-surface-outline rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none placeholder:text-secondary/40"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 shadow-[0_0_20px_rgba(167,139,250,0.08)] hover:shadow-[0_0_28px_rgba(167,139,250,0.4)] group cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    Fire Payload
                  </motion.button>
                </form>
              </div>

              {/* Bottom accent bar */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide-up CV Selection Panel */}
        <AnimatePresence>
          {isResumeOpen && (
            <motion.div
              key="resume-modal"
              initial={{ opacity: 0, y: 22, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={springTransition}
              className="w-[calc(100vw-3rem)] sm:w-96 rounded-2xl border border-surface-outline bg-background/90 backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden origin-bottom-right"
            >
              {/* Specular highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none rounded-2xl" />
              {/* Top accent bar */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-tertiary/60 to-transparent" />

              <div className="relative z-10 p-5 sm:p-6 flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-tertiary/80 tracking-widest uppercase mb-1">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Curriculum Vitae</span>
                    </div>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      Download CV / Resume
                    </h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    onClick={() => setIsResumeOpen(false)}
                    aria-label="Close CV selector"
                    className="p-1.5 rounded-lg text-secondary hover:text-foreground hover:bg-surface-variant transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>

                <p className="text-xs text-secondary leading-relaxed">
                  Choose the version tailored to your recruitment or academic requirements:
                </p>

                {/* Staggered CV Options */}
                <motion.div
                  variants={listContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-3"
                >
                  {/* English CV Card */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 450, damping: 22 }}
                    className="relative p-3 sm:p-3.5 rounded-xl border border-surface-outline bg-surface/70 hover:bg-surface hover:border-tertiary/50 transition-colors group shadow-lg shadow-black/40 overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-tertiary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Language Badge */}
                        <div className="w-10 h-10 rounded-lg bg-tertiary/10 border border-tertiary/30 text-tertiary flex flex-col items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-tertiary/60 transition-all duration-300">
                          <span className="text-[11px] font-mono font-black tracking-tight leading-none">
                            ENG
                          </span>
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <h4 className="text-sm font-semibold text-foreground group-hover:text-tertiary transition-colors truncate">
                              English CV
                            </h4>
                            
                          </div>
                          <p className="text-[11px] text-secondary truncate mt-0.5">
                            PDF : 117 KB
                          </p>
                          
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <a
                          href="/resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Preview English CV in new tab"
                          title="Preview in new tab"
                          className="p-2 rounded-lg text-secondary hover:text-foreground hover:bg-surface-variant border border-transparent hover:border-surface-outline transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href="/resume.pdf"
                          download="Harikumar_V_Resume_EN.pdf"
                          onClick={() => handleDownload("en")}
                          aria-label="Download English CV"
                          title="Download English CV"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-tertiary/15 hover:bg-tertiary text-tertiary hover:text-background border border-tertiary/30 hover:border-tertiary transition-all duration-300 font-mono text-xs font-semibold shadow-sm group/btn"
                        >
                          {downloadedEn ? (
                            <>
                              <Check className="w-3.5 h-3.5 animate-bounce text-tertiary group-hover:text-background" />
                              <span className="text-[11px]">Saved!</span>
                            </>
                          ) : (
                            <>
                              <Download className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform duration-200" />
                              <span className="text-[11px]">Download</span>
                            </>
                          )}
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* German CV Card (Lebenslauf) */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 450, damping: 22 }}
                    className="relative p-3 sm:p-3.5 rounded-xl border border-surface-outline bg-surface/70 hover:bg-surface hover:border-primary/50 transition-colors group shadow-lg shadow-black/40 overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Language Badge */}
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 text-primary flex flex-col items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-primary/60 transition-all duration-300">
                          <span className="text-[11px] font-mono font-black tracking-tight leading-none">
                            DE
                          </span>
                          
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                              German CV (Lebenslauf)
                            </h4>
                            
                          </div>
                          <p className="text-[11px] text-secondary truncate mt-0.5">
                            PDF : 156 KB
                          </p>
                          
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <a
                          href="/resume-de.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Preview German CV in new tab"
                          title="Preview in new tab"
                          className="p-2 rounded-lg text-secondary hover:text-foreground hover:bg-surface-variant border border-transparent hover:border-surface-outline transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href="/resume-de.pdf"
                          download="Harikumar_V_Lebenslauf_DE.pdf"
                          onClick={() => handleDownload("de")}
                          aria-label="Download German CV"
                          title="Download German CV"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/15 hover:bg-primary text-primary hover:text-background border border-primary/30 hover:border-primary transition-all duration-300 font-mono text-xs font-semibold shadow-sm group/btn"
                        >
                          {downloadedDe ? (
                            <>
                              <Check className="w-3.5 h-3.5 animate-bounce text-primary group-hover:text-background" />
                              <span className="text-[11px]">Saved!</span>
                            </>
                          ) : (
                            <>
                              <Download className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform duration-200" />
                              <span className="text-[11px]">Download</span>
                            </>
                          )}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                
              </div>

              {/* Bottom accent bar */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-tertiary/30 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pill row — Resume + Contact side by side */}
        <div className="flex items-center gap-2">
          {/* Resume Download Pill Button */}
          <motion.button
            type="button"
            onClick={() => {
              setIsResumeOpen((v) => !v);
              if (!isResumeOpen) setIsContactOpen(false);
            }}
            aria-label={isResumeOpen ? "Close CV selector" : "Choose and Download CV"}
            aria-expanded={isResumeOpen}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className={`relative flex items-center gap-2 px-4 py-3 md:px-5 rounded-full border backdrop-blur-xl shadow-xl shadow-black/50 transition-all duration-300 group cursor-pointer overflow-hidden ${
              isResumeOpen
                ? "border-tertiary/80 bg-surface/95 text-foreground shadow-tertiary/20 ring-1 ring-tertiary/40"
                : "border-surface-outline bg-surface/80 hover:border-tertiary/60 hover:shadow-tertiary/10 text-secondary hover:text-foreground"
            }`}
          >
            {/* Ambient Glow */}
            <span
              className={`absolute inset-0 rounded-full transition-opacity duration-300 pointer-events-none ${
                isResumeOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(52,211,153,0.18), transparent 70%)",
              }}
            />

            <motion.div
              animate={{ rotate: isResumeOpen ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="relative z-10 shrink-0"
            >
              {isResumeOpen ? (
                <ChevronUp className="w-4 h-4 text-tertiary" />
              ) : (
                <Download className="w-4 h-4 text-tertiary group-hover:animate-bounce" />
              )}
            </motion.div>

            <span className="relative z-10 text-sm font-medium whitespace-nowrap">
              <span className="hidden md:inline">CV / </span>Resume
            </span>

            {/* Language badges indicator */}
            <span className="relative z-10 hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-tertiary/15 text-tertiary border border-tertiary/30">
              EN • DE
            </span>
          </motion.button>

          {/* Contact Pill Button */}
          <motion.button
            type="button"
            onClick={() => {
              setIsContactOpen((v) => !v);
              if (!isContactOpen) setIsResumeOpen(false);
            }}
            aria-label={isContactOpen ? "Close contact form" : "Open contact form"}
            aria-expanded={isContactOpen}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className={`relative flex items-center gap-2.5 px-5 py-3 rounded-full border backdrop-blur-xl shadow-xl shadow-black/50 transition-all duration-300 group cursor-pointer overflow-hidden ${
              isContactOpen
                ? "border-primary/80 bg-surface/95 text-foreground shadow-primary/20 ring-1 ring-primary/40"
                : "border-surface-outline bg-surface/80 hover:border-primary/60 hover:shadow-primary/10 text-secondary hover:text-foreground"
            }`}
          >
            {/* Ambient Glow */}
            <span
              className={`absolute inset-0 rounded-full transition-opacity duration-300 pointer-events-none ${
                isContactOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(167,139,250,0.18), transparent 70%)",
              }}
            />

            {/* Pulsing dot */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>

            <AnimatePresence mode="wait" initial={false}>
              {isContactOpen ? (
                <motion.span
                  key="close-label"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="relative z-10 text-sm font-medium text-foreground whitespace-nowrap"
                >
                  Close
                </motion.span>
              ) : (
                <motion.span
                  key="open-label"
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="relative z-10 text-sm font-medium group-hover:text-primary transition-colors whitespace-nowrap"
                >
                  Want to contact me?
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </>
  );
}
