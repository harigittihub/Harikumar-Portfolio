import { Nav } from "../components/Nav";
import { FeatureCard } from "../components/FeatureCard";
import { GridHoverEffect } from "../components/GridHoverEffect";
import { ContactDrawer } from "../components/ContactDrawer";
import { HeroGraphic } from "../components/HeroGraphic";
import { VisionGraphic } from "../components/VisionGraphic";
import { Typewriter } from "../components/Typewriter";
import { TerminalEditor } from "../components/TerminalEditor";
import { Gamepad2, GitMerge, BrainCircuit, Code2, Eye, FileText, Download } from "lucide-react";
import Link from "next/link";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
      <path d="M12 22v-4"></path>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function TensorTonicIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.944 2.222a2 2 0 0 1 1.733-.005l9.444 4.722a2 2 0 0 1 1.106 1.782v10.556a2 2 0 0 1-1.106 1.782l-9.444 4.722a2 2 0 0 1-1.734-.005l-9.444-4.722A2 2 0 0 1 1.394 19.28V8.724a2 2 0 0 1 1.105-1.782l9.445-4.72z" />
      <path d="M1.611 7.222l10.334 5v10.556" />
      <path d="M22.389 7.222l-10.333 5" />
      <path d="M11.944 12.222L11 2" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <ContactDrawer />
      <GridHoverEffect />
      <main className="flex-1 flex flex-col pt-16 relative z-10 transition-colors duration-500 pb-16 overflow-x-hidden">
        <Nav />
        {/* Hero Section */}
        <section id="work" className="min-h-[85vh] flex items-center max-w-7xl mx-auto px-6 w-full relative">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-4 leading-[1.1] tracking-tight relative z-10 whitespace-nowrap">
                Harikumar.V
              </h1>
              <div className="h-20 lg:h-24">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-tertiary transition-colors">
                  <Typewriter />
                </h2>
              </div>
              <p className="text-xl text-secondary max-w-2xl leading-relaxed relative z-10 font-light md:mt-2">
                Usually found turning dangerous caffeine levels into functional code. I specialize in <span className="text-foreground font-medium border-b border-primary/50">Robotics</span>, <span className="text-foreground font-medium border-b border-primary/50">Machine Learning</span>, and <span className="text-foreground font-medium border-b border-primary/50">VR Experiences</span> to build systems that theoretically take over the world... but for now, they just magically work.
              </p>
            </div>

            <div className="w-full h-full flex items-center justify-center">
              <HeroGraphic />
            </div>
          </div>
        </section>

        {/* Projects / Feature Cards */}
        <section id="process" className="py-24 max-w-5xl mx-auto px-6 w-full">
          <div className="mb-20 flex flex-col md:flex-row md:items-center justify-start gap-12 md:gap-24">
            <div className="hidden md:block">
              <VisionGraphic />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-foreground tracking-tight">Projects Archive</h2>
              <p className="text-secondary text-xl border-l-[3px] border-primary/50 pl-4">Some of the projects I've worked on.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<BrainCircuit size={32} />}
              title="NASA Turbofan RUL Prediction"
              description="Predictive maintenance on NASA CMAPSS dataset — compares XGBoost vs LSTM to forecast Remaining Useful Life of jet engines, with a full Streamlit deployment pipeline."
              delay={0}
              link="https://github.com/harigittihub/NASA-Turbofan-Predictive_Maintenance"
            />
            <FeatureCard
              icon={<Eye size={32} />}
              title="Two-Speed AI Inspector"
              description="Industrial defect detection pipeline: PyTorch PatchCore anomaly detection → fast Jev triage → Claude vision for ambiguous cases. Evaluated with bootstrap confidence intervals. Streamlit demo + FastAPI endpoint."
              delay={0.15}
              link="https://github.com/harigittihub/SentinelEdge-a-two-speed-AI-inspector"
            />
            <FeatureCard
              icon={<FileText size={32} />}
              title="PDF RAG Q&A System"
              description="PDF question-answering RAG system built in Python — evaluates TF-IDF, dense and hybrid retrieval across chunk sizes on 30 hand-labeled questions, with a citation checker that flags pages cited outside retrieved content."
              delay={0.3}
              link="https://github.com/harigittihub/RAG-System"
            />
            <FeatureCard
              icon={<Gamepad2 size={32} />}
              title="VR Air Hockey"
              description="VR Air Hockey game built in Unity for Meta Quest 2 with physics-based gameplay and an AI opponent."
              delay={0.45}
              link="https://github.com/harigittihub/vr-air-hockey-unity"
            />
            <FeatureCard
              icon={<GitMerge size={32} />}
              title="Unsupervised Sorting"
              description="Automated object sorting system using a Niryo robotic arm combined with CV and unsupervised machine learning."
              delay={0.6}
              link="https://github.com/harigittihub/Unsupervised_Sorting_using_Niryo"
            />
            <FeatureCard
              icon={<BrainCircuit size={32} />}
              title="TensorTonic Solutions"
              description="My complete suite of solutions to TensorTonic problems utilizing Python."
              delay={0.75}
              link="https://github.com/harigittihub/TensorTonic-Solutions"
            />
          </div>
        </section>



        {/* Developer Environment Section */}
        <section id="about" className="py-24 bg-surface-variant/20 border-y border-surface-outline relative overflow-hidden backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4 tracking-tight">
              <Code2 className="h-8 w-8 text-primary" />
              Developer Environment
            </h2>
            <TerminalEditor />
          </div>
        </section>



        {/* Initiate Link */}
        <section id="studio" className="py-24 relative overflow-hidden">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 font-mono text-tertiary">Get to know me more</h2>
            <p className="text-secondary mb-10 text-lg">Establishing a secure channel for cross-network collaboration.</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                {
                  name: "LinkedIn",
                  icon: <LinkedinIcon />,
                  href: "https://www.linkedin.com/in/harikumar-v-657ab21bb/"
                },
                {
                  name: "GitHub",
                  icon: <GithubIcon />,
                  href: "https://github.com/harigittihub"
                },
                {
                  name: "TensorTonic",
                  icon: <TensorTonicIcon />,
                  href: "https://www.tensortonic.com/profile/justcallme_hari"
                },
              ].map((social) => (
                <Link href={social.href} target="_blank" rel="noopener noreferrer" key={social.name} className="p-4 rounded-xl border border-surface-outline bg-surface/50 hover:border-primary text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background hover:-translate-y-1 shadow-lg shadow-black/50 backdrop-blur-md">
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </Link>
              ))}

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
