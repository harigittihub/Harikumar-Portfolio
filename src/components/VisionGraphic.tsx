"use client";
import { motion } from "framer-motion";

export function VisionGraphic() {
   return (
      <div className="relative w-32 h-32 pointer-events-none group transform scale-125 md:scale-150 origin-left">
         <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-[20px]" />
         <div className="relative w-full h-full border border-surface-outline bg-surface-variant/40 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl shadow-black/40">

            {/* Spatial Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#a78bfa15_1px,transparent_1px),linear-gradient(to_bottom,#a78bfa15_1px,transparent_1px)] bg-[size:16px_16px]" />

            {/* Optical Scanner Laser Sweep */}
            <motion.div
               animate={{ y: [-20, 140] }}
               transition={{ duration: 2, ease: "linear", repeat: Infinity }}
               className="absolute top-0 left-0 w-full h-[2px] bg-primary/90 shadow-[0_0_12px_rgba(167,139,250,1)] z-20"
            />

            {/* Bound Box 1 - Tracking Object */}
            <motion.div
               animate={{ x: [0, 20, 5, -5, 0], y: [0, -10, 15, 5, 0] }}
               transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
               className="absolute top-6 left-4 w-12 h-14 border-[1px] border-tertiary bg-tertiary/5 z-10"
            >
               <div className="absolute -top-[14px] -left-[1px] bg-tertiary text-[#09090b] text-[8px] font-mono px-1 font-bold tracking-widest whitespace-nowrap">
                  PERSON [0.99]
               </div>
               {/* Tech Brackets */}
               <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-tertiary" />
               <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-tertiary" />
               <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-tertiary" />
               <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-tertiary" />
            </motion.div>

            {/* Bound Box 2 - Detecting Feature */}
            <motion.div
               animate={{ scale: [1, 1.15, 0.9, 1], x: [0, -10, -5, 0], y: [0, 5, -5, 0] }}
               transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
               className="absolute bottom-4 right-4 w-10 h-10 border-[1px] border-primary bg-primary/5 z-10"
            >
               <div className="absolute -top-[14px] -left-[1px] bg-primary text-[#09090b] text-[8px] font-mono px-1 font-bold tracking-widest whitespace-nowrap">
                  ROBOT [0.85]
               </div>
               <div className="absolute inset-0 m-auto w-1 h-1 bg-primary rounded-full animate-ping" />
            </motion.div>
         </div>
      </div>
   )
}
