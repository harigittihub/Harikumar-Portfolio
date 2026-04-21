"use client";

import { useState } from "react";

export function ContactForm() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:harikumar.ok2001@gmail.com?subject=${encodeURIComponent(subject || "Secure Transmission from Portfolio")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Clear the form after a tiny delay so the mailto execution isn't blocked
    setTimeout(() => {
        setSubject("");
        setBody("");
    }, 100);
  };

  return (
    <form suppressHydrationWarning onSubmit={handleSubmit} className="bg-surface/20 backdrop-blur-xl border border-surface-outline rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/10 flex flex-col gap-6 text-left transform hover:scale-[1.01] transition-transform duration-500 relative">
       {/* Glassmorphism specular highlight */}
       <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
       
       <div className="relative z-10">
         <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2 font-mono">Transmission Subject</label>
         <input 
           suppressHydrationWarning
           type="text" 
           id="subject" 
           value={subject}
           onChange={(e) => setSubject(e.target.value)}
           placeholder="e.g. Let's build a robot! / I found a bug 🐛" 
           className="w-full bg-background/50 border border-surface-outline rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-secondary/50" 
         />
       </div>
       <div className="relative z-10">
         <label htmlFor="body" className="block text-sm font-medium text-secondary mb-2 font-mono">The Payload</label>
         <textarea 
           id="body" 
           value={body}
           onChange={(e) => setBody(e.target.value)}
           rows={4} 
           placeholder="Type your highly classified message here..." 
           required 
           className="w-full bg-background/50 border border-surface-outline rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-secondary/50"
         ></textarea>
       </div>
       <button type="submit" className="relative z-10 w-full py-4 mt-2 bg-primary text-[#09090b] font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(167,139,250,0.3)] hover:shadow-[0_0_30px_rgba(167,139,250,0.5)]">
         Fire Payload 🚀
       </button>
    </form>
  );
}
