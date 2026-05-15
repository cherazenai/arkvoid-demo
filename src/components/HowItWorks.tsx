import { motion } from "framer-motion";

function WindowChrome({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-[oklch(0.06_0_0)] overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60">
        <span className="w-3 h-3 rounded-full bg-[oklch(0.65_0.22_25)]" />
        <span className="w-3 h-3 rounded-full bg-[oklch(0.78_0.16_70)]" />
        <span className="w-3 h-3 rounded-full bg-[oklch(0.7_0.17_155)]" />
        {title && <span className="ml-3 text-xs font-mono text-muted-foreground">{title}</span>}
      </div>
      <div className="p-5 font-mono text-xs leading-relaxed">{children}</div>
    </div>
  );
}

const steps = [
  {
    n: "01", tag: "CONNECT", title: "Initialize the wrapper",
    desc: "One SDK import. One decorator wrapping your agent function. ARKVOID begins intercepting and cryptographically sealing every action — zero changes to your inference logic.",
    visual: (
      <WindowChrome title="agent.py">
        <div className="text-muted-foreground">from arkvoid import <span className="text-gold">trace</span>, <span className="text-gold">verify</span></div>
        <div className="mt-3 text-success">@trace<span className="text-foreground">(agent=<span className="text-warning">"tx-processor"</span>, policy=<span className="text-warning">"strict_v2"</span>)</span></div>
        <div className="text-foreground"><span className="text-[oklch(0.65_0.2_290)]">def</span> <span className="text-success">process_transaction</span>(data, context):</div>
        <div className="pl-4 text-muted-foreground/70"># Execution is cryptographically sealed</div>
        <div className="pl-4 text-foreground"><span className="text-[oklch(0.65_0.2_290)]">return</span> approve(data)<span className="animate-pulse">▎</span></div>
      </WindowChrome>
    ),
  },
  {
    n: "02", tag: "LOG", title: "Run your agents",
    desc: "Every action your agents take is captured at the infrastructure layer — before responses leave your system. Model, prompt, tool calls, latency, data accessed, output delta. Automatic. Always on.",
    visual: (
      <WindowChrome title="Live Trace Feed">
        {[
          { t: "10:42:34", a: "agent:fraud-det", m: "model:gpt-4o", r: "23", s: "VERIFIED", sc: "text-success" },
          { t: "10:42:38", a: "agent:contract", m: "model:mistral-lg", r: "67", s: "REVIEW", sc: "text-warning" },
          { t: "10:42:41", a: "agent:risk-score", m: "model:llama-3", r: "11", s: "VERIFIED", sc: "text-success" },
          { t: "10:42:45", a: "agent:tx-processor", m: "model:gpt-4", r: "82", s: "REVIEW", sc: "text-danger" },
        ].map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-3 py-1"
          >
            <span className="text-muted-foreground">[{row.t}]</span>
            <span className="text-[oklch(0.7_0.16_220)]">{row.a}</span>
            <span className="text-muted-foreground">{row.m}</span>
            <span className="text-warning">risk:{row.r}</span>
            <span className={`ml-auto ${row.sc}`}>{row.s === "VERIFIED" ? "✓" : "⚠"} {row.s}</span>
          </motion.div>
        ))}
      </WindowChrome>
    ),
  },
  {
    n: "03", tag: "AUDIT", title: "Query cryptographically",
    desc: "Query any action across any timeframe with cryptographic proof. Answer regulators, internal auditors, or incident responders in seconds — not weeks. Evidence stands up.",
    visual: (
      <WindowChrome>
        <div className="flex items-center justify-between p-2 border border-border rounded mb-3">
          <span className="text-muted-foreground">Show all REVIEW-flagged actions</span>
          <span className="text-xs px-2 py-1 bg-card rounded text-foreground">Run Query →</span>
        </div>
        {[
          { id: "ark_9x8c7v6b", a: "agent:contract-gen", r: "67", t: "11/12/2026 10:42 UTC", tools: "FileWrite, EscrowAPI" },
          { id: "ark_3m2p9q", a: "agent:email-sender", r: "71", t: "11/12/2026 09:14 UTC", tools: "SMTP, DataExport" },
        ].map((r, i) => (
          <div key={i} className="p-3 mb-2 rounded border border-border/60 bg-card/40">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-foreground">{r.id}</span>
                <span className="text-muted-foreground ml-2">·</span>
                <span className="text-[oklch(0.7_0.16_220)] ml-2">{r.a}</span>
              </div>
              <span className="text-danger">risk:{r.r} ⚠ REVIEW</span>
            </div>
            <div className="text-muted-foreground text-[10px] mt-2">{r.t} | Tools: {r.tools}</div>
            <div className="text-success text-[10px] mt-1">Cryptographic proof: SHA-256 verified ✓</div>
          </div>
        ))}
      </WindowChrome>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">How it works</h2>
          <p className="mt-5 text-muted-foreground text-lg">Drop-in infrastructure. 3 lines of code.</p>
        </div>

        <div className="mt-20 space-y-24">
          {steps.map((s, i) => (
            <div key={s.n} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                <div className="text-xs font-mono tracking-wider text-muted-foreground">
                  STEP <span className="text-gold">{s.n}</span> &nbsp;|&nbsp; {s.tag}
                </div>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-5 text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {s.visual}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
