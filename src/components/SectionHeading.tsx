import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  invert?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
            align === "center" && "justify-center",
            invert ? "text-gold" : "text-primary",
          )}
        >
          <span className={cn("h-px w-6", invert ? "bg-gold/60" : "bg-primary/50")} />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-serif text-3xl leading-tight sm:text-4xl",
          invert ? "text-deep-foreground" : "text-deep",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed", invert ? "text-deep-foreground/75" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  );
}
