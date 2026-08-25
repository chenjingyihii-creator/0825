import {
  ClipboardList,
  LayoutDashboard,
  Palette,
  Share2,
  Sparkles,
} from "lucide-react";
import { stats, strengths } from "@/lib/data/content";
import { cn } from "@/lib/utils";
import { PageGlass } from "@/components/page-glass";
import { ImpactBubbles } from "@/components/impact-bubbles";

const ICONS = [LayoutDashboard, Sparkles, Palette, ClipboardList, Share2];

export function Stats() {
  return (
    <section id="stats" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div className="section-glow left-[8%] top-[-10%] h-[40vh] w-[40vh] bg-primary/[0.09]" />
      <div className="section-glow right-[4%] bottom-[-12%] h-[34vh] w-[34vh] bg-accent/[0.05]" />
      <div className="shell relative">
        <p className="text-[12px] tracking-[0.28em] text-accent uppercase">
          05 / 06 · Impact / data
        </p>
        <h2 className="mt-3 max-w-3xl text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.18] font-medium tracking-tight">
          设计不是结果图，
          <br />
          也要经得起<span className="text-accent">数据复盘</span>。
        </h2>

        <div className="impact-metrics mt-12">
          {stats.map((s, i) => (
            <div key={s.label} className="contents">
              {i > 0 ? (
                <span className="impact-split" aria-hidden>
                  <span className="impact-split-line" />
                  <span className="impact-split-star">✦</span>
                </span>
              ) : null}
              <div className="impact-metric">
                <p className="impact-num">
                  {s.value}
                  <span>{s.suffix}</span>
                </p>
                <p className="mt-2 text-[13px] tracking-[0.18em] text-white/40 uppercase">
                  {s.en}
                </p>
                <p className="mt-1 text-base text-white/70">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="impact-bento mt-10">
          {strengths.map((item, i) => {
            const Icon = ICONS[i] ?? Sparkles;
            const top = item.span === "feature";
            return (
              <PageGlass
                key={item.no}
                variant="deep"
                chroma="a"
                radius={24}
                glow
                ghost={false}
                className={cn(
                  "impact-glass border-glow-card--bare group h-full min-h-[220px]",
                  top ? "impact-feature" : "impact-mid",
                )}
                bodyClassName="flex h-full min-h-[220px] flex-col p-6"
              >
                <div className="impact-head">
                  <span className="impact-no">{item.no}</span>
                  <h3>
                    {item.title}
                    <span className="text-accent"> ·</span>
                  </h3>
                  <span className="impact-hint">{item.hint}</span>
                </div>
                <div className="impact-body">
                  <ImpactBubbles
                    tags={item.tags}
                    layout={item.tags.length > 5 ? "many" : "cluster"}
                    scatter={i}
                  />
                </div>
                <span className="impact-icon-wrap" aria-hidden>
                  <Icon className="impact-icon" fill="currentColor" stroke="none" strokeWidth={0} />
                </span>
              </PageGlass>
            );
          })}
        </div>
      </div>
    </section>
  );
}
