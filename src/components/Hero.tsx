import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 radial-glow" />
      {/* Orbital rings */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] rounded-full border border-border/40"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute inset-12 rounded-full border border-border/30 border-dashed"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
        {/* Floating chips */}
        <div className="hidden md:block relative h-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="absolute left-[20%] top-4 font-mono text-xs px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground"
          >
            <span className="text-success">●</span> model: <span className="text-foreground">gpt-4o-2024</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="absolute right-[18%] top-16 font-mono text-xs px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground"
          >
            <span className="text-success">✓</span> VERIFIED · risk: <span className="text-warning">12/100</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="absolute right-[22%] top-28 font-mono text-xs px-3 py-1.5 rounded-md bg-card border border-border text-muted-foreground"
          >
            SHA-256: 8f2a9b...
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-card border border-border mb-8"
        >
          <span className="text-success">●</span>
          <span className="text-muted-foreground">Now in Public Beta</span>
          <span className="text-border">|</span>
          <span className="text-foreground">Free to Start</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          Trust Layer for<br />
          <span className="text-gold">Autonomous AI Agents</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          ARKVOID helps you monitor AI agents in real time with full visibility into every action, decision, and tool call — built for secure, compliant, and trusted AI systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#" className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-all">
            Start Free — No Card
          </a>
          <a href="#" className="group inline-flex items-center gap-2 border border-border bg-card/50 px-6 py-3 rounded-full font-medium hover:bg-card transition-all">
            View Live Demo <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
