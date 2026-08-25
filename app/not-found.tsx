import { Button } from "@/components/shared/Button";
import { whatsappHref } from "@/data/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 pt-20">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-2xl text-center">
        <span className="mb-4 block text-sm font-medium tracking-widest text-accent uppercase">
          404
        </span>
        <h1 className="font-display text-5xl font-semibold tracking-tight md:text-7xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base font-light text-muted">
          That page is not here. Go home, or send a quote if you already know
          what you need made.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" variant="white">
            Back home
          </Button>
          <Button
            href={whatsappHref("Good day, AMAS Inter Designers. I need assistance finding information on your website. Please point me in the right direction. Thank you.")}
            external
            variant="outline"
          >
            Request Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
