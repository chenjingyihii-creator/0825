import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { categories, getProject, projects, type GallerySet, type ShotKind } from "@/lib/data/content";

export const Route = createFileRoute("/work/$slug")({
  component: WorkDetail,
});

function WorkDetail() {
  const { slug } = Route.useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="grid min-h-screen place-items-center px-6 pt-24">
        <div className="text-center">
          <p className="text-sm text-muted">未找到该项目</p>
          <Link to="/" className="mt-4 inline-block text-accent underline">
            返回首页
          </Link>
        </div>
      </main>
    );
  }

  const cat = categories.find((c) => c.id === project.category);
  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="page-in pt-20 pb-24 lg:pt-24">
      <article className="shell">
        <Link
          to="/"
          hash="work"
          preload="intent"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          返回作品
        </Link>

        <p className="mt-8 text-[11px] tracking-[0.28em] text-accent uppercase">
          {cat?.en} · {project.year}
        </p>
        <h1 className="mt-2 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-2 font-display text-xl text-primary italic">{project.en}</p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <dt className="text-[11px] tracking-widest text-muted uppercase">Client</dt>
            <dd className="mt-1 font-semibold">{project.client}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <dt className="text-[11px] tracking-widest text-muted uppercase">Role</dt>
            <dd className="mt-1 font-semibold">{project.role}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <dt className="text-[11px] tracking-widest text-muted uppercase">Outcome</dt>
            <dd className="mt-1 font-semibold">{project.outcome ?? "完整视觉交付"}</dd>
          </div>
        </dl>

        <section className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/15 to-transparent p-6 sm:p-8">
          <p className="text-[11px] tracking-[0.28em] text-accent uppercase">Recap / 复盘</p>
          <h2 className="mt-2 text-2xl font-black">项目推进与复盘</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/85">
            {project.recap}
          </p>
        </section>

        {project.pinLayout ? (
          project.seriesLayout && project.sets?.length ? (
            <WorkSeries sets={project.sets} />
          ) : project.layoutRows?.length ? (
            <WorkRows images={project.gallery} rows={project.layoutRows} />
          ) : (
            <Pinterest
              shots={
                project.sets?.length
                  ? uniqueShots(project.sets.flatMap((s) => s.shots))
                  : (project.gallery.length ? project.gallery : [project.cover])
                      .filter((src): src is string => Boolean(src))
                      .filter((src, i, arr) => arr.indexOf(src) === i)
                      .map((src) => ({ src, kind: "portrait" as ShotKind }))
              }
            />
          )
        ) : (
          <div className="work-pages">
            {(project.gallery.length ? project.gallery : [project.cover])
              .filter((src): src is string => Boolean(src))
              .filter((src, i, arr) => arr.indexOf(src) === i)
              .map((src) => (
                <figure key={src}>
                  <img src={src} alt="" loading="lazy" decoding="async" />
                </figure>
              ))}
          </div>
        )}

        {project.videos && project.videos.length > 0 ? (
          <WorkVideos items={project.videos} />
        ) : null}

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-lg font-bold">同文件夹其他项目</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-card"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-primary/20">
                    {p.cover ? (
                      <img
                        src={p.cover}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between p-3">
                    <span className="truncate text-sm font-semibold">{p.title}</span>
                    <ArrowUpRight className="size-4 shrink-0 text-accent" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}

function WorkSeries({ sets }: { sets: GallerySet[] }) {
  return (
    <div className="work-series-list">
      {sets.map((set) => {
        const images = set.shots.map((s) => s.src);
        const rows = set.rows ?? [images.length];
        return (
          <section key={set.title} className="work-series">
            <header className="work-series-head">
              <span className="work-series-label">
                {set.kicker ? <em>{set.kicker}</em> : null}
                {set.title}
              </span>
              <span className="work-series-rule" aria-hidden />
            </header>
            {set.blurb ? <p className="work-series-blurb">{set.blurb}</p> : null}
            <WorkRows images={images} rows={rows} fit={set.fit} />
          </section>
        );
      })}
    </div>
  );
}

function WorkRows({
  images,
  rows,
  fit,
}: {
  images: string[];
  rows: number[];
  fit?: boolean;
}) {
  const chunks: string[][] = [];
  let i = 0;
  for (const n of rows) {
    chunks.push(images.slice(i, i + n));
    i += n;
  }
  if (i < images.length) chunks.push(images.slice(i));
  return (
    <div className="work-rows">
      {chunks.map((row, ri) => (
        <div
          key={ri}
          className={fit && ri === 0 ? "work-row is-fit" : "work-row"}
          style={{ "--row-n": row.length } as CSSProperties}
        >
          {row.map((src) => (
            <figure key={src}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}

function uniqueShots(shots: { src: string; kind: ShotKind }[]) {
  const seen = new Set<string>();
  return shots.filter((s) => {
    if (seen.has(s.src)) return false;
    seen.add(s.src);
    return true;
  });
}

function Pinterest({ shots }: { shots: { src: string; kind: ShotKind }[] }) {
  if (!shots.length) return null;
  const n = shots.length;
  const cols = n >= 9 ? 4 : n >= 3 ? 3 : 2;
  return (
    <div className={`work-pin is-${cols}`}>
      {shots.map((s) => (
        <figure key={s.src}>
          <img src={s.src} alt="" loading="lazy" decoding="async" />
        </figure>
      ))}
    </div>
  );
}

function WorkVideos({
  items,
}: {
  items: { src: string; poster: string; title?: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    if (!active) return;
    const el = refs.current[active];
    if (!el) return;
    el.play().catch(() => {});
    return () => {
      el.pause();
      el.removeAttribute("src");
      el.load();
    };
  }, [active]);

  function play(src: string) {
    Object.entries(refs.current).forEach(([key, el]) => {
      if (key !== src && el) {
        el.pause();
        el.removeAttribute("src");
        el.load();
      }
    });
    setActive(src);
  }

  return (
    <section className="mt-14">
      <p className="text-[11px] tracking-[0.28em] text-accent uppercase">
        Motion / 视频创意
      </p>
      <h2 className="mt-2 text-2xl font-medium tracking-tight">
        点击播放 · 同时只播一条 · 未点开不加载成片
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((v) => {
          const on = active === v.src;
          return (
            <figure key={v.src} className="work-video">
              {on ? (
                <video
                  ref={(el) => {
                    refs.current[v.src] = el;
                  }}
                  src={v.src}
                  poster={v.poster}
                  controls
                  playsInline
                  preload="none"
                  onEnded={() => setActive(null)}
                  onPlay={() => play(v.src)}
                />
              ) : (
                <button type="button" className="work-video-poster" onClick={() => play(v.src)}>
                  <img src={v.poster} alt={v.title ?? ""} loading="lazy" decoding="async" />
                  <span className="work-video-play">
                    <Play className="size-5 fill-current" />
                  </span>
                </button>
              )}
              {v.title ? <figcaption>{v.title}</figcaption> : null}
            </figure>
          );
        })}
      </div>
    </section>
  );
}
