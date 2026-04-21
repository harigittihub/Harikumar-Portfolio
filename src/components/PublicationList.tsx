"use client";
import { BookOpen, FileText, ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  pdfUrl: string;
}

const publications: Publication[] = [
  {
    id: "1",
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin",
    venue: "NeurIPS",
    year: "2017",
    pdfUrl: "https://arxiv.org/pdf/1706.03762",
  },
  {
    id: "2",
    title: "ConceptAttention: Diffusion Transformers Learn Highly Interpretable Features",
    authors: "Alec Helbling, Tuna Han Salih Meral, Benjamin Hoover, Pinar Yanardag, Duen Horng Chau",
    venue: "ICML",
    year: "2025",
    pdfUrl: "https://openreview.net/pdf?id=Rc7y9HFC34",
  },
  {
    id: "3",
    title: "Train for the Worst, Plan for the Best:Understanding Token Ordering in Masked Diffusions",
    authors: "Jaeyeon Kim, Kulin Shah, Vasilis Kontonis, Sham M. Kakade, Sitan Chen",
    venue: "OpenReview",
    year: "2024",
    pdfUrl: "https://openreview.net/pdf?id=DjJmre5IkP",
  },
];

function PublicationCard({ pub }: { pub: Publication }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-surface/30 border border-surface-outline hover:border-primary/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(167, 139, 250, 0.15), transparent 40%)`,
        }}
      />

      <div className="flex-1 pr-6 relative z-10">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-start gap-2">
          <BookOpen className="w-5 h-5 mt-1 shrink-0 text-primary/70" />
          <span>{pub.title}</span>
        </h3>
        <p className="text-secondary/80 text-sm mb-2 font-light">
          {pub.authors}
        </p>
        <div className="flex items-center gap-3 text-xs font-mono text-tertiary">
          <span className="px-2 py-1 rounded bg-surface border border-surface-outline">
            {pub.venue}
          </span>
          <span>{pub.year}</span>
        </div>
      </div>

      <div className="mt-6 md:mt-0 relative z-10 flex items-center justify-start md:justify-end shrink-0">
        <Link
          href={pub.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-primary border border-surface-outline hover:border-primary text-secondary hover:text-background transition-all duration-300 group/btn"
        >
          <Play className="w-4 h-4 fill-current" />
          <span className="font-mono text-sm">init_read()</span>
          <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-opacity group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}

export function PublicationList() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        {publications.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
      </div>
    </div>
  );
}
