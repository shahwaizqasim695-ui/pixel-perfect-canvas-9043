import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — The Hidden Realities" },
      { name: "description", content: "Terms of use for The Hidden Realities: Lasting Ripples author website." },
      { property: "og:title", content: "Terms of Use — The Hidden Realities" },
      { property: "og:description", content: "Terms of use for this author website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <div className="bg-ink pt-32"><div className="bg-background">
      <article className="mx-auto max-w-3xl space-y-5 px-6 py-24 text-muted-foreground">
        <h1 className="text-5xl text-foreground">Terms of Use</h1>
        <p>All text, images and journal pages on this site are the property of the author and may not be reproduced without permission.</p>
        <p>Julie's Notes access codes are provided for personal use by owners of the book and should not be shared publicly.</p>
        <p>The book is sold exclusively through Amazon; all purchases are subject to Amazon's terms.</p>
      </article>
    </div></div>
  ),
});
