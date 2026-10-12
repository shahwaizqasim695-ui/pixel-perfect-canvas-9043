import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Lock, KeyRound, X, LogOut } from "lucide-react";
import banner from "@/assets/banner-notes.jpg";
import { PageBanner } from "@/components/site/Layout";

const ACCESS_CODE = "RIPPLE2026";
const KEY = "julies-notes-unlocked";

export const Route = createFileRoute("/julies-notes")({
  head: () => ({
    meta: [
      { title: "Julie's Notes — Private Journal | Lasting Ripples" },
      { name: "description", content: "A private gallery of Julie's handwritten journal pages, unlocked with the code printed inside the book." },
      { property: "og:title", content: "Julie's Notes — Private Journal" },
      { property: "og:description", content: "Unlock Julie's handwritten pages with the code inside your copy of the book." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Notes,
});

const pages = Array.from({ length: 9 }, (_, i) => ({
  n: i + 1,
  date: ["Spring", "Summer", "Autumn", "Winter"][i % 4] + ` · Page ${i + 1}`,
  line: [
    "Today I waited again. The office said tomorrow…",
    "She asked why the sky looks heavier here.",
    "I keep the letters. Someone should.",
    "The water was still this morning. I wasn't.",
    "They told us we were next on the list.",
    "I want her to remember the good parts.",
    "Some days the ripples reach me before the stone.",
    "Hope is a small, stubborn thing.",
    "If you are reading this — keep going.",
  ][i],
}));

function Notes() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [opening, setOpening] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (localStorage.getItem(KEY) === "1") setUnlocked(true);
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (code.trim().toUpperCase() === ACCESS_CODE) {
      setOpening(true);
      localStorage.setItem(KEY, "1");
      setTimeout(() => setUnlocked(true), 900);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  if (!unlocked) {
    return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-6">
        <img src={banner} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 blur-sm animate-drift" width={1920} height={800} />
        <div className="veil absolute inset-0" />
        <div className={`relative w-full max-w-md rounded-lg border border-gold/30 bg-ink/80 p-10 text-center text-ink-foreground shadow-soft backdrop-blur-md transition-all duration-700 ${opening ? "scale-95 opacity-0" : "animate-rise"}`}>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50">
            <Lock className="h-6 w-6 text-gold" />
          </div>
          <p className="eyebrow mt-6">Private · For readers only</p>
          <h1 className="mt-3 text-5xl">Julie's Notes</h1>
          <p className="mt-4 text-sm leading-relaxed text-ink-foreground/65">
            These pages were never meant to be public. Enter the access code printed inside your copy of the book — or scan its QR code.
          </p>
          <form onSubmit={submit} className={`mt-8 ${error ? "animate-shake" : ""}`}>
            <label htmlFor="code" className="sr-only">Access code</label>
            <div className="relative">
              <KeyRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
              <input
                id="code" value={code} onChange={(e) => setCode(e.target.value)} autoComplete="off"
                placeholder="ENTER ACCESS CODE"
                className="w-full rounded border border-ink-foreground/20 bg-transparent py-4 pl-11 pr-4 text-center font-mono tracking-[0.3em] uppercase outline-none focus:border-gold"
              />
            </div>
            {error && <p className="mt-3 text-sm text-gold">That code doesn't match. Please check the inside cover.</p>}
            <button className="btn-gold mt-5 w-full">Unlock the Journal</button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageBanner image={banner} eyebrow="Unlocked · Private Collection" title="Julie's Notes" subtitle="Handwritten pages, kept exactly as they were. Please read gently." />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{pages.length} pages</p>
          <button onClick={() => { localStorage.removeItem(KEY); setUnlocked(false); setOpening(false); setCode(""); }} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4" /> Lock again
          </button>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((p, i) => (
            <button key={p.n} onClick={() => setActive(i)} className="group animate-rise text-left" style={{ animationDelay: `${i * 80}ms` }}>
              <JournalPage p={p} className="transition duration-500 group-hover:-translate-y-1 group-hover:rotate-0" tilt={i % 2 ? "rotate-1" : "-rotate-1"} />
            </button>
          ))}
        </div>
      </section>
      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-6" onClick={() => setActive(null)}>
          <button aria-label="Close" className="absolute right-6 top-6 text-ink-foreground"><X /></button>
          <div className="w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <JournalPage p={pages[active]!} large />
          </div>
        </div>
      )}
    </>
  );
}

function JournalPage({ p, className = "", tilt = "", large = false }: { p: (typeof pages)[number]; className?: string; tilt?: string; large?: boolean }) {
  return (
    <div className={`relative aspect-[3/4] overflow-hidden rounded-sm bg-paper p-8 shadow-soft ${tilt} ${className}`}>
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "repeating-linear-gradient(transparent 0 31px, color-mix(in oklab, var(--water) 45%, transparent) 31px 32px)" }} />
      <div className="absolute inset-y-0 left-12 w-px bg-destructive/25" />
      <div className="relative pl-6">
        <p className="eyebrow !text-accent-foreground/60">{p.date}</p>
        <p className={`mt-6 font-display italic leading-[2rem] text-accent-foreground ${large ? "text-3xl" : "text-2xl"}`}>{p.line}</p>
        <p className="mt-6 text-xs italic text-muted-foreground">[ Scanned page placeholder ]</p>
      </div>
      <span className="absolute bottom-5 right-6 font-display text-accent-foreground/50">— J.</span>
    </div>
  );
}
