import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  ["How is a \"trace\" counted?", "A trace is one complete agent action including the prompt, model call, tool invocations, and final response. Sub-calls within a single agent action are bundled into one trace."],
  ["Can I switch plans anytime?", "Yes. Upgrade instantly with prorated billing. Downgrades take effect at your next billing cycle."],
  ["Do unused traces roll over?", "Unused traces don't roll over month to month, but you can purchase trace packs at any time without changing plans."],
  ["How does the 14-day trial work?", "Full access to all Growth features for 14 days. No credit card required to start. We'll remind you before the trial ends."],
  ["What's your refund policy?", "30-day money-back guarantee on all paid plans, no questions asked. Annual plans are refunded prorated for unused months."],
  ["Is ARKVOID available in my country?", "ARKVOID is available globally. We have data residency options in the US and EU, with on-premise deployment available for Enterprise customers in any region."],
  ["Does on-premise deployment affect pricing?", "On-premise deployment is included in Enterprise plans. We provide deployment support and dedicated infrastructure templates for AWS, GCP, and Azure."],
  ["Do you offer discounts for startups or nonprofits?", "Yes. Verified startups (under 2 years, under $5M ARR) get 50% off. Nonprofits and academic institutions receive 70% off all plans."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Frequently asked questions</h2>
        <div className="mt-14 space-y-3">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border border-border rounded-xl bg-card/40 overflow-hidden">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-card/60 transition-colors">
                  <span className="font-medium text-sm md:text-base">{q}</span>
                  <Plus size={18} className={`text-muted-foreground transition-transform shrink-0 ml-4 ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
