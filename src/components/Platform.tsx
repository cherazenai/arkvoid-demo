import { motion } from "framer-motion";
import { Fingerprint, Zap, Lock, FileBarChart, KeyRound, Users, ArrowUpRight } from "lucide-react";

const modules = [
  { icon: Fingerprint, title: "Agent Identity Registry", desc: "Cryptographic identity for every AI agent in your infrastructure." },
  { icon: Zap, title: "Arkvoid Intelligence", desc: "Real-time risk scoring and behavioral anomaly detection." },
  { icon: Lock, title: "Cryptographic Traces", desc: "Tamper-evident audit records for every AI action. Immutable by design." },
  { icon: FileBarChart, title: "Compliance Reports", desc: "Automated governance reports mapped to SOC2, EU AI Act, ISO 42001." },
  { icon: KeyRound, title: "Permission Ledger", desc: "Immutable snapshot of every permission your agents held at runtime." },
  { icon: Users, title: "Human-in-the-Loop", desc: "Mandatory review gates for high-stakes AI actions." },
];

const compat = ["OpenAI", "Anthropic", "Arkvoid Intelligence", "Gemini", "Llama", "LangChain", "LlamaIndex", "AutoGen", "CrewAI", "Custom"];

export function Platform() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs font-mono tracking-[0.25em] text-gold mb-6">THE PLATFORM</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
          AI governance infrastructure.<br />Not just logging.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
          Six production-grade modules. One SDK import. Works with any model, any agent framework, any cloud.
        </p>
        <div className="mt-6 text-sm font-mono text-muted-foreground flex flex-wrap gap-x-3 gap-y-1">
          <span className="text-foreground/60">Compatible with:</span>
          {compat.map((c, i) => (
            <span key={c}>
              <span className="text-foreground">{c}</span>
              {i < compat.length - 1 && <span className="text-muted-foreground/50 ml-3">·</span>}
            </span>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative p-7 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center">
                    <Icon size={18} className="text-foreground/80" />
                  </div>
                  <a href="#" className="text-xs text-gold inline-flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowUpRight size={12} />
                  </a>
                </div>
                <h3 className="relative mt-12 font-semibold text-lg">{m.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
