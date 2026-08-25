import { cn } from "@/lib/utils";
import BorderGlow from "@/components/ui/border-glow";

type Variant = "deep" | "mid" | "frost";
type Chroma = "a" | "b" | "c" | "d" | "e";

const GLOW: Record<Chroma, { glowColor: string; colors: string[] }> = {
  a: { glowColor: "222 92 70", colors: ["#7EB0FF", "#4D8AFF", "#243CFF"] },
  b: { glowColor: "328 88 68", colors: ["#FF4D9A", "#F472B6", "#C084FC"] },
  c: { glowColor: "78 92 62", colors: ["#B8FF36", "#8FA8FF", "#7DD3FC"] },
  d: { glowColor: "268 78 70", colors: ["#C4B5FD", "#A78BFA", "#7C3AED"] },
  e: { glowColor: "32 94 62", colors: ["#FFD36A", "#FF9F1A", "#FF7A00"] },
};

function Layers() {
  return (
    <>
      <span className="lg-fill" />
      <span className="lg-iridescent" />
      <span className="lg-volume" />
      <span className="lg-fresnel" />
      <span className="lg-spec" />
      <span className="lg-caustic" />
      <span className="lg-noise" />
    </>
  );
}

export function PageGlass({
  variant = "deep",
  chroma = "a",
  radius = 24,
  glow = true,
  ghost = true,
  className,
  bodyClassName,
  children,
}: {
  variant?: Variant;
  chroma?: Chroma;
  radius?: number;
  glow?: boolean;
  ghost?: boolean;
  className?: string;
  bodyClassName?: string;
  children?: React.ReactNode;
}) {
  const inner = (
    <div
      className={cn(
        "lg-blob page-glass",
        `lg-${variant}`,
        `lg-chroma-${chroma}`,
        !glow && className,
      )}
      style={{ borderRadius: radius }}
    >
      <span className="lg-clip">
        <Layers />
      </span>
      <div className={cn("page-glass-body", bodyClassName)}>{children}</div>
      <span className="lg-rim" />
    </div>
  );

  if (!glow) return inner;

  const g = GLOW[chroma];
  return (
    <BorderGlow
      className={cn("h-full w-full", className)}
      borderRadius={radius}
      glowRadius={40}
      glowIntensity={1.2}
      edgeSensitivity={43}
      coneSpread={25}
      fillOpacity={0}
      ghost={ghost}
      backgroundColor="transparent"
      {...g}
    >
      {inner}
    </BorderGlow>
  );
}
