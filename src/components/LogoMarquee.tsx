import { motion } from "framer-motion";

const logos = [
  "Salesforce", "NVIDIA", "Stripe", "Wipro", "SAP",
  "Siemens", "Spotify", "Revolut", "Infosys", "Adobe",
];

export function LogoMarquee() {
  return (
    <section className="py-16 border-y border-border/50 overflow-hidden">
      <p className="text-center text-xs font-mono tracking-[0.3em] text-muted-foreground/70 mb-10">
        TRUSTED BY ENGINEERING TEAMS AT
      </p>
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 w-max"
        >
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className="text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap">
              {l}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
