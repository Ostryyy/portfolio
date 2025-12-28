import { Reveal } from "@/components/animations/reveal";
import { ContactCard } from "@/components/contact/contact-card";

export function ContactSection() {
  return (
    <section id="contact" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Kontakt
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Najszybciej złapiesz mnie mailowo — albo przez GitHub/LinkedIn.
          </p>
        </Reveal>

        <div className="mt-10 max-w-2xl">
          <Reveal delay={0.05}>
            <ContactCard
              email="twojemail@example.com"
              githubUrl="https://github.com/twojprofil"
              linkedinUrl="https://www.linkedin.com/in/twojprofil/"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
