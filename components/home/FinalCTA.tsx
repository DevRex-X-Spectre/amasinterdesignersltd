import { Icon } from "@iconify/react";
import { Button } from "@/components/shared/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface py-32">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="cta-orb absolute top-1/2 left-1/2 h-[800px] w-[800px] rounded-full bg-accent/30 blur-[100px]" />
      </div>
      <Reveal className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
          Got something you need made?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-muted">
          Tell us the sign, the place, and when you need it. We will come back
          with a clear next step.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnetic>
            <Button href="/quote" variant="white" className="w-full sm:w-auto">
              Request a Quote
            </Button>
          </Magnetic>
          <Magnetic>
            <Button href="/contact" variant="outline" className="w-full sm:w-auto">
              <Icon icon="solar:phone-linear" className="mr-2 text-lg" />
              Contact Us
            </Button>
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}
