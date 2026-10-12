import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import banner from "@/assets/banner-contact.jpg";
import { CONTACT_EMAIL, PageBanner } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — The Hidden Realities: Lasting Ripples" },
      { name: "description", content: "Get in touch about the book, readings, interviews or Julie's Notes access." },
      { property: "og:title", content: "Contact — Lasting Ripples" },
      { property: "og:description", content: "Send a message to the author of The Hidden Realities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
    toast.success("Your message has been sent. Thank you.");
  };
  return (
    <>
      <PageBanner image={banner} eyebrow="Contact Us" title="Send a ripple our way" />
      <section className="mx-auto grid max-w-5xl gap-16 px-6 py-24 md:grid-cols-[1fr_1.5fr]">
        <div>
          <h2 className="text-4xl">We'd love to hear from you.</h2>
          <p className="mt-4 text-muted-foreground">For readers, book clubs, press and interview requests, or help with your Julie's Notes code.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-8 inline-flex items-center gap-3 text-primary hover:text-gold">
            <Mail className="h-5 w-5" /> {CONTACT_EMAIL}
          </a>
        </div>
        <form onSubmit={submit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input required name="name" placeholder="Your name" className="field" />
            <input required type="email" name="email" placeholder="Your email" className="field" />
          </div>
          <input name="subject" placeholder="Subject" className="field" />
          <textarea required name="message" rows={6} placeholder="Your message" className="field resize-none" />
          <button className="btn-gold">Send Message</button>
          {sent && <p className="text-sm text-muted-foreground">Thank you — we'll be in touch soon.</p>}
        </form>
      </section>
    </>
  );
}
