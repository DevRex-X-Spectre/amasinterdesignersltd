import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover",
  white:
    "bg-white text-background hover:bg-muted",
  outline:
    "bg-transparent border border-border text-white hover:border-white",
} as const;

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `btn-shine inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-all duration-300 hover:tracking-wide ${variants[variant]} ${className}`.trim();

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
