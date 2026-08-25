import { clients, type Client } from "@/data/clients";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/shared/Container";
import { Marquee } from "@/components/shared/Marquee";

function ClientMark({ client }: { client: Client }) {
  return (
    <div className="flex h-16 shrink-0 items-center">
      <div className="flex h-full min-w-[240px] items-center justify-center px-8">
        <span
          className={`font-display whitespace-nowrap text-center text-[11px] font-medium tracking-[0.22em] uppercase ${
            client.isMore
              ? "text-muted/50 italic tracking-[0.14em] normal-case"
              : "text-muted/80"
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
    <section className="bg-background py-28">
      <Container>
        <Reveal className="mb-14 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            People we have built for
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light text-muted md:text-base">
            Hotels, schools, bakeries, fuel stations, and public sites. The
            names below will be replaced with official logos when they arrive.
          </p>
        </Reveal>
        <Reveal>
          <div className="group/marquee relative overflow-hidden border-y border-border py-5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-28"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-28"
            />
            <div className="space-y-1">
              <ClientRow items={rowOne} duration={48} />
              <ClientRow items={rowTwo} reverse duration={56} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
