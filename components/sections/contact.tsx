import { Reveal } from "@/components/animations/reveal";
import { ContactCard } from "@/components/contact/contact-card";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Contact
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Email is the fastest way to reach me — feel free to connect on GitHub or LinkedIn.
          </p>
        </Reveal>

        <div className="mt-10 max-w-2xl">
          <Reveal delay={0.05}>
            <ContactCard
              email={profile.email}
              githubUrl={profile.githubUrl}
              linkedinUrl={profile.linkedinUrl}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
