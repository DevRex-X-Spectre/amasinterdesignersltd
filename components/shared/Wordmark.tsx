import Link from "next/link";
import { site } from "@/data/site";

type WordmarkProps = {
  className?: string;
  href?: string;
};

export function Wordmark({ className = "", href = "/" }: WordmarkProps) {
  return (
    <Link
      href={href}
      className={`font-display flex items-center gap-2 text-2xl font-semibold tracking-[0.2em] uppercase ${className}`.trim()}
    >
      {site.wordmark.primary}
      <span className="text-accent">{site.wordmark.accent}</span>
    </Link>
  );
}
