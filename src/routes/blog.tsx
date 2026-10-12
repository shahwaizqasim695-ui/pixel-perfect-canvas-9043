import { createFileRoute } from "@tanstack/react-router";
import banner from "@/assets/banner-blog.jpg";
import { PageBanner } from "@/components/site/Layout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Reflections from The Hidden Realities" },
      { name: "description", content: "Essays and reflections from the author of The Hidden Realities: Lasting Ripples." },
      { property: "og:title", content: "Blog — Lasting Ripples" },
      { property: "og:description", content: "Essays and reflections on ripple effects, systems and hope." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

const posts = [
  { date: "Coming soon", tag: "Reflection", title: "Why I started with a stone and still water", excerpt: "The image that began everything, and why it refused to leave me alone." },
  { date: "Coming soon", tag: "Systems", title: "The quiet violence of waiting", excerpt: "On waiting rooms, unanswered letters and what delay does to a family." },
  { date: "Coming soon", tag: "Mindfulness", title: "Tracing your own ripples", excerpt: "A short exercise from the book to try at home, slowly." },
];

function Blog() {
  return (
    <>
      <PageBanner image={banner} eyebrow="The Blog" title="Small ripples, written down" />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="group border-t-2 border-gold pt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.tag} · {p.date}</p>
            <h2 className="mt-4 text-3xl leading-tight transition group-hover:text-primary">{p.title}</h2>
            <p className="mt-4 text-muted-foreground">{p.excerpt}</p>
          </article>
        ))}
      </section>
    </>
  );
}
