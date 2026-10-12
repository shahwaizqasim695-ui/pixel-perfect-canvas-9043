import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Hidden Realities" },
      { name: "description", content: "How The Hidden Realities: Lasting Ripples website handles your information." },
      { property: "og:title", content: "Privacy Policy — The Hidden Realities" },
      { property: "og:description", content: "How this website handles your information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <div className="bg-ink pt-32 pb-0"><div className="bg-background">
      <article className="mx-auto max-w-3xl space-y-5 px-6 py-24 text-muted-foreground">
        <h1 className="text-5xl text-foreground">Privacy Policy</h1>
        <p>We collect only what you choose to share: your email when you join the newsletter, and the details you send through the contact form.</p>
        <p>We never sell your information. Book purchases happen on Amazon and are governed by Amazon's own privacy policy.</p>
        <p>Your Julie's Notes access is remembered only in your own browser and can be cleared at any time.</p>
        <p>Questions? Reach out through the Contact page.</p>
      </article>
    </div></div>
  ),
});
