import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Database, FileText, Activity, UserCheck, Shield, Layers, Zap, ArrowRight } from "lucide-react";

const questions = [
  { n: "01", q: "Which model version executed this?", icon: Database, a: "ARKVOID logs the exact model fingerprint, version, and provider for every inference call." },
  { n: "02", q: "What exact prompt was sent?", icon: FileText, a: "Every prompt — system, user, and tool — is captured with cryptographic hashing." },
  { n: "03", q: "Which tools and APIs were invoked?", icon: Activity, a: "Full call graph of every tool, API, and downstream system the agent touched." },
  { n: "04", q: "Who or what authorized this action?", icon: UserCheck, a: "Identity chain from human operator through agent to action, signed end-to-end." },
  { n: "05", q: "What was the risk profile at runtime?", icon: Shield, a: "Real-time risk scoring with behavioral anomaly detection per inference." },
  { n: "06", q: "Which data sources did the agent access?", icon: Layers, a: "Complete data lineage including PII detection and access provenance." },
  { n: "07", q: "What state changed as a result?", icon: Zap, a: "Before/after state diff for every external write or system mutation." },
];

export function Questions() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-xs font-mono tracking-[0.25em] text-gold mb-6"
        >
          THE ACCOUNTABILITY GAP
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
        >
          Seven questions every AI team should be able to answer instantly.
        </motion.h2>
        <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
          Most teams today can't answer any of them. ARKVOID makes every answer instant, tamper-evident, and auditor-ready.
        </p>

        <div className="mt-14 space-y-3">
          {questions.map((item, i) => {
            const Icon = item.icon;
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="border border-border rounded-xl bg-card/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-card/60 transition-colors"
                >
                  <span className="font-mono text-xs text-muted-foreground">{item.n}</span>
                  <span className="flex-1 font-medium">{item.q}</span>
                  <Icon size={16} className="text-muted-foreground" />
                  <Plus size={18} className={`text-muted-foreground transition-transform ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pl-14 text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <a href="#pricing" className="mt-10 inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all">
          Ready to answer all seven? <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
