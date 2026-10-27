"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Layers, Terminal, FolderKanban, Cpu, Mail } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Terminal", href: "#work", icon: <Terminal className="w-4 h-4" /> },
  { name: "Projects", href: "#process", icon: <FolderKanban className="w-4 h-4" /> },
  { name: "Stacks", href: "#about", icon: <Cpu className="w-4 h-4" /> },
  { name: "Connect", href: "#studio", icon: <Mail className="w-4 h-4" /> },
];

export function Nav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed top-6 inset-x-0 w-full z-50 flex justify-center pointer-events-none px-4">
      <nav className="flex items-center gap-2 md:gap-4 px-3 py-2 bg-background/50 border border-surface-outline/80 rounded-full backdrop-blur-xl shadow-2xl shadow-black/50 pointer-events-auto">
        <Link
          href="#work"
          className="flex items-center gap-2 pr-2 pl-3 text-foreground font-black tracking-tighter hover:opacity-80 transition-opacity"
        >
          <Layers className="w-5 h-5 text-primary" />
          <span className="hidden sm:inline-block">HK.V</span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium text-secondary hover:text-foreground transition-colors rounded-full flex items-center gap-2"
            >
              <AnimatePresence>
                {hovered === item.name && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10 flex items-center gap-2">
                {item.icon}
                <span className="hidden md:inline-block">{item.name}</span>
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
