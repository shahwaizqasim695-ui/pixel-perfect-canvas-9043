import { createFileRoute } from "@tanstack/react-router";
import banner from "@/assets/banner-author.jpg";
import { PageBanner } from "@/components/site/Layout";

export const Route = createFileRoute("/about-the-author")({
  head: () => ({
    meta: [
      { title: "About the Author — The Hidden Realities: Lasting Ripples" },
      { name: "description", content: "Meet the author behind The Hidden Realities: Lasting Ripples and the reasons this story had to be written." },
      { property: "og:title", content: "About the Author — Lasting Ripples" },
      { property: "og:description", content: "The person behind the ripples, and why this story had to be told." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Author,
});

function Author() {
  return (
    <>
      <PageBanner image={banner} eyebrow="About the Author" title="Written from the water's edge" />
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="font-display text-3xl italic leading-snug">“I didn't set out to write a book. I set out to understand what happened to us.”</p>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>The author writes from lived experience — of watching systems fail the people they were built for, and of seeing those failures echo through a family over decades.</p>
          <p>Writing under a quiet name, the author chose to let the story speak louder than the storyteller. This book is an act of remembrance for those who were overlooked, and a gesture of hope for those still finding their footing.</p>
          <p>When not writing, the author can usually be found near water — walking, listening, and noticing the small things that change everything.</p>
        </div>
        <div className="mt-12 h-px w-24 bg-gold" />
      </section>
    </>
  );
}
