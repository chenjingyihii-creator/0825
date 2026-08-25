import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/data/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [ink, setInk] = useState({ x: 0, w: 0 });
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) setActive(vis.target.id);
      },
      { rootMargin: "-38% 0px -50% 0px", threshold: [0.08, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [pathname]);

  useEffect(() => {
    const idx = nav.findIndex((n) => n.id === active);
    const el = idx >= 0 ? itemRefs.current[idx] : null;
    const parent = navRef.current;
    if (!el || !parent) {
      setInk({ x: 0, w: 0 });
      return;
    }
    const pr = parent.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    setInk({ x: r.left - pr.left, w: r.width });
  }, [active, open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center pt-4">
      <div
        className={cn(
          "nav-12 pointer-events-auto",
          scrolled && "is-scrolled",
          open && "is-open",
        )}
      >
        <div className="flex items-center gap-1">
          <Link
            to="/"
            className="mr-1 grid size-8 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-semibold tracking-wide text-white"
          >
            CJ
          </Link>

          <nav ref={navRef} className="relative hidden items-center md:flex">
            <span className="nav-12-ink" style={{ transform: `translateX(${ink.x}px)`, width: ink.w }} />
            {nav.map((item, i) => {
              const href = pathname === "/" ? `#${item.id}` : `/#${item.id}`;
              const on = active === item.id;
              return (
                <a
                  key={item.id}
                  ref={(node) => {
                    itemRefs.current[i] = node;
                  }}
                  href={href}
                  className={cn("nav-12-item", on && "is-on")}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="grid size-8 place-items-center rounded-full text-white/70 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="菜单"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {open ? (
          <div className="mt-2 flex flex-col gap-1 pb-1 md:hidden">
            {nav.map((item) => {
              const href = pathname === "/" ? `#${item.id}` : `/#${item.id}`;
              const on = active === item.id;
              return (
                <a
                  key={item.id}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn("nav-12-item w-full justify-start", on && "is-on")}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </header>
  );
}
