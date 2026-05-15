import { Logo } from "./Logo";
import { Twitter, Github, Linkedin } from "lucide-react";

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
