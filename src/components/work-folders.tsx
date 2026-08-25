import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { categories, projectsIn, type CategoryId, type Project } from "@/lib/data/content";
import { cn } from "@/lib/utils";

export function WorkFolders() {
  const [active, setActive] = useState<CategoryId>("brand");
  const list = useMemo(() => projectsIn(active), [active]);
  const [current, setCurrent] = useState<string>(list[0]?.slug ?? "");

  const cat = categories.find((c) => c.id === active)!;
  const project: Project | undefined =
    list.find((p) => p.slug === current) ?? list[0];

  function selectCat(id: CategoryId) {
    setActive(id);
    const next = projectsIn(id);
    setCurrent(next[0]?.slug ?? "");
  }

  return (
    <section id="archive" className="scroll-mt-24 py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-accent uppercase">
              04 / 06 · Archive
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight lg:text-5xl">
              按真实业务能力收纳
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
              悬停文件夹与项目看大图预览，其余类别折叠成标签。详情页放完整版面与复盘。
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-1 overflow-x-auto pt-4 pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories
            .filter((c) => projectsIn(c.id).length > 0)
            .map((c) => {
            const on = c.id === active;
            return (
              <button
                key={c.id}
                type="button"
                onMouseEnter={() => selectCat(c.id)}
                onFocus={() => selectCat(c.id)}
                onClick={() => selectCat(c.id)}
                className={cn(
                  "folder-tab relative w-[128px] shrink-0 px-3 pb-2.5 pt-3.5 text-left transition-[transform,opacity] sm:w-[152px]",
                  on
                    ? "is-on z-10 -mb-px translate-y-0 bg-card"
                    : "translate-y-2 opacity-70 hover:opacity-100",
                )}
                style={{ ["--tab-tint" as string]: c.tint }}
              >
                <span className="folder-tab-cap" aria-hidden>
                  <span className="folder-tab-cap-end is-left" />
                  <span className="folder-tab-cap-bar" />
                  <span className="folder-tab-cap-end is-right" />
                </span>
                <span className="block text-[10px] tracking-widest text-muted">
                  {c.no} / {c.en}
                </span>
                <span className="mt-0.5 block truncate text-[13px] font-semibold leading-tight">
                  {c.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="folder-panel relative p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="max-w-2xl text-sm text-muted">{cat.blurb}</p>
            <span className="text-xs text-muted">{list.length} 个项目</span>
          </div>

          {project && (
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="group relative block h-[min(62vh,620px)] min-h-[520px] overflow-hidden rounded-2xl bg-black"
              >
                {project.previews && project.previews.length >= 2 ? (
                  <div
                    className={cn(
                      "folder-mosaic",
                      (project.previewLayout === "pair" ||
                        (!project.previewLayout && project.previews.length === 2)) &&
                        "is-pair",
                      project.previewLayout === "equal" && "is-equal",
                      project.previewLayout === "quad" && "is-quad",
                      project.previewLayout === "duo" && "is-duo",
                      project.previewLayout === "twin" && "is-twin",
                      project.previewLayout === "landport" && "is-landport",
                    )}
                  >
                    {project.previews
                      .slice(
                        0,
                        project.previewLayout === "quad" ||
                          project.previewLayout === "twin"
                          ? 4
                          : project.previewLayout === "duo" ||
                              project.previewLayout === "landport"
                            ? 2
                            : 3,
                      )
                      .map((src, i) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className={
                          i === 0 &&
                          project.previews!.length > 2 &&
                          project.previewLayout !== "equal" &&
                          project.previewLayout !== "quad" &&
                          project.previewLayout !== "duo" &&
                          project.previewLayout !== "twin" &&
                          project.previewLayout !== "landport"
                            ? "folder-mosaic-main"
                            : undefined
                        }
                      />
                    ))}
                  </div>
                ) : project.cover ? (
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "absolute inset-0 size-full",
                      project.previewLayout === "frame"
                        ? "object-contain"
                        : "object-cover transition-transform duration-700 group-hover:scale-[1.03]",
                    )}
                  />
                ) : (
                  <BrandCover tags={project.tags} />
                )}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black to-transparent",
                    project.previewLayout === "quad"
                      ? "via-black/30 from-black/85"
                      : "via-black/20",
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-x-0 bottom-0",
                    project.previewLayout === "quad" ? "p-4 sm:p-5" : "p-5 sm:p-7",
                  )}
                >
                  <p className="text-[11px] tracking-widest text-accent uppercase">
                    {project.year} · {project.client}
                  </p>
                  <h3 className="mt-1 text-2xl font-black sm:text-3xl">{project.title}</h3>
                  {project.previewLayout !== "quad" && (
                    <p className="mt-2 max-w-xl text-sm text-white/75">{project.summary}</p>
                  )}
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    开启详情与复盘
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Link>

              <div className="flex h-[min(62vh,620px)] min-h-[520px] flex-col gap-2 overflow-y-auto pr-1">
                {list.map((p) => {
                  const on = p.slug === project.slug;
                  return (
                    <button
                      key={p.slug}
                      type="button"
                      onMouseEnter={() => setCurrent(p.slug)}
                      onFocus={() => setCurrent(p.slug)}
                      onClick={() => setCurrent(p.slug)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors",
                        on
                          ? "border-primary/50 bg-primary/15"
                          : "border-white/8 bg-white/[0.03] hover:bg-white/[0.06]",
                      )}
                    >
                      <span
                        className="size-12 shrink-0 overflow-hidden rounded-lg bg-primary/30"
                        style={{ backgroundColor: on ? undefined : "#12141c" }}
                      >
                        {p.cover ? (
                          <img
                            src={p.cover}
                            alt=""
                            className="size-full object-cover"
                          />
                        ) : (
                          <span className="grid size-full place-items-center text-[10px] text-accent">
                            NEW
                          </span>
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold">
                          {p.title}
                        </span>
                        <span className="block truncate text-xs text-muted">
                          {p.en} · {p.year}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function BrandCover({ tags }: { tags: string[] }) {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#1f4bff,transparent_50%),radial-gradient(ellipse_at_bottom_right,#0a2ad4,transparent_45%),#070914]">
      <div className="halftone absolute inset-0 opacity-30" />
      <div className="absolute top-8 left-8 size-28 rounded-[32px] bg-primary/80 blur-[1px]" />
      <div className="absolute right-10 bottom-24 size-24 rounded-full bg-primary-deep" />
      <div className="absolute top-10 right-16 size-10 rounded-md bg-accent" />
      <div className="absolute inset-0 flex flex-col justify-center p-10">
        <p className="text-sm tracking-[0.3em] text-accent uppercase">Mintegral 2026</p>
        <p className="mt-2 max-w-md text-3xl font-black leading-tight">
          海外大型项目
          <br />
          视觉售卖
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
