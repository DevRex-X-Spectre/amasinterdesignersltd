import { clients, type Client } from "@/data/clients";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/shared/Container";
import { Marquee } from "@/components/shared/Marquee";

function ClientMark({ client }: { client: Client }) {
  return (
    <div className="flex h-14 shrink-0 items-center sm:h-16">
      <div className="flex h-full min-w-[190px] items-center justify-center px-6 sm:min-w-[230px] sm:px-8">
        <span
          className={`font-display whitespace-nowrap text-center text-[10px] font-semibold tracking-[0.16em] uppercase sm:text-[11px] sm:tracking-[0.2em] ${
            client.isMore
              ? "text-accent/80 italic tracking-[0.12em] normal-case"
              : "text-white/75"
          }`}
        >
          {client.name}
        </span>
      </div>
      <span aria-hidden className="h-3 w-px bg-border" />
    </div>
  );
}

function ClientRow({
  items,
  reverse,
  duration,
}: {
  items: Client[];
  reverse?: boolean;
  duration: number;
}) {
  const loop = [...items, ...items];

  return (
    <Marquee reverse={reverse} duration={duration} fade={false}>
      {loop.map((client, index) => (
        <ClientMark key={`${client.name}-${index}`} client={client} />
      ))}
    </Marquee>
  );
}

export function TrustedBy() {
  const named = clients.filter((client) => !client.isMore);
  const more = clients.find((client) => client.isMore);
  const mid = Math.ceil(named.length / 2);
  const rowOne = more ? [...named.slice(0, mid), more] : named.slice(0, mid);
  const rowTwo = named.slice(mid);

  return (
    <section className="border-y border-border bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="mb-10 text-center sm:mb-12">
          <span className="mb-3 block text-xs font-medium tracking-[0.24em] text-accent uppercase">
            Trusted by teams
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            People we have built for
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed font-light text-muted md:text-base">
            Signs, branding, and outdoor work for businesses, institutions, and
            public spaces across Jos and beyond.
          </p>
        </Reveal>
        <Reveal>
          <div className="group/marquee relative overflow-hidden border-y border-border py-3">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface via-surface/90 to-transparent sm:w-40 md:w-56"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface via-surface/90 to-transparent sm:w-40 md:w-56"
            />
            <div className="space-y-px">
              <ClientRow items={rowOne} duration={52} />
              <ClientRow items={rowTwo} reverse duration={60} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
