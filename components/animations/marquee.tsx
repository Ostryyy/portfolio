import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  reverse?: boolean;
  className?: string;
};

export function TechMarquee({ items, reverse, className }: Props) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-card",
        "before:pointer-events-none before:absolute before:inset-0 before:z-10 before:bg-[linear-gradient(to_right,hsl(var(--background))_0%,transparent_12%,transparent_88%,hsl(var(--background))_100%)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-[200%] gap-3 py-5 will-change-transform",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "hover:[animation-play-state:paused]"
        )}
      >
        {doubled.map((t, i) => (
          <Badge
            key={`${t}-${i}`}
            variant="secondary"
            className="px-4 py-2 text-sm"
          >
            {t}
          </Badge>
        ))}
      </div>
    </div>
  );
}
