import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 radial-glow" />
      <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="inline-block font-mono text-xs px-3 py-1.5 rounded bg-card border border-border text-muted-foreground"
        >
          agent.log()
        </motion.div>
        <h2 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
          Ready to secure<br />your agents?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Integrate the SDK in 5 minutes. Secure your agent operations against silent failures and hallucination liability.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="bg-gold text-background px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity glow-gold">
            Start Free
          </a>
          <a href="#" className="border border-border bg-card/50 px-8 py-3 rounded-full font-medium hover:bg-card transition-colors">
            Read Docs
          </a>
        </div>
        <div className="mt-10 inline-block font-mono text-[10px] px-2 py-1 rounded border border-danger/40 bg-danger/10 text-danger">
          SHA-256 CHECK
        </div>
      </div>
    </section>
  );
}
