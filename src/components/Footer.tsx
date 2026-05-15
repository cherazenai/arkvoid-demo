import { Logo } from "./Logo";

const Twitter = (p: { size?: number }) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const Github = (p: { size?: number }) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
);
const Linkedin = (p: { size?: number }) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
);

const cols = [
  { title: "Product", links: ["Agent Registry", "Cryptographic Traces", "Compliance Reports", "Pricing"] },
  { title: "Company", links: ["About Us", "Blog", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Security & Trust", "DPA"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              The Chain of Custody for AI Decisions. Cryptographic provenance for enterprise AI agents.
            </p>
            <div className="mt-6 flex gap-4 text-muted-foreground">
              <a href="#" aria-label="Twitter" className="hover:text-foreground transition-colors"><Twitter size={16} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors"><Github size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors"><Linkedin size={16} /></a>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <h4 className="font-semibold text-sm">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.links.map(l => (
                  <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 ARKVOID Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-success" /> Systems Operational</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-warning" /> AI Governance Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
