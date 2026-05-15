import { useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Features", "How it Works", "Pricing", "Docs", "Blog"];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sign In</a>
          <a href="#" className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors">Start Free</a>
        </div>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border/50 bg-background"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} onClick={() => setOpen(false)} className="text-foreground/80">{l}</a>
              ))}
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <a href="#" className="flex-1 text-center py-2 border border-border rounded-full text-sm">Sign In</a>
                <a href="#" className="flex-1 text-center py-2 bg-foreground text-background rounded-full text-sm font-medium">Start Free</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
