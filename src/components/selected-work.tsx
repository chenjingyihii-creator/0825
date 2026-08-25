import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { getProject, selectedFive } from "@/lib/data/content";
import { useSelection } from "@/lib/selection";
import BorderGlow from "@/components/ui/border-glow";

export function SelectedWork() {
  const { slug, setSlug } = useSelection();
  const active = selectedFive.find((x) => x.slug === slug) ?? selectedFive[0];
  const idx = selectedFive.findIndex((x) => x.slug === active.slug);

  return (
    <section id="work" className="relative scroll-mt-24 overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      <div className="section-glow left-[-6%] top-[20%] h-[40vh] w-[40vh] bg-primary/[0.08]" />
      <div className="section-glow right-[-8%] bottom-[10%] h-[34vh] w-[34vh] bg-violet/[0.07]" />
      <div className="shell relative">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-accent uppercase">
              02 / 06 · Selected work
            </p>
            <h2 className="mt-3 max-w-3xl text-[clamp(1.8rem,4.2vw,3.4rem)] leading-[1.15] font-medium tracking-tight">
              从档案中，
              <br />
              抽出五个
              <span style={{ color: active.accent }}>代表作</span>。
            </h2>
          </div>
          <p className="hidden max-w-[200px] text-right text-[11px] leading-5 text-muted lg:block">
            悬停切换 · 点击打开对应商业档案
          </p>
        </div>

        <div className="flex h-[min(58vh,560px)] gap-2.5">
          {selectedFive.map((item) => {
            const on = item.slug === active.slug;
            const p = getProject(item.slug);
            return on ? (
              <BorderGlow
                key={item.slug}
                className="min-w-0 flex-[1.2]"
                borderRadius={28}
                glowRadius={42}
                glowIntensity={1.35}
                fillOpacity={0}
                colors={[item.accent, "#8FA8FF", "#C084FC"]}
              >
                <article
                  className="relative flex h-full min-w-0 overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0d14]"
                  style={{
                    boxShadow: `inset 0 1px 0 rgba(255,255,255,.1), 0 0 0 1px ${item.accent}22, 0 18px 40px -24px ${item.accent}55`,
                  }}
                >
                  <span className="sw-cap" aria-hidden>
                    <span className="sw-cap-end is-left" style={{ background: item.accent }} />
                    <span className="sw-cap-bar" style={{ background: item.accent }} />
                    <span className="sw-cap-end is-right" style={{ background: item.accent }} />
                  </span>
                  <span className="pointer-events-none absolute inset-0 z-[1] rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,.06),transparent_28%)]" />
                  <div className="relative z-[2] flex w-[38%] shrink-0 flex-col justify-between p-7 lg:p-8">
                    <div>
                      <p className="text-[11px] tracking-[0.2em] text-white/40">
                        {item.no} / {item.kicker}
                      </p>
                      <h3
                        className="mt-5 text-[clamp(1.8rem,3vw,3.25rem)] leading-none font-medium tracking-tight"
                        style={{ color: item.accent }}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/55">
                        {p?.summary}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {item.meta.map((m) => (
                          <span
                            key={m}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] tracking-[0.14em] text-white/55 backdrop-blur-md"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      to="/work/$slug"
                      params={{ slug: item.slug }}
                      className="archive-btn"
                      style={
                        {
                          "--btn-accent": item.accent,
                          "--btn-ink": item.accent === "#bfff32" ? "#142000" : "#f6f8ff",
                        } as CSSProperties
                      }
                    >
                      <ArrowUpRight className="archive-btn-ico" strokeWidth={2.2} />
                      打开对应档案
                    </Link>
                  </div>

                  <div className="relative z-[2] min-w-0 flex-1 overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                      }}
                    />
                    <CoverStack item={item} />
                    <p className="absolute bottom-4 left-5 z-[6] text-[10px] tracking-[0.22em] text-white/30">
                      Visual archive · 2026
                    </p>
                  </div>
                </article>
              </BorderGlow>
            ) : (
              <button
                key={item.slug}
                type="button"
                onMouseEnter={() => setSlug(item.slug)}
                onFocus={() => setSlug(item.slug)}
                onClick={() => setSlug(item.slug)}
                className="relative flex w-[54px] shrink-0 flex-col items-center rounded-[28px] border border-white/8 bg-[#0b0d14]/80 py-4 backdrop-blur-xl transition-[box-shadow,border-color] hover:border-white/20"
                style={{
                  boxShadow: `inset 0 1.5px 0 ${item.accent}`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = `inset 0 1.5px 0 ${item.accent}, 0 0 0 1px ${item.accent}55, 0 0 22px ${item.accent}44`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = `inset 0 1.5px 0 ${item.accent}`;
                }}
              >
                <span
                  className="text-[11px] font-medium tracking-widest"
                  style={{ color: item.accent }}
                >
                  {item.no}
                </span>
                <span className="mt-6 flex-1 text-[11px] tracking-[0.28em] text-white/70 [writing-mode:vertical-rl]">
                  {item.tab}
                </span>
                <span className="mt-6 text-[9px] tracking-[0.2em] text-white/35 [writing-mode:vertical-rl]">
                  {item.lane}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between text-[11px] tracking-[0.18em] text-white/35 uppercase">
          <span>
            Active file · {active.no} — {active.title}
          </span>
          <span>
            {String(idx + 1).padStart(2, "0")} / {String(selectedFive.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

function CoverStack({
  item,
}: {
  item: (typeof selectedFive)[number];
}) {
  const covers = item.covers.filter(Boolean);
  const layout =
    "coverLayout" in item && item.coverLayout
      ? item.coverLayout
      : covers.length >= 5
        ? "fan5"
        : covers.length >= 3
          ? "fan3"
          : "single";
  const shown =
    layout === "fan5"
      ? covers.slice(0, 5)
      : layout === "fan4"
        ? covers.slice(0, 4)
        : layout === "fan3"
          ? covers.slice(0, 3)
          : covers;
  if (shown.length >= 3) {
    return (
      <div
        className={`cover-collage is-${layout}`}
        aria-hidden
      >
        <span
          className="cover-plate"
          style={
            layout === "fan5"
              ? {
                  background: item.accent,
                  opacity: 0.42,
                  left: "4%",
                  top: "56%",
                  width: "32%",
                  height: "36%",
                  transform: "rotate(-18deg)",
                }
              : layout === "fan4"
                ? { display: "none" }
              : layout === "fan3"
                ? {
                    background: item.accent,
                    opacity: 0.3,
                    left: "26%",
                    top: "44%",
                    width: "28%",
                    height: "34%",
                    transform: "rotate(-13deg)",
                  }
                : {
                    background: item.accent,
                    opacity: 0.22,
                    transform: "translate(-8%, 6%) rotate(-12deg)",
                  }
          }
        />
        <span
          className="cover-plate"
          style={
            layout === "fan5"
              ? {
                  background: item.accent,
                  opacity: 0.36,
                  left: "62%",
                  top: "46%",
                  width: "32%",
                  height: "38%",
                  transform: "rotate(16deg)",
                }
              : layout === "fan4"
                ? { display: "none" }
              : layout === "fan3"
                ? {
                    background: item.accent,
                    opacity: 0.1,
                    left: "56%",
                    top: "42%",
                    width: "28%",
                    height: "38%",
                    transform: "rotate(16deg)",
                  }
                : {
                    background: item.accent,
                    opacity: 0.32,
                    transform: "translate(14%, 4%) rotate(11deg)",
                  }
          }
        />
        {layout === "fan3" ? (
          <span
            className="cover-plate"
            style={{
              background: item.accent,
              opacity: 0.3,
              left: "18%",
              top: "4%",
              width: "32%",
              height: "30%",
              transform: "rotate(-11deg)",
            }}
          />
        ) : null}
        {layout === "fan4" ? (
          <>
            <span
              className="cover-plate"
              style={{
                background: item.accent,
                opacity: 0.1,
                left: "20%",
                top: "calc(4% - 34px)",
                width: "33%",
                height: "86%",
                zIndex: 0,
                transform: "rotate(-16deg)",
              }}
            />
            <span
              className="cover-plate"
              style={{
                background: item.accent,
                opacity: 0.2,
                left: "50%",
                top: "calc(2% - 34px)",
                width: "33%",
                height: "86%",
                zIndex: 0,
                transform: "rotate(11deg)",
              }}
            />
          </>
        ) : null}
        {shown.map((src, i) => (
          <figure key={src} className={`cover-piece cover-piece-${i}`}>
            <img src={src} alt="" decoding="async" />
          </figure>
        ))}
      </div>
    );
  }

  const src = covers[0];
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div
        aria-hidden
        className="absolute rounded-[22px]"
        style={{
          width: "58%",
          height: "62%",
          transform: "translate(-42px, 10px) rotate(-10deg)",
          background: item.accent,
          opacity: 0.22,
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        className="absolute rounded-[22px]"
        style={{
          width: "54%",
          height: "58%",
          transform: "translate(46px, 8px) rotate(10deg)",
          background: item.accent,
          opacity: 0.38,
          zIndex: 1,
        }}
      />
      <div
        className="absolute z-[2] overflow-hidden rounded-[22px] border border-white/10 bg-[#10131c] shadow-[0_28px_60px_-24px_rgba(0,0,0,.75)]"
        style={{ width: "78%", height: "82%" }}
      >
        {src ? (
          <img src={src} alt="" className="absolute inset-0 size-full object-cover" decoding="async" />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
        <p
          className="absolute bottom-8 left-7 text-[clamp(1.6rem,2.4vw,2.6rem)] leading-none font-medium tracking-tight"
          style={{ color: item.accent }}
        >
          {item.word}
        </p>
      </div>
    </div>
  );
}