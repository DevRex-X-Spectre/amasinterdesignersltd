import { Icon } from "@iconify/react";
import { site } from "@/data/site";

export function LocationMap() {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.name)},${site.contact.latitude},${site.contact.longitude}&ll=${site.contact.latitude},${site.contact.longitude}&layer=s&t=k&z=18&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-[16/9] min-h-[280px] w-full">
        <iframe
          title="AMAS Inter Designers Limited location map"
          src={mapUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs tracking-widest text-muted uppercase">
            Find us
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white">
            {site.contact.address}
          </p>
        </div>
        <a
          href={site.contact.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-white"
        >
          Open in Maps
          <Icon icon="solar:arrow-right-up-linear" aria-hidden />
        </a>
      </div>
    </div>
  );
}
