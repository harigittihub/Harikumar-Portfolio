"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode, MouseEvent } from "react";
import Link from "next/link";
import { Play } from "lucide-react";

export function FeatureCard({ title, description, icon, delay = 0, link }: { title: string, description: string, icon?: ReactNode, delay?: number, link?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const content = (
    <motion.div 
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay }}
       onMouseMove={handleMouseMove}
       className="relative bg-surface/80 backdrop-blur-sm border border-surface-outline p-6 rounded-xl hover:bg-surface-variant transition-colors group duration-300 shadow-sm h-full flex flex-col overflow-hidden"
    >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(167, 139, 250, 0.15), transparent 40%)`,
          }}
        />
        
        <div className="relative z-10 flex-1">
          {icon && <div className="mb-4 text-primary group-hover:text-tertiary transition-colors duration-300">{icon}</div>}
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-secondary leading-relaxed">{description}</p>
        </div>

        <div className="relative z-10 mt-8 flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 w-max px-3 py-1.5 rounded-md border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all duration-300">
           <Play className="w-3 h-3 fill-current" />
           <span>Execute_Module()</span>
        </div>
    </motion.div>
  );

  if (link) {
    return <Link href={link} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl h-full group">{content}</Link>;
  }
  return content;
}
