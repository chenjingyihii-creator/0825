import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import "./masonry.css";

export type MasonryItem = {
  id: string;
  img: string;
  url?: string;
  height: number;
  width?: number;
};

type AnimateFrom = "top" | "bottom" | "left" | "right" | "center" | "random";

type MasonryProps = {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: AnimateFrom;
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  className?: string;
};

function useMedia(queries: string[], values: number[], defaultValue: number) {
  const get = () => {
    if (typeof window === "undefined") return defaultValue;
    const i = queries.findIndex((q) => matchMedia(q).matches);
    return i === -1 ? defaultValue : values[i];
  };
  const [value, setValue] = useState(get);
  useEffect(() => {
    const handler = () => setValue(get());
    const mqls = queries.map((q) => matchMedia(q));
    mqls.forEach((m) => m.addEventListener("change", handler));
    return () => mqls.forEach((m) => m.removeEventListener("change", handler));
  }, [queries]);
  return value;
}

function useMeasure() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [ref, size] as const;
}

async function preloadImages(urls: string[]) {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        }),
    ),
  );
}

export default function Masonry({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  className,
}: MasonryProps) {
  const columns = useMedia(
    ["(min-width:1500px)", "(min-width:1000px)", "(min-width:600px)"],
    [4, 3, 2],
    1,
  );
  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const hasMounted = useRef(false);

  const getInitialPosition = (item: { x: number; y: number; w: number; h: number }) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };
    let direction: AnimateFrom = animateFrom;
    if (animateFrom === "random") {
      const dirs: AnimateFrom[] = ["top", "bottom", "left", "right"];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }
    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    hasMounted.current = false;
    setImagesReady(false);
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const { grid, totalHeight } = useMemo(() => {
    if (!width) return { grid: [] as Array<MasonryItem & { x: number; y: number; w: number; h: number }>, totalHeight: 0 };
    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;
    const pad = 12;
    const gridItems = items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const inner = Math.max(columnWidth - pad, 1);
      const h = child.width
        ? (child.height / child.width) * inner + pad
        : child.height / 2;
      const y = colHeights[col];
      colHeights[col] += h;
      return { ...child, x, y, w: columnWidth, h };
    });
    return { grid: gridItems, totalHeight: Math.max(0, ...colHeights) };
  }, [columns, items, width]);

  useLayoutEffect(() => {
    if (!imagesReady) return;
    grid.forEach((item, index) => {
      const selector = `[data-key="${CSS.escape(item.id)}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      };
      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: initialPos.x,
            y: initialPos.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus ? { filter: "blur(10px)" } : {}),
          },
          {
            opacity: 1,
            ...animationProps,
            ...(blurToFocus ? { filter: "blur(0px)" } : {}),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          },
        );
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });
    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (item: MasonryItem) => {
    if (!scaleOnHover) return;
    gsap.to(`[data-key="${CSS.escape(item.id)}"]`, {
      scale: hoverScale,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const handleMouseLeave = (item: MasonryItem) => {
    if (!scaleOnHover) return;
    gsap.to(`[data-key="${CSS.escape(item.id)}"]`, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      className={className ? `rb-masonry ${className}` : "rb-masonry"}
      style={{ height: totalHeight || undefined }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="rb-masonry-item"
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
        >
          <div className="item-img" style={{ backgroundImage: `url(${item.img})` }}>
            {colorShiftOnHover ? (
              <div
                className="color-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))",
                  opacity: 0,
                  pointerEvents: "none",
                  borderRadius: 8,
                }}
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
