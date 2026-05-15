import { motion } from "framer-motion";

const testimonials = [
  {
    tag: "FINTECH", color: "oklch(0.6 0.2 250)",
    quote: "We were blocked from deploying AI decisioning in our credit infrastructure by our compliance team. ARKVOID's cryptographic audit trail was the missing piece — we passed the internal audit in three weeks.",
    initials: "HI", name: "Head of AI Infrastructure", company: "European Digital Bank",
  },
  {
    tag: "LEGAL TECH", color: "oklch(0.7 0.17 155)",
    quote: "Our LLM contracts assistant touched privileged case data. With ARKVOID, we can prove to regulators and clients exactly which documents were accessed by which model version during each session. That's not a nice-to-have — it's a legal requirement.",
    initials: "CL", name: "CTO", company: "Legal AI Platform · Series B",
  },
  {
    tag: "HEALTHCARE", color: "oklch(0.65 0.22 25)",
    quote: "Clinical AI needs a chain of custody as rigorous as the decisions it supports. ARKVOID gave us immutable proof of every model inference that informed a clinical recommendation — before we went live.",
    initials: "VE", name: "VP of Engineering", company: "Healthcare AI Company",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 space-y-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-l-2 pl-6 md:pl-8 py-2"
            style={{ borderColor: t.color }}
          >
            <span
              className="inline-block text-[10px] font-mono tracking-[0.2em] px-2 py-1 rounded"
              style={{ backgroundColor: `color-mix(in oklab, ${t.color} 15%, transparent)`, color: t.color }}
            >
              {t.tag}
            </span>
            <div className="mt-3 text-gold text-sm">★★★★★</div>
            <blockquote className="mt-3 text-base md:text-lg text-foreground/90 leading-relaxed">
              "{t.quote}"
            </blockquote>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold" style={{ backgroundColor: `color-mix(in oklab, ${t.color} 25%, var(--card))`, color: t.color }}>
                {t.initials}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
