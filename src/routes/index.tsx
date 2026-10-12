import { createFileRoute, Link } from "@tanstack/react-router";
import { Music, ExternalLink } from "lucide-react";
import hero from "@/assets/hero-ripple.jpg";
import cover from "@/assets/book-cover.jpg";
import { AMAZON_URL } from "@/components/site/Layout";

const SONG_URL = "https://go.foreversongs.com/song/t/69ad1784551c2c7c1356b4c24042f412696549d592d73e73fbe6c1d07ce82e35";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Hidden Realities: Lasting Ripples — A Novel" },
      { name: "description", content: "Two generations. One broken system. A book about the ripples our choices leave behind — available on Amazon." },
      { property: "og:title", content: "The Hidden Realities: Lasting Ripples" },
      { property: "og:description", content: "Two generations. One broken system. The ripples that outlast us." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
        <img src={hero} alt="Ripples spreading across dark water" className="absolute inset-0 h-full w-full object-cover animate-drift" width={1920} height={1088} />
        <div className="veil absolute inset-0" />
        {[0, 2.3, 4.6].map((d) => (
          <span key={d} className="pointer-events-none absolute left-[63%] top-[52%] h-64 w-64 rounded-full border border-gold/30 animate-ripple" style={{ animationDelay: `${d}s` }} />
        ))}
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 animate-rise">
          <p className="eyebrow">A novel in two generations</p>
          <h1 className="mt-6 text-6xl leading-[0.95] text-ink-foreground md:text-8xl">
            The Hidden<br />Realities
          </h1>
          <p className="mt-4 font-display text-3xl italic text-gold md:text-4xl">Lasting Ripples</p>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-foreground/75">
            A single stone breaks the surface. What follows is never just one moment — it is everything that moment touches.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={AMAZON_URL} target="_blank" rel="noreferrer" className="btn-gold">Buy the Book on Amazon</a>
            <Link to="/about-the-book" className="btn-ghost-light">Discover the Story</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-28 md:grid-cols-[1fr_1.2fr]">
        <img src={cover} alt="Book cover of The Hidden Realities: Lasting Ripples" loading="lazy" width={768} height={1152} className="mx-auto w-72 shadow-soft md:w-full md:max-w-sm" />
        <div>
          <p className="eyebrow">The Message</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">What we fail to fix doesn't disappear. It spreads.</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>Told through the lives of a mother and her child, this book follows how systemic failure — the quiet kind, the paperwork kind — moves from one generation into the next.</p>
            <p>It is a story of what was lost, what was carried, and the stubborn hope that a different ripple can still be sent out.</p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t pt-8">
            {["Ripple effects", "Systemic failure", "Hope & reflection"].map((t) => (
              <p key={t} className="font-display text-xl italic">{t}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Music className="mx-auto h-6 w-6 text-gold" />
          <p className="eyebrow mt-4">A song for the story</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Melissa my Valentine</h2>
          <p className="mt-2 font-display text-xl italic text-muted-foreground">A song for Melissa</p>
          <div className="mt-10 overflow-hidden rounded-lg border bg-card shadow-soft">
            <iframe src={SONG_URL} title="Melissa my Valentine: A song for Melissa" className="h-[520px] w-full" allow="autoplay; encrypted-media" loading="lazy" />
          </div>
          <a href={SONG_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold">
            Open the song in a new tab <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <blockquote className="font-display text-3xl italic leading-snug md:text-5xl">
          “We never see the stone. We only live inside the circles it leaves.”
        </blockquote>
        <a href={AMAZON_URL} target="_blank" rel="noreferrer" className="btn-gold mt-12">Buy the Book on Amazon</a>
      </section>
    </>
  );
}
