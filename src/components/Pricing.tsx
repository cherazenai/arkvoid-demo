import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Developer", price: "$0", suffix: "/ forever", desc: "For developers building and testing AI agents",
    cta: "Start Building", note: "No credit card required",
    features: [
      ["3 agent identities", true], ["10,000 traces / month", true], ["7-day trace retention", true],
      ["Basic trace explorer", true], ["Cryptographic hashing (SHA-256)", true], ["REST API access", true],
      ["Community Discord support", true], ["1 team member", true],
      ["Compliance reports", false], ["Arkvoid Intelligence AI", false], ["Data export", false], ["Priority support", false],
    ],
  },
  {
    name: "Growth", price: "$19", suffix: "/mo", desc: "For teams running AI agents in production",
    cta: "Start Free Trial", note: "14-day free trial · No credit card", featured: true,
    features: [
      ["10 agent identities", true], ["500,000 traces / month", true], ["30-day trace retention", true],
      ["Full trace explorer + search", true], ["Cryptographic chains (Merkle)", true],
      ["Arkvoid Intelligence (risk scoring)", true], ["Compliance reports (weekly)", true],
      ["Data export: PDF + CSV", true], ["REST API access", true], ["Email alerts", true],
      ["Up to 5 team members", true], ["Priority email support (48h SLA)", true],
      ["Custom retention", false], ["On-premise / VPC deploy", false], ["SSO / SAML", false],
    ],
  },
  {
    name: "Scale", price: "$79", suffix: "/mo", desc: "For engineering teams with advanced governance needs",
    cta: "Get Started",
    features: [
      ["Unlimited agent identities", true], ["10,000,000 traces / month", true], ["1-year trace retention", true],
      ["Everything in Growth", true], ["Compliance reports (daily, ISO 42001 mapped)", true],
      ["Custom risk scoring rules", true], ["Multi-environment support", true],
      ["Up to 25 team members", true], ["RBAC (role-based access control)", true],
      ["Data residency: US or EU", true], ["Priority Slack support (4h SLA)", true],
      ["Quarterly compliance review call", true],
      ["On-premise / VPC", false], ["SSO / SAML", false], ["Custom SLA", false],
    ],
  },
  {
    name: "Enterprise", price: "Custom", suffix: "", desc: "For regulated industries with compliance mandates",
    cta: "Talk to Sales",
    features: [
      ["Everything in Scale", true], ["Unlimited traces + custom retention (1-7 years)", true],
      ["Full audit export (PDF, CSV, JSON, SIEM)", true], ["SOC 2 Type II evidence package", true],
      ["EU AI Act Article 13 + 22 logs", true], ["ISO 42001 AI Management System mapping", true],
      ["SSO / SAML (Okta, Azure AD, Google)", true], ["On-premise / VPC deployment", true],
      ["99.9% uptime SLA (contractual)", true], ["Dedicated Customer Success Manager", true],
      ["Custom contracts + BAA / DPA available", true],
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Transparent pricing.<br />No surprises.
          </h2>
          <div className="mt-10 inline-flex items-center gap-1 p-1 rounded-full bg-card border border-border">
            <button onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-full text-sm transition-colors ${!annual ? "bg-foreground text-background" : "text-muted-foreground"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-full text-sm transition-colors flex items-center gap-2 ${annual ? "bg-foreground text-background" : "text-muted-foreground"}`}>
              Annual <span className="text-[10px] px-1.5 py-0.5 rounded bg-success/20 text-success">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative p-6 rounded-2xl border bg-card flex flex-col ${p.featured ? "border-gold glow-gold" : "border-border"}`}
            >
              {p.featured && <div className="absolute top-0 right-6 -translate-y-1/2 text-[10px] font-mono tracking-wider px-2 py-1 rounded bg-gold text-background font-bold">POPULAR</div>}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground min-h-[3rem]">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold">{p.price}</span>
                {p.suffix && <span className="text-muted-foreground text-sm">{p.suffix}</span>}
              </div>
              <button className={`mt-6 w-full py-3 rounded-full text-sm font-medium transition-all ${p.featured ? "bg-gold text-background hover:opacity-90" : "border border-border hover:bg-secondary"}`}>
                {p.cta}
              </button>
              {p.note && <p className="text-center text-[10px] text-muted-foreground mt-2">{p.note}</p>}
              <ul className="mt-6 space-y-3 text-sm border-t border-border pt-6">
                {p.features.map(([label, ok], j) => (
                  <li key={j} className={`flex items-start gap-2 ${ok ? "" : "text-muted-foreground/50"}`}>
                    {ok ? <Check size={14} className="text-success mt-0.5 shrink-0" /> : <X size={14} className="mt-0.5 shrink-0" />}
                    <span className="text-xs leading-relaxed">{label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          Prices in USD. EU customers billed in EUR at current rate.<br />
          EU VAT applied where required. ARKVOID is available globally.
        </p>
      </div>
    </section>
  );
}
