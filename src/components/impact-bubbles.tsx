import { useEffect, useRef, type CSSProperties } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const ROT_SETS = [
  [-8, 6, -5, 7, -6, 5, 4],
  [7, -8, 5, -4, 8, -6, 5],
  [-5, 8, -6, 4, 7, -5, 6],
  [6, -4, 8, -7, 5, -8, 4],
  [-7, 5, 8, -6, 4, 7, -5],
];

export function ImpactBubbles({
  tags,
  layout = "cluster",
  scatter = 0,
}: {
  tags: string[];
  layout?: "cluster" | "many" | "row";
  scatter?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const rots = ROT_SETS[scatter % ROT_SETS.length];

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const card = wrap.closest(".group, .impact-glass, .border-glow-card") as HTMLElement | null;
    const pills = pillsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!card || !pills.length) return;

    gsap.set(pills, { scale: 1, transformOrigin: "50% 50%" });

    const enter = () => {
      gsap.killTweensOf(pills);
      gsap.fromTo(
        pills,
        { scale: 0.55, autoAlpha: 0.35 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.5,
          ease: "back.out(1.5)",
          stagger: 0.08,
        },
      );
    };
    const leave = () => {
      gsap.killTweensOf(pills);
      gsap.to(pills, { scale: 1, autoAlpha: 1, duration: 0.22, ease: "power3.out" });
    };

    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);
    return () => {
      card.removeEventListener("mouseenter", enter);
      card.removeEventListener("mouseleave", leave);
    };
  }, [tags]);

  return (
    <div
      ref={wrapRef}
      className={cn(
        "impact-tags",
        layout === "cluster" && "is-cluster",
        layout === "many" && "is-many-cluster",
        layout === "row" && "is-row",
        `scatter-${scatter % 5}`,
      )}
    >
      {tags.map((tag, i) => (
        <span
          key={tag}
          className="chip-col"
          style={{ ["--item-rot" as string]: `${rots[i] ?? 0}deg` }}
        >
          <span
            ref={(el) => {
              pillsRef.current[i] = el;
            }}
            className={`glass-chip chip-${(i % 7) + 1}`}
            style={{ ["--hover-bg" as string]: "rgba(255,255,255,0.08)" } as CSSProperties}
          >
            {tag}
          </span>
        </span>
      ))}
    </div>
  );
}
