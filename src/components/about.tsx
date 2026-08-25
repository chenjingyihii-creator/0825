import { useState } from "react";
import { bio, profile, roles, timeline } from "@/lib/data/content";
import { cn } from "@/lib/utils";

const ROLE_HOVER = [
  "role-hover-blue",
  "role-hover-purple",
  "role-hover-pink",
  "role-hover-lime",
] as const;

const ROLE_ICONS = [
  { chroma: "blue", src: "/icons/role-visual.png", alt: "视觉设计" },
  { chroma: "purple", src: "/icons/role-motion.png", alt: "视频创意" },
  { chroma: "pink", src: "/icons/role-draw.png", alt: "插画" },
  { chroma: "lime", src: "/icons/role-lead.png", alt: "项目管理" },
] as const;

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div className="section-glow left-[-8%] top-[10%] h-[42vh] w-[42vh] bg-primary/[0.10]" />
      <div className="section-glow right-[-6%] bottom-[8%] h-[36vh] w-[36vh] bg-violet/[0.08]" />
      <div className="shell relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(280px,360px)_minmax(0,1fr)] lg:gap-12">
          <div className="portrait-card">
            <span className="portrait-strap" aria-hidden />
            <span className="portrait-strap-edge" aria-hidden />
            <span className="portrait-clip" aria-hidden>
              <span className="portrait-hole" />
            </span>
            <div className="portrait-shell">
              <span className="portrait-fill" aria-hidden />
              <span className="portrait-sheen" aria-hidden />
              <span className="portrait-card-hole" aria-hidden />
              <div className="portrait-photo">
                <span className="portrait-photo-fog" aria-hidden />
                <img
                  src={profile.portrait}
                  alt={profile.name}
                />
                <span className="portrait-photo-glare" aria-hidden />
              </div>
              <div className="portrait-meta">
                <p className="portrait-role">Visual Designer</p>
                <div className="portrait-name-row">
                  <h2 className="portrait-name">{profile.name}</h2>
                  <span className="portrait-yrs">{profile.years} YRS</span>
                </div>
                <p className="portrait-place">
                  {profile.city} · {profile.company}
                </p>
                <p className="portrait-headline">{profile.headline}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[12px] tracking-[0.28em] text-accent uppercase">
              03 / 06 · Hello, this is my visual record.
            </p>
            <h2 className="mt-4 text-[clamp(2.1rem,4.3vw,3.75rem)] leading-[1.18] font-medium tracking-tight">
              Hi，我是陈静怡。
            </h2>
            <p
              className="mt-3 text-[clamp(1.45rem,2.35vw,2.2rem)] leading-[1.28] font-medium tracking-tight"
              style={{ whiteSpace: "nowrap", textWrap: "nowrap" }}
            >
              视觉为核心，向视频、<span className="text-accent">AI</span> 与项目统筹延展。
            </p>
            <p className="mt-6 text-lg leading-8 text-foreground/88">{bio.lead}</p>
            <p className="mt-3 text-base leading-8 text-muted">{bio.body}</p>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {roles.map((r, i) => (
                  <article
                    key={r.id}
                    className={cn("role-card", ROLE_HOVER[i])}
                  >
                    <span className="role-card-fill" aria-hidden />
                    <span className="role-card-sheen" aria-hidden />
                    <p className="role-card-en">{r.en}</p>
                    <div className={cn("role-icon", `is-${ROLE_ICONS[i].chroma}`)} aria-hidden>
                      <img src={ROLE_ICONS[i].src} alt="" />
                    </div>
                    <div className="role-band">
                      <p className="role-band-title">{r.label}</p>
                      <p className="role-band-hint">{r.hint}</p>
                    </div>
                  </article>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {bio.core.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm text-foreground/80 backdrop-blur-md"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <CareerFlow />
      </div>
    </section>
  );
}

function CareerFlow() {
  const [active, setActive] = useState(0);
  const cur = timeline[active];

  return (
    <div id="process" className="mt-16 scroll-mt-24 lg:mt-20">
      <p className="mb-10 text-center text-[12px] tracking-[0.28em] text-muted uppercase">
        Career path
      </p>

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid grid-cols-2 gap-x-4 sm:grid-cols-4">
          {timeline.map((t) => (
            <p
              key={t.node}
              className="mb-3 text-center font-mono text-[11px] tracking-[0.28em] text-white/30"
            >
              {t.node}
            </p>
          ))}
        </div>

        <div className="career-rail">
          <span className="career-line" aria-hidden />
          <div className="grid grid-cols-2 gap-x-4 sm:grid-cols-4">
            {timeline.map((t, i) => (
              <button
                key={t.period}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="relative z-[1] flex h-8 items-center justify-center overflow-visible"
              >
                <span className={cn("career-dot", i === active && "is-on")} />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
          {timeline.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.org}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="flex flex-col items-center text-center"
              >
                <p
                  className={cn(
                    "whitespace-nowrap text-[1.05rem] font-semibold tracking-tight transition-colors",
                    on ? "text-accent" : "text-white/80",
                  )}
                >
                  {t.org}
                </p>
                <p className="mt-1 font-mono text-[11px] tracking-widest text-white/35">
                  {t.period}
                </p>
                <span className="career-job mt-2.5">{t.title}</span>
              </button>
            );
          })}
        </div>

        <div className="career-card mt-10">
          <div className="flex min-w-[240px] shrink-0 flex-col justify-center lg:w-[300px]">
            <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
              Active node / {cur.node}
            </p>
            <p className="mt-2 whitespace-nowrap text-[clamp(1.5rem,2.2vw,2.1rem)] leading-none font-medium tracking-tight">
              {cur.org}
            </p>
            <p className="mt-2 text-sm text-white/45">{cur.title}</p>
          </div>
          <p className="max-w-[520px] flex-1 text-[15px] leading-7 text-white/60">
            {cur.summary}
          </p>
          <div className="flex h-fit flex-nowrap items-center gap-2 self-start">
            {cur.tags.map((tag) => (
              <span key={tag} className="career-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
