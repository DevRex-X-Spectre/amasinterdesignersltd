import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type WordmarkProps = {
  className?: string;
  href?: string;
  priority?: boolean;
};

export function Wordmark({
  className = "",
  href = "/",
  priority = false,
}: WordmarkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 sm:gap-4 ${className}`.trim()}
      aria-label={site.name}
    >
      <Image
        src={site.logo}
        alt=""
        width={86}
        height={86}
        priority={priority}
        className="h-12 w-12 rounded-full object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
      />

      <div className="inline-grid w-max max-w-full leading-none">
        <span className="min-w-0 font-display text-[1.9rem] font-black tracking-[0.08em] text-white uppercase sm:text-[2.5rem] md:text-[3rem]">
          {site.wordmark.primary}
        </span>

        <div className="mt-1 grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 text-[0.32rem] font-semibold tracking-[0.12em] text-white uppercase sm:text-[0.38rem] md:text-[0.48rem]">
          <span className="h-px w-full bg-accent" />
          <span className="whitespace-nowrap text-accent">{site.wordmark.accent}</span>
          <span className="h-px w-full bg-accent" />
        </div>
      </div>
    </Link>
  );
}
