type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`${alignment} ${className}`.trim()}>
      {eyebrow ? (
        <span className="mb-2 block text-sm font-medium tracking-widest text-accent uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 max-w-2xl text-base font-light text-muted ${align === "center" ? "mx-auto" : ""}`.trim()}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
