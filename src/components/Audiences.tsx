import { motion } from "framer-motion";
import { Code2, ShieldCheck, CheckCircle2 } from "lucide-react";

const items = [
  {
    icon: Code2, accent: "oklch(0.7 0.17 155)", title: "For Engineering",
    desc: "Stop digging through fragmented logs. Debug agent decisions instantly with structured traces, SDK integrations in 3 lines of code, and API-first design that fits your existing CI/CD.",
    bullets: ["Installs as standard NPM/PyPI package", "Zero-latency async logging", "Full REST API & gRPC endpoints", "Native LangChain & LlamaIndex hooks"],
  },
  {
    icon: ShieldCheck, accent: "oklch(0.65 0.2 290)", title: "For Security & Compliance",
    desc: "Never fail an AI audit. Auto-generate PDF evidence mapping every agent action to ISO 42001 and EU AI Act requirements. Prove unequivocally what happened.",
    bullets: ["Immutable Merkle chain logging", "One-click ISO & SOC 2 evidence export", "PII detection & redaction", "Mandatory human-in-the-loop gates"],
  },
];

export function Audiences() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">
          Built for the whole organization.
        </h2>
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `color-mix(in oklab, ${it.accent} 15%, transparent)`, border: `1px solid color-mix(in oklab, ${it.accent} 30%, transparent)` }}>
                  <Icon size={20} style={{ color: it.accent }} />
                </div>
                <h3 className="mt-8 text-2xl font-bold">{it.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{it.desc}</p>
                <ul className="mt-6 space-y-3">
                  {it.bullets.map(b => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={16} style={{ color: it.accent }} />
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
