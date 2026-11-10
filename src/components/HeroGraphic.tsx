"use client";
import { motion } from "framer-motion";

const inputs = [100, 200, 300];
const hiddens = [70, 150, 230, 310];
const outputs = [150, 250];

export function HeroGraphic() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center pointer-events-none mt-16 md:mt-0 xl:scale-110">
       <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

       <svg className="absolute w-full h-full max-w-[400px] max-h-[400px]" viewBox="0 0 400 400">
          {/* Edge Connections */}
          <g className="stroke-primary/30 fill-none" strokeWidth="2">
             {inputs.map((inY, i) => 
               hiddens.map((hidY, h) => {
                 const delay = ((i * hiddens.length + h) % 5) * 0.4;
                 return (
                   <motion.path 
                     key={`in-${i}-${h}`} 
                     d={`M 80 ${inY} L 200 ${hidY}`}
                     initial={{ opacity: 0.1, stroke: "#27272a" }}
                     animate={{ opacity: [0.1, 0.6, 0.1], stroke: ["#27272a", "#a78bfa", "#27272a"] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
                   />
                 );
               })
             )}
             {hiddens.map((hidY, h) => 
               outputs.map((outY, o) => {
                 const delay = ((h * outputs.length + o) % 3) * 0.6;
                 return (
                   <motion.path 
                     key={`out-${h}-${o}`} 
                     d={`M 200 ${hidY} L 320 ${outY}`}
                     initial={{ opacity: 0.1, stroke: "#27272a" }}
                     animate={{ opacity: [0.1, 1, 0.1], stroke: ["#27272a", "#34d399", "#27272a"] }}
                     transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay }}
                   />
                 );
               })
             )}
          </g>

          {/* Neural Nodes */}
          <g className="fill-[#09090b]" strokeWidth="3">
             {inputs.map((y) => <circle key={`c-in-${y}`} cx="80" cy={y} r="8" className="stroke-primary" />)}
             {hiddens.map((y) => <circle key={`c-hid-${y}`} cx="200" cy={y} r="8" className="stroke-[#fafafa]" />)}
             {outputs.map((y) => <circle key={`c-out-${y}`} cx="320" cy={y} r="8" className="stroke-tertiary" />)}
          </g>
       </svg>
       
       {/* Floating Activation & ML Tags */}
       <motion.div 
         animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-10 left-10 md:-left-4 px-4 py-2 bg-surface/80 backdrop-blur-md border border-surface-outline rounded-3xl shadow-lg font-mono text-tertiary text-sm shadow-black/50"
       >
          f(x) = max(0, x)
       </motion.div>
       
       <motion.div 
         animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="absolute bottom-12 right-12 md:-right-4 px-4 py-2 bg-surface/80 backdrop-blur-md border border-surface-outline rounded-3xl shadow-lg font-mono text-primary text-sm shadow-black/50"
       >
          Sigmoid
       </motion.div>

       <motion.div 
         animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
         className="absolute top-16 right-8 md:right-0 px-4 py-2 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-full shadow-[0_0_15px_rgba(167,139,250,0.3)] font-mono text-foreground text-xs"
       >
          y = Wx + b
       </motion.div>
       
       <motion.div 
         animate={{ y: [10, -10, 10], x: [-10, 10, -10] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
         className="absolute bottom-24 left-16 md:left-8 px-3 py-1 bg-surface-variant/80 backdrop-blur-md border border-surface-outline rounded-md shadow-lg font-mono text-secondary text-xs shadow-black/50"
       >
          1 / (1 + e^-x)
       </motion.div>
    </div>
  )
}
