import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Lock, Menu, X } from "lucide-react";
import { toast } from "sonner";

export const AMAZON_URL = "https://www.amazon.com/s?k=The+Hidden+Realities+Lasting+Ripples";
export const CONTACT_EMAIL = "hello@lastingripples.com";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about-the-book", label: "About the Book" },
  { to: "/about-the-author", label: "About the Author" },
  { to: "/julies-notes", label: "Julie's Notes", locked: true },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`group leading-none ${light ? "text-ink-foreground" : "text-foreground"}`}>
      <span className="block font-display text-xl tracking-[0.18em] uppercase">The Hidden Realities</span>
      <span className="mt-1 block font-display text-sm italic tracking-[0.12em] text-gold">Lasting Ripples</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo light />
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/75 transition hover:text-ink-foreground"
              activeProps={{ className: "!text-gold" }}
            >
              {"locked" in n && <Lock className="h-3 w-3" />}
              {n.label}
            </Link>
          ))}
        </nav>
        <button aria-label="Open menu" className="text-ink-foreground lg:hidden" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink px-6 py-6 text-ink-foreground">
          <div className="flex items-center justify-between">
            <Logo light />
            <button aria-label="Close menu" onClick={() => setOpen(false)}><X /></button>
          </div>
          <nav className="mt-14 flex flex-col gap-6">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="flex items-center gap-3 font-display text-3xl">
                {n.label} {"locked" in n && <Lock className="h-4 w-4 text-gold" />}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thank you — you'll hear from us when the next ripple arrives.");
    setEmail("");
  };
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
            Every choice disturbs the surface. Some ripples last for generations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-ink-foreground/75">
          <Link to="/about-the-book" className="hover:text-gold">About the Book</Link>
          <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
          <Link to="/about-the-author" className="hover:text-gold">About the Author</Link>
          <Link to="/terms" className="hover:text-gold">Terms</Link>
          <Link to="/blog" className="hover:text-gold">Blog</Link>
        </div>
        <form onSubmit={submit}>
          <p className="eyebrow">Newsletter</p>
          <p className="mt-3 text-sm text-ink-foreground/60">Quiet, occasional letters from the author.</p>
          <div className="mt-4 flex gap-2">
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full rounded border border-ink-foreground/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <button className="btn-gold !px-5">Join</button>
          </div>
        </form>
      </div>
      <div className="border-t border-ink-foreground/10 py-6 text-center text-xs tracking-widest text-ink-foreground/40">
        © {new Date().getFullYear()} THE HIDDEN REALITIES · LASTING RIPPLES
      </div>
    </footer>
  );
}

export function PageBanner({ image, eyebrow, title, subtitle }: { image: string; eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative flex h-[62vh] min-h-[420px] items-end overflow-hidden bg-ink">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover animate-drift" width={1920} height={800} />
      <div className="veil absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 animate-rise">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl text-ink-foreground md:text-7xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-xl text-lg text-ink-foreground/75">{subtitle}</p>}
      </div>
    </section>
  );
}
