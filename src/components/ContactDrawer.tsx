"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Download } from "lucide-react";

export function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:harikumar.ok2001@gmail.com?subject=${encodeURIComponent(
      subject || "Secure Transmission from Portfolio"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setSubject("");
      setBody("");
      setIsOpen(false);
    }, 100);
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Fixed bottom-right container */}
      <div ref={drawerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* Slide-up Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="w-80 rounded-2xl border border-surface-outline bg-background/80 backdrop-blur-2xl shadow-2xl shadow-black/70 overflow-hidden origin-bottom-right"
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
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close contact form"
                    className="p-1.5 rounded-lg text-secondary hover:text-foreground hover:bg-surface-variant transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
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

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 shadow-[0_0_20px_rgba(167,139,250,0.08)] hover:shadow-[0_0_28px_rgba(167,139,250,0.4)] group"
                  >
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    Fire Payload
                  </button>
                </form>

              </div>

              {/* Bottom accent bar */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pill row — Resume + Contact side by side */}
        <div className="flex items-center gap-2">

          {/* Resume Download Pill */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            aria-label="Download Resume"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center gap-2 px-4 py-3 md:px-5 rounded-full border border-surface-outline bg-surface/80 backdrop-blur-xl shadow-xl shadow-black/50 hover:border-tertiary/60 hover:shadow-tertiary/10 transition-all duration-300 group cursor-pointer overflow-hidden"
          >
            {/* Glow */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(52,211,153,0.12), transparent 70%)" }}
            />
            <Download className="relative z-10 w-4 h-4 text-tertiary shrink-0 group-hover:animate-bounce" />
            {/* Label hidden on mobile, visible on md+ */}
            <span className="relative z-10 hidden md:inline text-sm font-medium text-secondary group-hover:text-tertiary transition-colors whitespace-nowrap">
              Resume
            </span>
          </motion.a>

          {/* Contact Pill */}
          <motion.button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close contact form" : "Open contact form"}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center gap-2.5 px-5 py-3 rounded-full border border-surface-outline bg-surface/80 backdrop-blur-xl shadow-xl shadow-black/50 hover:border-primary/60 hover:shadow-primary/10 transition-all duration-300 group cursor-pointer overflow-hidden"
          >
            {/* Glow */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(167,139,250,0.12), transparent 70%)" }}
            />
            {/* Pulsing dot */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>

            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close-label"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="relative z-10 text-sm font-medium text-secondary group-hover:text-foreground transition-colors"
                >
                  Close
                </motion.span>
              ) : (
                <motion.span
                  key="open-label"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="relative z-10 text-sm font-medium text-secondary group-hover:text-primary transition-colors whitespace-nowrap"
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
