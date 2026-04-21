import React from 'react';

const skills = [
  "Python", "C#", "Unity (VR)", "Computer Vision", "Machine Learning", 
  "Robotics", "NoSQL", "NumPy", "Pandas", "Web Development", "Git"
];

export function SkillsMarquee() {
  return (
    <div 
      className="relative flex overflow-hidden w-full group py-4"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="animate-marquee gap-4 pr-4">
        {[...skills, ...skills].map((skill, index) => (
          <span 
            key={`${skill}-${index}`} 
            className="px-6 py-3 bg-surface/50 border border-surface-outline rounded-full text-foreground hover:border-primary hover:text-primary transition-colors duration-300 font-medium cursor-default shadow-sm backdrop-blur-sm shrink-0 whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
