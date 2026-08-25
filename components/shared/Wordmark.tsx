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
      className={`flex items-center gap-3 ${className}`.trim()}
      aria-label={site.name}
    >
      <Image
        src={site.logo}
        alt=""
        width={48}
        height={48}
        priority={priority}
        className="h-11 w-11 object-contain"
      />
      <span className="font-display text-2xl font-semibold tracking-[0.2em] uppercase">
        {site.wordmark.primary}
        <span className="text-accent">{site.wordmark.accent}</span>
      </span>
    </Link>
  );
}
