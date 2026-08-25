import { Calendar, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import { profile } from "@/lib/data/content";

const TAGS = [
  "7年商业视觉经验",
  "平面 + 视频双技能",
  "AI 赋能设计流程",
  "多赛道项目经验",
  "支持远程 / 武汉到岗",
];

export function Contact() {
  return (
    <section
      id="contact"
      className="closing relative scroll-mt-24 overflow-hidden"
    >
      <div className="closing-grid" aria-hidden />
      <div className="section-glow left-[8%] top-[-8%] h-[52vh] w-[52vh] bg-primary/[0.14]" />
      <div className="section-glow right-[4%] bottom-[-10%] h-[46vh] w-[46vh] bg-violet/[0.12]" />
      <div className="section-glow left-[42%] top-[38%] h-[18vh] w-[18vh] bg-accent/[0.05]" />

      <span className="closing-bg-word" aria-hidden>
        CONTACT
      </span>
      <span className="closing-mod closing-mod-a" aria-hidden />
      <span className="closing-mod closing-mod-b" aria-hidden />
      <span className="closing-mod closing-mod-c" aria-hidden />
      <span className="closing-mod closing-mod-d" aria-hidden />

      <div className="shell relative flex min-h-[92vh] flex-col justify-between py-16 lg:py-20">
        <div className="closing-head">
          <div>
            <p className="text-[12px] tracking-[0.28em] text-accent uppercase">
              06 / 06 · Contact
            </p>
            <h2 className="closing-title mt-5">
              <span className="closing-stroke">THANKS FOR</span>
              <span className="closing-watch">WATCHING</span>
            </h2>
          </div>
          <p className="closing-lead">
            <span className="closing-lead-kicker">设计 2019—2026 作品集</span>
            <span className="closing-lead-main">欢迎沟通岗位、项目与合作。</span>
            <span className="closing-lead-sub">可到岗武汉，也支持远程协作。</span>
          </p>
        </div>

        <article className="closing-card">
          <span className="closing-card-fill" aria-hidden />
          <span className="closing-card-sheen" aria-hidden />
          <div className="relative z-[1] grid gap-8 p-7 sm:p-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12 lg:p-12">
            <div>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${profile.phone}`} className="closing-chip">
                  <Phone className="size-4" />
                  {profile.phone}
                </a>
                <a href={`mailto:${profile.email}`} className="closing-chip">
                  <Mail className="size-4" />
                  {profile.email}
                </a>
                <span className="closing-chip">
                  <MessageCircle className="size-4" />
                  微信 {profile.wechat}
                </span>
              </div>
              <p className="mt-6 text-[18px] font-medium tracking-tight text-white/90">
                {profile.name}｜视觉设计师 / 视频设计 / 插画 / AI 视觉创意
              </p>
              <p className="mt-2 max-w-[560px] text-[14px] leading-7 text-white/50">
                求职方向：视觉设计、品牌视觉、增长创意、运营 H5、游戏视觉、AI 设计工作流
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={`mailto:${profile.email}?subject=Hello%20Chen%20Jingyi`} className="closing-btn closing-btn-main">
                <Sparkles className="size-4" />
                立即联系
              </a>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent("约面试 · 陈静怡")}`}
                className="closing-btn closing-btn-ghost"
              >
                <Calendar className="size-4" />
                约面试
              </a>
            </div>
          </div>
        </article>

        <div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span key={t} className="closing-tag">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 text-[12px] tracking-[0.16em] text-white/28">
            © Chen Jingyi Portfolio 2026 · Thanks for your time · Looking forward to connecting.
          </p>
        </div>
      </div>
    </section>
  );
}
