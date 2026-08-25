import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/motion/Reveal";

export function ContrastBand() {
  return (
    <section className="relative border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            One team, from the sketch to the last screw.
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-base font-light text-muted">
            When one person draws, another prints, and a third hangs it, something
            always slips. We keep the whole job here.
          </p>
        </Reveal>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <Reveal className="flex flex-col items-center rounded-2xl bg-background p-8 text-center shadow-[0_18px_38px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:-translate-y-1">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fd7402]/12 text-accent">
            <Icon icon="solar:close-circle-linear" className="text-3xl" />
          </div>
          <h3 className="font-display mb-2 text-xl font-medium tracking-tight">
            Split between suppliers
          </h3>
          <p className="mb-6 text-sm text-muted">
            Colour shifts, fittings miss, and nobody owns the finish. You end up
            chasing three people for one sign.
          </p>
          <div className="text-lg font-semibold text-accent line-through opacity-70">
            Rework, delay, mismatch
          </div>
        </Reveal>
        <Reveal className="relative flex flex-col items-center overflow-hidden rounded-2xl bg-gradient-to-br from-surface to-background p-8 text-center shadow-[0_0_30px_rgba(253,116,2,0.08)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(253,116,2,0.14)]">
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fd7402]/12 text-[#fd7402]">
            <Icon icon="solar:check-read-linear" className="text-3xl" />
          </div>
          <h3 className="font-display mb-2 text-xl font-medium tracking-tight">
            With AMAS
          </h3>
          <p className="mb-6 text-sm text-muted">
            Design, making, lighting, and install stay with one team, so the sign
            on the wall is the one you approved.
          </p>
          <div className="text-xl font-semibold text-white">
            One brief, one build, one handover
          </div>
        </Reveal>
      </div>
    </section>
  );
}
