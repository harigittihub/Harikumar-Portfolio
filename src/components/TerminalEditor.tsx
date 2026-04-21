"use client";
import { useState } from "react";
import { FileCode2, FileJson, FileText, ChevronRight } from "lucide-react";
import { SkillsMarquee } from "./SkillsMarquee";

export function TerminalEditor() {
    const [activeTab, setActiveTab] = useState("skills.py");

    const tabs = [
        { id: "skills.py", icon: <FileCode2 className="w-4 h-4 text-yellow-500" /> },
        { id: "loadout.json", icon: <FileJson className="w-4 h-4 text-blue-400" /> },
        { id: "README.md", icon: <FileText className="w-4 h-4 text-green-400" /> }
    ];

    return (
        <div className="w-full rounded-xl border border-surface-outline bg-[#0A0A0F] shadow-2xl overflow-hidden flex flex-col font-mono">
            {/* Window Header */}
            <div className="bg-[#0f0f14] border-b border-surface-outline px-4 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex text-xs text-secondary/60 font-medium tracking-widest">
                    user@tensor-core:~/portfolio
                </div>
                <div className="w-10"></div> {/* Spacer for symmetry */}
            </div>

            {/* Tabs */}
            <div className="flex bg-[#0f0f14] border-b border-surface-outline text-xs sm:text-sm overflow-x-auto custom-scrollbar">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        suppressHydrationWarning
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 sm:px-6 py-3 border-r border-surface-outline transition-colors shrink-0 ${activeTab === tab.id
                                ? 'bg-[#0A0A0F] text-primary border-t-2 border-t-primary'
                                : 'bg-[#0f0f14] text-secondary hover:bg-surface/50 border-t-2 border-t-transparent'
                            }`}
                    >
                        {tab.icon}
                        {tab.id}
                    </button>
                ))}
            </div>

            {/* Editor Content */}
            <div className="p-6 sm:p-8 text-sm sm:text-base text-secondary leading-relaxed min-h-[350px] overflow-auto">
                {activeTab === "skills.py" && (
                    <div className="animate-in fade-in duration-500">
                        <div className="flex items-center gap-2 text-tertiary mb-6">
                            <ChevronRight className="w-5 h-5 animate-pulse" />
                            <span>Executing skills_module.py ...</span>
                        </div>
                        <p className="text-primary/80 mb-6 pl-2 border-l-2 border-primary/30">
                            import cognitive_core<br />
                            from experience import deep_learning, robotics
                        </p>

                        <div className="my-10 bg-black/50 p-4 rounded-xl border border-surface-outline">
                            <SkillsMarquee />
                        </div>

                        <div className="mt-8 text-yellow-500/80 flex items-center gap-2">
                            <span>#</span>
                            <span>Core proficiencies loaded successfully. Status code 0.</span>
                        </div>
                    </div>
                )}

                {activeTab === "loadout.json" && (
                    <div className="text-blue-300 whitespace-pre font-mono animate-in fade-in duration-500 overflow-x-auto">
                        {`{
  "hardware": {
    "brain": "caffeine_driven_development",
    "eyes": "dark_mode_only",
    "arms": [ "niryo_robotic_arm", "keys" ]
  },
  "frameworks": [
    "Unity (VR/AR)",
    "Next.js / React",
    "TensorFlow",
    "PyTorch"
  ],
  "current_status": "optimizing_loss_function",
  "coffee_level": "WARNING: CRITICAL_LOW"
}`}
                    </div>
                )}

                {activeTab === "README.md" && (
                    <div className="text-green-300 font-mono animate-in fade-in duration-500 max-w-2xl">
                        <h1 className="text-2xl font-bold mb-6 text-white border-b border-green-300/30 pb-2">System Architecture</h1>
                        <p className="mb-6">
                            I like to play around datas dig deep and catch the insights
                        </p>
                        <div className="bg-green-400/10 p-4 rounded-lg border border-green-400/20 mb-6">
                            <p className="text-green-400">
                                {">"} Status: Online<br />
                                {">"} Mission: Automating the boring stuff, rendering the impossible.
                            </p>
                        </div>
                        <p>
                            Whenever I'm not training models to classify objects or orchestrating robotic sorting mechanisms, you'll find me inside Unity building physics-based VR worlds.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
