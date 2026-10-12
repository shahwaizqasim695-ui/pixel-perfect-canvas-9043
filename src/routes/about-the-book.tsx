import { createFileRoute } from "@tanstack/react-router";
import banner from "@/assets/banner-book.jpg";
import cover from "@/assets/book-cover.jpg";
import { AMAZON_URL, PageBanner } from "@/components/site/Layout";

export const Route = createFileRoute("/about-the-book")({
  head: () => ({
    meta: [
      { title: "About the Book — The Hidden Realities: Lasting Ripples" },
      { name: "description", content: "Themes, concept and what makes The Hidden Realities: Lasting Ripples unique: two generations, government failure and mindful reflection." },
      { property: "og:title", content: "About the Book — Lasting Ripples" },
      { property: "og:description", content: "Two generations, government failure, and the ripple effects that follow." },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Book,
});

const themes = [
  { n: "01", t: "Two Generations", d: "A mother and her child, decades apart, facing the same walls in different clothes." },
  { n: "02", t: "Government Failure", d: "Not villains, but systems — forms unanswered, help delayed, promises that quietly expire." },
  { n: "03", t: "Ripple Effects", d: "How one unresolved wound travels outward into families, neighborhoods and futures." },
  { n: "04", t: "Mindful Reflection", d: "Interactive pauses throughout invite you to stop, reflect and trace the ripples in your own life." },
];

function Book() {
  return (
    <>
      <PageBanner image={banner} eyebrow="About the Book" title="A story told in circles" subtitle="What happens to one generation rarely stays with it." />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <h2 className="text-4xl text-foreground">The concept</h2>
          <p><em className="font-display text-xl text-foreground">The Hidden Realities: Lasting Ripples</em> began with a simple image — a stone dropped into still water — and a harder question: who is still standing in the water long after the stone has sunk?</p>
          <p>Moving between two lives, the book exposes the hidden realities behind institutions meant to protect us, and how their failures shape the people who come after.</p>
          <p>It is honest without being hopeless. Beneath every chapter is the belief that we, too, can send out ripples — of care, of accountability, of change.</p>
        </div>
        <div className="text-center">
          <img src={cover} alt="Book cover" loading="lazy" width={768} height={1152} className="mx-auto w-64 shadow-soft" />
          <a href={AMAZON_URL} target="_blank" rel="noreferrer" className="btn-gold mt-8">Buy on Amazon</a>
        </div>
      </section>
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Themes</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded bg-ink-foreground/10 md:grid-cols-2">
            {themes.map((x) => (
              <div key={x.n} className="bg-ink p-10">
                <span className="font-display text-gold">{x.n}</span>
                <h3 className="mt-3 text-3xl">{x.t}</h3>
                <p className="mt-3 text-ink-foreground/65">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="eyebrow">Why it's different</p>
        <h2 className="mt-4 text-4xl md:text-5xl">More than a book you read — a book you carry.</h2>
        <p className="mt-6 text-lg text-muted-foreground">Inside every printed copy is a private code that unlocks Julie's Notes: the handwritten journal pages behind the story.</p>
      </section>
    </>
  );
}
