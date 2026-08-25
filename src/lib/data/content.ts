export type RoleId = "video" | "visual" | "illust" | "lead";

export type CategoryId =
  | "brand"
  | "ops"
  | "game"
  | "growth"
  | "ai"
  | "social"
  | "draw";

export type ShotKind = "portrait" | "landscape" | "square";
export type GallerySet = {
  title: string;
  kicker?: string;
  blurb?: string;
  shots: { src: string; kind: ShotKind }[];
  rows?: number[];
  fit?: boolean;
};

export type Project = {
  slug: string;
  category: CategoryId;
  title: string;
  en: string;
  year: string;
  client: string;
  featured: boolean;
  cover: string | null;
  gallery: string[];
  previews?: string[];
  previewLayout?: "mosaic" | "equal" | "pair" | "quad" | "duo" | "twin" | "frame" | "landport";
  sets?: GallerySet[];
  layoutRows?: number[];
  seriesLayout?: boolean;
  pinLayout?: boolean;
  tags: string[];
  summary: string;
  role: string;
  recap: string;
  outcome?: string;
  videos?: { src: string; poster: string; title?: string }[];
};

export const profile = {
  name: "陈静怡",
  nameEn: "Chen Jingyi",
  headline: "视觉设计师 / 视频创意 / 插画师",
  years: 7,
  city: "武汉",
  phone: "15807101087",
  email: "531452949@qq.com",
  wechat: "15807101087",
  company: "汇量科技",
  education: "三峡大学 · 广告设计",
  portrait: "/portrait.jpg",
};

export const bio = {
  lead: "7 年商业视觉经验，拥有字节及腾讯相关项目经历。目前重点参与海外大型项目视觉设计与商业创意支持。",
  body: "工作覆盖大型品牌项目、运营 H5、游戏视觉、信息流广告及视频创意，并持续将 AI 融入真实商业设计流程。长期服务游戏、社交、旅游、教育、工具、电商等不同业务，在强化视觉执行的同时，也积累了设计体系建设、团队协作、项目推进及数据复盘经验。",
  core: ["业务理解", "视觉执行", "AI 生产", "数据迭代", "项目协同"],
};

export const roles: { id: RoleId; label: string; en: string; hint: string }[] = [
  { id: "visual", label: "视觉设计", en: "Visual", hint: "品牌 / 运营 / GUI" },
  { id: "video", label: "视频创意", en: "Motion", hint: "剪辑 / 投放素材" },
  { id: "illust", label: "插画", en: "Illustration", hint: "手绘 / 道具 / 长图" },
  { id: "lead", label: "项目管理", en: "Lead", hint: "多边形战士" },
];

export const timeline = [
  {
    node: "01",
    period: "2019.07 — 2022.10",
    org: "字节跳动",
    title: "视觉设计师（兼管理）",
    summary: "从高频真实业务中建立稳定、快速且准确的视觉执行能力，并承担组内人效与 SOP。",
    tags: ["信息流广告", "手绘长图", "投放剪辑", "团队管理"],
    outputs: [
      "日常长图 / 电商图保质交付，8 次月度优秀，团队内稳定前 5",
      "定制插画长图，投票最高 8.06，持续优质产出",
      "投放向视频 10 条消耗达 20 万，其中 2 条超 50 万",
      "组内任务分配、带教、考核与 SOP，保障人效与 ROI",
      "快设计模板 100+、覆盖 1800+；创意圆桌 11 篇 / 阅读 8000+",
    ],
  },
  {
    node: "02",
    period: "2023.01 — 2024.06",
    org: "奥帕云",
    title: "高级视觉设计",
    summary: "面向语音社交产品，完成道具体系、运营 H5，并用 AIGC 提升可视化产能。",
    tags: ["道具装扮", "运营 H5", "AIGC"],
    outputs: [
      "礼物 / 座驾 / 霸屏 / 头像框 / 气泡 / 入场等道具设计",
      "活动 H5、弹窗、按钮、头图、开屏与海报",
      "SD / MJ 辅助道具与主视觉，进入真实生产流程",
    ],
  },
  {
    node: "03",
    period: "2024.08 — 2024.11",
    org: "腾讯 · 腾娱互动",
    title: "GUI 设计师",
    summary: "进入游戏内容语境，处理复杂界面层级和主题化视觉系统。",
    tags: ["GUI", "Live Ops", "主题换皮"],
    outputs: [
      "《元梦之星》发现 / 祈愿 / 热购主题活动与常规换皮",
      "按钮、Icon 设计输出与走查验收",
      "拍脸图、Banner 等强曝光物料",
    ],
  },
  {
    node: "04",
    period: "2025 — 至今",
    org: "汇量科技",
    title: "海外大型项目视觉",
    summary: "面向多市场、多语言与多媒介的大型商业项目，并将 AI 融入生产流程。",
    tags: ["海外项目", "多语言", "平面 + 视频"],
    outputs: [
      "PUBG、影之刃零、喵将三国、Cash Casino、拉斯海马旅游局等",
      "多语言、多场景、多媒介售卖创意",
      "平面 + 视频输出，并支持代投信息流客户",
    ],
  },
];

export const stats = [
  { value: "7", suffix: "年", label: "商业视觉经验", en: "YEARS" },
  { value: "10", suffix: "+", label: "行业设计覆盖", en: "INDUSTRIES" },
  { value: "6", suffix: "+", label: "业务赛道", en: "TRACKS" },
  { value: "30", suffix: "+", label: "大型项目", en: "PROJECTS" },
];

export const strengths: {
  no: string;
  title: string;
  hint: string;
  tags: string[];
  highlight?: boolean;
  span: "wide" | "mid" | "feature";
}[] = [
  {
    no: "01",
    title: "完整项目主导能力",
    hint: "从拆解到交付闭环",
    span: "feature",
    tags: ["任务拆解", "质量 Review", "流程 SOP", "人效保障"],
  },
  {
    no: "02",
    title: "AI 设计提效",
    hint: "生产流里的 AIGC",
    span: "feature",
    tags: ["即梦", "GPT", "Grok", "Gemini", "Codex", "Midjourney", "Stable Diffusion"],
  },
  {
    no: "03",
    title: "品牌视觉体系搭建",
    hint: "多语言大型售卖",
    span: "mid",
    tags: ["多语言 KV", "品牌物料", "视觉规范", "媒介适配"],
  },
  {
    no: "04",
    title: "设计管理统筹",
    hint: "带教与量化人效",
    span: "mid",
    tags: ["导师规划", "团队考核", "人才模型", "学习氛围"],
  },
  {
    no: "05",
    title: "跨部门协同",
    hint: "把创意推进真实场景",
    span: "mid",
    highlight: true,
    tags: ["走访产品、运营与研发", "将设计语言转成执行方案", "推动创意进入真实场景"],
  },
];

export const skills = [
  { name: "PS", level: "精通" },
  { name: "AI", level: "熟练" },
  { name: "AIGC", level: "熟练" },
  { name: "PR", level: "熟练" },
  { name: "AE", level: "一般" },
  { name: "剪映", level: "熟练" },
  { name: "C4D", level: "一般" },
];

export const categories: {
  id: CategoryId;
  no: string;
  title: string;
  en: string;
  tint: string;
  blurb: string;
}[] = [
  {
    id: "brand",
    no: "01",
    title: "S+项目合作与游戏视觉",
    en: "S+ / Game Visual",
    tint: "var(--color-primary)",
    blurb: "S+ 级海外合作与游戏视觉。PUBG、喵将三国、Cash Avalanche、综合合集与元梦之星 GUI。",
  },
  {
    id: "ops",
    no: "02",
    title: "运营活动与互动 H5",
    en: "Ops / H5",
    tint: "var(--color-accent)",
    blurb: "社交节点活动：主页、弹窗、按钮、玩法视效。国内 + 海外多产品线。",
  },
  {
    id: "game",
    no: "03",
    title: "团队影响力&品牌策划",
    en: "Team Brand/plan",
    tint: "#8b5cf6",
    blurb: "部门账号打造、企业模版平台与项目策划。把设计方法论沉淀成可复用的内容与工具。",
  },
  {
    id: "growth",
    no: "04",
    title: "增长创意与信息流广告",
    en: "Growth / Feed",
    tint: "#ff5a2a",
    blurb: "崽崽代投横版大图、电商长图与投放向视频。用视觉服务消耗与转化。",
  },
  {
    id: "ai",
    no: "05",
    title: "AI 创意与设计工作流",
    en: "AIGC Workflow",
    tint: "var(--color-violet)",
    blurb: "SD / MJ 进真实业务：礼物、活动主视觉、工作流分层与精修闭环。",
  },
  {
    id: "social",
    no: "05",
    title: "直播社交功能属性",
    en: "Gifts / Props",
    tint: "var(--color-pink)",
    blurb: "头像框、座驾、霸屏、气泡、入场、装扮、麦上光圈与勋章。",
  },
  {
    id: "draw",
    no: "06",
    title: "AIGC VS 手搓",
    en: "Hand vs AIGC",
    tint: "#ffc44d",
    blurb: "手绘原创与 AIGC 工作流对照。招生长图、扁平插画、C4D 造型，以及 SD / MJ 进真实业务的精修闭环。",
  },
];

export const projects: Project[] = [
  {
    slug: "meow-kingdoms",
    category: "brand",
    title: "喵将三国 · 海外售卖视觉",
    en: "Purrfect 3 Kingdoms",
    year: "2025 — 2026",
    client: "汇量科技",
    featured: true,
    pinLayout: true,
    cover: "/work/meow/kv-wu.jpg",
    previews: [
      "/work/meow/kv-wu.jpg",
      "/work/meow/kv-diaochan.jpg",
      "/work/meow/kv-gate.jpg",
    ],
    gallery: [
      "/work/meow/kv-caocao-lubu-guanyu.jpg",
      "/work/meow/kv-gate.jpg",
      "/work/meow/kv-wall.jpg",
      "/work/meow/kv-lubu-roster.jpg",
      "/work/meow/kv-diaochan.jpg",
      "/work/meow/kv-caocao-crowd.jpg",
      "/work/meow/kv-guanyu-roster.jpg",
      "/work/meow/kv-wu.jpg",
    ],
    layoutRows: [3, 3, 2],
    sets: [
      {
        title: "Purrfect 3 Kingdoms KV",
        shots: [
          { src: "/work/meow/kv-caocao-lubu-guanyu.jpg", kind: "landscape" },
          { src: "/work/meow/kv-gate.jpg", kind: "landscape" },
          { src: "/work/meow/kv-wall.jpg", kind: "landscape" },
          { src: "/work/meow/kv-lubu-roster.jpg", kind: "landscape" },
          { src: "/work/meow/kv-diaochan.jpg", kind: "landscape" },
          { src: "/work/meow/kv-caocao-crowd.jpg", kind: "landscape" },
          { src: "/work/meow/kv-guanyu-roster.jpg", kind: "landscape" },
          { src: "/work/meow/kv-wu.jpg", kind: "landscape" },
        ],
      },
    ],
    tags: ["喵将三国", "Purrfect 3 Kingdoms", "海外KV", "游戏视觉"],
    summary:
      "喵将三国海外投放主视觉。围绕貂蝉美人计、吴魏蜀阵容与核心三将，输出多语言 KV 与商店素材，覆盖 16:9 主画面与角色群像，服务买量与商店转化。",
    role: "视觉设计 / 海外 KV",
    recap:
      "同一套角色 IP 要在不同阵容、场景和卖点里保持识别度。构图优先角色可读，文案区与商店按钮预留稳定安全区，方便多语言替换。",
    outcome: "完成多套海外 KV，覆盖阵容卖点与商店主图。",
  },
  {
    slug: "mintegral-overseas",
    category: "brand",
    title: "PUBG Mobile · 海外联名战役",
    en: "PUBG Global Campaigns",
    year: "2025 — 2026",
    client: "汇量科技",
    featured: true,
    pinLayout: true,
    previewLayout: "landport",
    cover: "/work/pubg/ufa-kv5.jpg",
    previews: [
      "/work/pubg/ufa-kv5.jpg",
      "/work/pubg/ufa-alikulov.jpg",
    ],
    gallery: [
      "/work/pubg/spidey-hero.jpg",
      "/work/pubg/spidey-ticket.jpg",
      "/work/pubg/spidey-20heroes.jpg",
      "/work/pubg/spidey-claim.jpg",
      "/work/pubg/spidey-map.jpg",
      "/work/pubg/spidey-story.jpg",
      "/work/pubg/spidey-wall.jpg",
      "/work/pubg/spidey-ticket-front.jpg",
      "/work/pubg/spidey-ticket-back.jpg",
      "/work/pubg/ufa-vs-cod.jpg",
      "/work/pubg/ufa-keeper.jpg",
      "/work/pubg/ufa-kv.jpg",
      "/work/pubg/ufa-flag.jpg",
      "/work/pubg/naruto-winners.jpg",
    ],
    sets: [
      {
        title: "PUBG × Spider-Man",
        shots: [
          { src: "/work/pubg/spidey-ugc.jpg", kind: "portrait" },
          { src: "/work/pubg/spidey-hero.jpg", kind: "portrait" },
          { src: "/work/pubg/spidey-ticket.jpg", kind: "portrait" },
          { src: "/work/pubg/spidey-20heroes.jpg", kind: "portrait" },
          { src: "/work/pubg/spidey-claim.jpg", kind: "portrait" },
          { src: "/work/pubg/spidey-map.jpg", kind: "portrait" },
          { src: "/work/pubg/spidey-story.jpg", kind: "portrait" },
          { src: "/work/pubg/spidey-ticket-front.jpg", kind: "landscape" },
          { src: "/work/pubg/spidey-ticket-back.jpg", kind: "landscape" },
          { src: "/work/pubg/spidey-wall.jpg", kind: "landscape" },
        ],
      },
      {
        title: "PUBG × UFA Football",
        shots: [
          { src: "/work/pubg/ufa-kv5.jpg", kind: "landscape" },
          { src: "/work/pubg/ufa-alikulov.jpg", kind: "portrait" },
          { src: "/work/pubg/ufa-vs-cod.jpg", kind: "portrait" },
          { src: "/work/pubg/ufa-flag.jpg", kind: "landscape" },
        ],
      },
      {
        title: "PUBG × Naruto",
        shots: [{ src: "/work/pubg/naruto-winners.jpg", kind: "square" }],
      },
    ],
    tags: ["PUBG Mobile", "Spider-Man", "UFA Football", "Naruto", "UGC", "多语言KV"],
    summary:
      "PUBG Mobile 海外战役视觉。覆盖 Spider-Man 英雄接力 UGC、电影点映票根、20 Heroes 获奖公示，以及乌兹别克足球 UFA 联名与火影获奖海报，输出多语言 KV、横幅、票券与落地页物料。",
    role: "视觉设计 / 海外战役 KV",
    recap:
      "三条主线并行：Spider-Man 英雄接力（UGC 获奖、Hero Moment、俄区地图接龙、电影票正反面与背景墙）、UFA 足球联名（球场 KV、门将主视觉、VS COD）以及 Naruto 获奖公示。同一角色体系要在竖版海报、超宽票根和横版 KV 里保持识别度，文案区预留多语言安全区。",
    outcome: "完成 Spider-Man / UFA / Naruto 三套海外战役视觉，覆盖海报、票券、UGC 与商店物料。",
  },
  {
    slug: "cash-avalanche",
    category: "brand",
    title: "Cash Avalanche · Casino Slot",
    en: "Cash Avalanche",
    year: "2025 — 2026",
    client: "汇量科技",
    featured: true,
    pinLayout: true,
    cover: "/work/cash/alkemor-title.jpg",
    previews: [
      "/work/cash/voice.jpg",
      "/work/cash/worldcup.jpg",
      "/work/cash/pick-side.jpg",
    ],
    previewLayout: "equal",
    gallery: [
      "/work/cash/alkemor-title.jpg",
      "/work/cash/alkemor-play.jpg",
      "/work/cash/mice-title.jpg",
      "/work/cash/mice-play.jpg",
      "/work/cash/lep-title.jpg",
      "/work/cash/lep-play.jpg",
      "/work/cash/disco-title.jpg",
      "/work/cash/clash.jpg",
      "/work/cash/queen-title.jpg",
      "/work/cash/queen-puzzle.jpg",
      "/work/cash/pick-side.jpg",
      "/work/cash/pick-real.jpg",
      "/work/cash/voice.jpg",
      "/work/cash/worldcup.jpg",
      "/work/cash/starter.jpg",
    ],
    layoutRows: [3, 3, 3, 3, 3],
    tags: ["Cash Avalanche", "Slot", "IP海报", "互动海报", "玩法展示"],
    summary:
      "Cash Avalanche 海外 Casino Slot 视觉。覆盖 Alkemor、Mice & Magic、Leprechaun、Disco Farm、Divine Queen 等机台主视觉、玩法展示、互动拼图 / 找不同，以及 Voice Matters、世界杯对决与 Starter Pack 运营海报。",
    role: "视觉设计 / Slot 平面",
    recap:
      "同一品牌 IP（小精灵）贯穿所有机台物料。主视觉负责机台识别，玩法海报讲清 WILD / HOLD & WIN，互动海报用拼图、找不同和站队提升停留。重复的 Clash of Games 成片已去重。",
    outcome: "15 张去重成片，覆盖机台 KV、玩法展示与互动运营。",
  },
  {
    slug: "mixed-campaigns",
    category: "brand",
    title: "综合项目合集",
    en: "Mixed Campaigns",
    year: "2026",
    client: "汇量科技",
    featured: true,
    pinLayout: true,
    cover: "/work/mix/rak-window.jpg",
    previews: [
      "/work/mix/rak-window.jpg",
      "/work/mix/rak-trail.jpg",
      "/work/mix/veri-ghost.jpg",
      "/work/mix/pb0-back.jpg",
    ],
    previewLayout: "twin",
    gallery: [
      "/work/mix/veri-ghost.jpg",
      "/work/mix/veri-invasion.jpg",
      "/work/mix/rak-horse-beach.jpg",
      "/work/mix/rak-glow-night.jpg",
      "/work/mix/rak-trail.jpg",
      "/work/mix/rak-window.jpg",
      "/work/mix/rak-collage.jpg",
      "/work/mix/pb0-hun.jpg",
      "/work/mix/pb0-muxiaokui.jpg",
      "/work/mix/pb0-back.jpg",
      "/work/mix/pb0-date.jpg",
      "/work/mix/pb0-story.jpg",
    ],
    seriesLayout: true,
    sets: [
      {
        kicker: "01 / Veritickets",
        title: "阿里 Veritickets",
        blurb: "反黄牛战役 KV。用「门票鬼故事」讲假票、黄牛与验真，绿色光门作为品牌记忆点。",
        rows: [2],
        shots: [
          { src: "/work/mix/veri-ghost.jpg", kind: "landscape" },
          { src: "/work/mix/veri-invasion.jpg", kind: "landscape" },
        ],
      },
      {
        kicker: "02 / Ras Al Khaimah",
        title: "拉斯海马旅游局",
        blurb: "马年旅游视觉。具象度假场景、抽象光马与拼贴奇迹城，双语传达「马上开运」。",
        rows: [3, 2],
        shots: [
          { src: "/work/mix/rak-horse-beach.jpg", kind: "portrait" },
          { src: "/work/mix/rak-glow-night.jpg", kind: "portrait" },
          { src: "/work/mix/rak-trail.jpg", kind: "portrait" },
          { src: "/work/mix/rak-window.jpg", kind: "portrait" },
          { src: "/work/mix/rak-collage.jpg", kind: "portrait" },
        ],
      },
      {
        kicker: "03 / Phantom Blade 0",
        title: "影之刃零",
        blurb: "发售 Wishlist 物料。角色横幅、雨中背影 KV、发售日期确认与 Story 竖版。",
        rows: [2, 3],
        fit: true,
        shots: [
          { src: "/work/mix/pb0-hun.jpg", kind: "square" },
          { src: "/work/mix/pb0-muxiaokui.jpg", kind: "square" },
          { src: "/work/mix/pb0-back.jpg", kind: "landscape" },
          { src: "/work/mix/pb0-date.jpg", kind: "landscape" },
          { src: "/work/mix/pb0-story.jpg", kind: "portrait" },
        ],
      },
    ],
    tags: ["Veritickets", "拉斯海马", "影之刃零", "海外KV", "品牌视觉"],
    summary:
      "汇量海外大型项目合集。覆盖阿里 Veritickets 反黄牛战役、拉斯海马旅游局马年视觉、影之刃零发售 Wishlist，三条完全不同的品牌语言并行输出。",
    role: "视觉设计 / 海外战役",
    recap:
      "同一套海外售卖流程，三种视觉系统：Veritickets 用鬼故事隐喻假票与验真；拉斯海马把「马上开运」嵌进旅游场景，具象 / 抽象 / 拼贴三套方向；影之刃零压暗、金属、发售倒计时。分系列收纳，避免不同品牌物料互相抢色。",
    outcome: "12 张成片，3 个品牌系列。",
  },
  {
    slug: "yumeng-gui",
    category: "brand",
    title: "元梦之星 GUI",
    en: "Yumeng Star GUI",
    year: "2024 — 2025",
    client: "腾娱互动 / 腾讯",
    featured: true,
    cover: "/work/covers/cover-gui.jpg",
    gallery: ["/work/p14.jpg", "/work/p15.jpg"],
    tags: ["GUI", "主题换皮", "拍脸图", "Icon"],
    summary:
      "负责元梦之星发现 / 祈愿 / 热购等区域的主题活动与常规界面换皮，包含按钮、Icon、拍脸图与 Banner 的设计输出及验收走查。",
    role: "GUI 设计 / 走查验收",
    recap:
      "换皮不是套皮。要在既有组件骨架上把主题情绪做满，同时保证热区、层级和资源规范能过研发验收。个人信息页尝试了两套完全不同的装饰语言，验证同一信息结构的风格延展上限。",
    outcome: "覆盖 S8 赛季预购、常规活动界面与个人资料双风格方案。",
  },
  {
    slug: "dawn-of-gods",
    category: "ops",
    title: "诸神黎明",
    en: "Dawn of the Gods",
    year: "2024",
    client: "社交产品活动",
    featured: true,
    cover: "/work/covers/cover-gods.jpg",
    gallery: ["/work/p20.jpg", "/work/p17.jpg"],
    tags: ["AIGC", "活动H5", "主神", "工作流"],
    summary:
      "以 AI 辅助生成神域主视觉，再由设计精修整合。诸神黎明一期 & 二期活动上线 2 天流水 90 万，一期总计流水 500 万。",
    role: "主视觉 / AIGC 工作流",
    recap:
      "工作流拆成：设计师出思路 → AI 出素材 → 精修字体与结构 → 分层整合。基调层、核心层、互动层分开，避免 AI 图直接上线导致的按钮和信息层级失控。",
    outcome: "2 日内流水 90 万；一期总计 500 万。",
  },
  {
    slug: "nye-gala",
    category: "ops",
    title: "不夜星球 · 年度盛典",
    en: "Annual Gala H5",
    year: "2023",
    client: "不夜星球",
    featured: true,
    cover: "/work/covers/cover-nye.jpg",
    gallery: ["/work/p04.jpg", "/work/p05.jpg"],
    tags: ["H5", "弹窗", "主视觉", "赛博"],
    summary:
      "国内社交产品重要节点运营。年度盛典从主视觉、活动主页、榜单、房间到按钮弹窗完整铺开，紫蓝赛博质感统一全链路。",
    role: "活动视觉主设计",
    recap:
      "节点活动要先把「盛典感」做足，再把玩法模块嵌进去。奖杯、舞台、排行榜用同一套光效和材质语言，避免页面拼贴感。手机预览是最终验收标准。",
    outcome: "完整 H5 + 房间资源 + 主 KV。",
  },
  {
    slug: "fated-life",
    category: "ops",
    title: "不夜星球 · 缘定今生",
    en: "Fated This Life",
    year: "2024",
    client: "不夜星球",
    featured: true,
    cover: "/work/covers/cover-yuan.jpg",
    gallery: ["/work/p06.jpg"],
    tags: ["H5", "国风", "CP", "亲密度"],
    summary:
      "青春有你第二季节点。红金国风 CP 向，从开屏插画、亲密度榜到奖励规则页，把古风叙事铺进互动流程。",
    role: "活动视觉 / 插画整合",
    recap:
      "国风活动最容易做成「一张插画 + 表单」。这次把卷轴、灯笼、亲密度模块和规则页做成同一套材质，让滑动本身像在翻一封请柬。",
  },
  {
    slug: "creative-roundtable",
    category: "game",
    title: "创意圆桌 · 部门账号打造",
    en: "Creative Round Table",
    year: "2021 — 2022",
    client: "字节跳动",
    featured: false,
    cover: "/work/covers/cover-roundtable.jpg",
    gallery: ["/work/p24.jpg"],
    tags: ["内容运营", "视觉策划", "知识库"],
    summary:
      "以设计视角做部门对外账号。完成内容推送 11 篇，累计阅读 8000+，内容归拢至总部知识库。",
    role: "策划 + 视觉 + 编辑",
    recap:
      "设计师账号不能只发作品。选题落在方法论、资讯和技能课，用内容反哺团队审美，也把个人影响力沉淀进组织。",
    outcome: "11 篇内容，阅读 8000+，订阅持续增长。",
  },
  {
    slug: "quick-design",
    category: "game",
    title: "快设计 · 企业模版平台",
    en: "Quick Design",
    year: "2021 — 2022",
    client: "字节跳动",
    featured: false,
    cover: "/work/covers/cover-quick.jpg",
    gallery: ["/work/p25.jpg"],
    tags: ["模版", "教程", "B 端"],
    summary:
      "打造快设计初级 / 进阶学习手册、视频教程与视觉宣传，完成模版制作、收集与修订 100+。",
    role: "视觉 + 教程体系",
    recap:
      "B 端模版要的是可复用，不是炫技。把操作路径做成手册和视频，让非设计岗位也能出图，覆盖人群 1800+，模版下载 2000+。",
    outcome: "模版 100+，覆盖 1800+ 人，下载 2000+。",
  },
  {
    slug: "egg-smash",
    category: "ops",
    title: "谁是凶手 · 砸蛋得大奖",
    en: "Egg Smash",
    year: "2023",
    client: "谁是凶手",
    featured: false,
    cover: "/work/covers/cover-egg.jpg",
    gallery: ["/work/p07.jpg", "/work/p10.jpg"],
    tags: ["H5", "玩法", "清新"],
    summary:
      "春日砸蛋玩法页。绿野仙境配色，金蛋、花环、排行榜和任务闭环完整，后续同步输出 Party Star 粉紫版本。",
    role: "活动视觉",
    recap:
      "同一套玩法骨架可以换皮到完全不同的情绪。绿色森系和粉紫派对是一次「结构复用 + 主题重做」的对照。",
  },
  {
    slug: "qixi-meet",
    category: "ops",
    title: "VEEKA · 七夕与你相遇",
    en: "Qixi Encounter",
    year: "2023",
    client: "VEEKA",
    featured: false,
    cover: "/work/covers/cover-qixi.jpg",
    gallery: ["/work/p08.jpg"],
    tags: ["海外", "多语言", "H5"],
    summary:
      "海外社交产品七夕活动。粉白恋爱视觉，摇骰子玩法，标题同步葡语 / 阿语 / 泰语等多语言。",
    role: "活动视觉 / 多语言适配",
    recap:
      "海外活动的炸弹是文案长度。主标题做成可替换图层，插画和按钮区预留膨胀空间，避免阿语和泰语把版面撑穿。",
  },
  {
    slug: "pati-monopoly",
    category: "ops",
    title: "PATI · 大富翁主题公园",
    en: "Monopoly Park",
    year: "2023",
    client: "Party Star / PATI",
    featured: false,
    cover: "/work/covers/cover-monopoly.jpg",
    gallery: ["/work/p09.jpg"],
    tags: ["H5", "棋盘", "夏日"],
    summary:
      "夏日海岛大富翁。棋盘、骰子、排行榜、商店兑换做成同一套度假视觉，韩语主 KV 同步输出。",
    role: "活动视觉",
    recap:
      "棋盘类玩法信息密度高，必须先保证格子可读，再堆装饰。建筑停留弹窗用卷轴，避免和主棋盘抢色。",
  },
  {
    slug: "halloween-carnival",
    category: "ops",
    title: "PATI · 万圣节嘉年华",
    en: "Halloween Carnival",
    year: "2023",
    client: "PATI",
    featured: false,
    cover: "/work/covers/cover-halloween.jpg",
    gallery: ["/work/p11.jpg"],
    tags: ["海外", "转盘", "节日"],
    summary:
      "海外万圣节节点。南瓜转盘、鬼屋奖励、多语言标题和边框物料一次出齐。",
    role: "活动视觉 / 物料",
    recap:
      "节日活动要「一眼节日」。南瓜、蝙蝠、墓碑是符号，转盘和榜单才是转化。符号服务玩法，而不是相反。",
  },
  {
    slug: "singing-party",
    category: "ops",
    title: "全站歌友会",
    en: "Station Singing Party",
    year: "2024",
    client: "社交直播",
    featured: false,
    cover: "/work/covers/cover-sing.jpg",
    gallery: ["/work/p12.jpg", "/work/p13.jpg"],
    tags: ["赛事", "H5", "舞台"],
    summary:
      "唱歌 PK 赛事。蓝紫渐变舞台、水晶徽章和仰视构图，把用户拖进演唱会现场。另附一批跨主题运营 H5 合集。",
    role: "活动主视觉",
    recap:
      "关键词是游戏向、娱乐感、潮流市场。四个词：蓝紫渐变、唱歌场景、兴奋氛围、轻质感。中心构图 + 透视标题，是为了让主播愿意拿去当房间背景。",
  },
  {
    slug: "zaizai",
    category: "growth",
    title: "崽崽ZEPETO · 信息流图片创意",
    en: "ZaiZai ZEPETO · Feed Visuals",
    year: "2026",
    client: "汇量科技 · 代投",
    featured: true,
    cover: "/work/zaizai/bff-booth.jpg",
    previews: [
      "/work/zaizai/bff-booth.jpg",
      "/work/zaizai/castle-ball.jpg",
      "/work/zaizai/cute-boy-10.jpg",
      "/work/zaizai/heart-drop.jpg",
    ],
    previewLayout: "quad",
    gallery: [
      "/work/zaizai/find-her.jpg",
      "/work/zaizai/find-senpai.jpg",
      "/work/zaizai/daily-her.jpg",
      "/work/zaizai/start-chat.jpg",
      "/work/zaizai/cute-boy-1.jpg",
      "/work/zaizai/cute-boy-5.jpg",
      "/work/zaizai/cute-boy-10.jpg",
      "/work/zaizai/stripe-boy-2.jpg",
      "/work/zaizai/stripe-boy-6.jpg",
      "/work/zaizai/anime-1.jpg",
      "/work/zaizai/anime-9.jpg",
      "/work/zaizai/sing.jpg",
      "/work/zaizai/male-tune.jpg",
      "/work/zaizai/chat-3.jpg",
      "/work/zaizai/he-texted.jpg",
      "/work/zaizai/618-blindbox.jpg",
      "/work/zaizai/618-switch.jpg",
      "/work/zaizai/618-pets.jpg",
      "/work/zaizai/girlfriends-frame.jpg",
      "/work/zaizai/girlfriends-match.jpg",
      "/work/zaizai/opener.jpg",
      "/work/zaizai/bff-booth.jpg",
      "/work/zaizai/castle-ball.jpg",
      "/work/zaizai/xiangfeng.jpg",
      "/work/zaizai/duanwu.jpg",
      "/work/zaizai/ideal-guy.jpg",
      "/work/zaizai/pet-quest.jpg",
      "/work/zaizai/arrival.jpg",
      "/work/zaizai/white-date.jpg",
      "/work/zaizai/white-shot.jpg",
      "/work/zaizai/outfit-level.jpg",
      "/work/zaizai/dance-room.jpg",
      "/work/zaizai/leopard.jpg",
      "/work/zaizai/story-frame.jpg",
      "/work/zaizai/kid-buddy.jpg",
      "/work/zaizai/workwear-1.jpg",
      "/work/zaizai/workwear-3.jpg",
      "/work/zaizai/couple-1.jpg",
      "/work/zaizai/couple-4.jpg",
      "/work/zaizai/lolita-2.jpg",
      "/work/zaizai/lolita-4.jpg",
      "/work/zaizai/lace-3.jpg",
      "/work/zaizai/lace-4.jpg",
      "/work/zaizai/four.jpg",
      "/work/zaizai/duo-blindbox.jpg",
      "/work/zaizai/heart-drop.jpg",
      "/work/zaizai/ootd.jpg",
      "/work/zaizai/retro.jpg",
      "/work/zaizai/senpai.jpg",
      "/work/zaizai/y2k.jpg",
      "/work/zaizai/flower-field.jpg",
      "/work/zaizai/summer-wind.jpg",
      "/work/zaizai/simple-1.jpg",
    ],
    layoutRows: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    tags: ["崽崽", "信息流", "横版大图", "智能对话", "穿搭", "投放"],
    summary:
      "汇量代投 · 崽崽信息流横版大图。覆盖智能对话新功能（心事找她 / 找学长 / 开聊）、618 盲盒与萌宠节点，以及闺蜜同框、洛丽塔、工装、Y2K 等穿搭出片物料。",
    role: "视觉设计 / 信息流创意",
    recap:
      "崽崽同时卖角色可玩和功能可聊。横版大图按卖点拆层：左角色出片，右功能 / 活动文案。智能对话系列用对话框和角色特写讲清「找她说话」；穿搭系列用盲盒、同框、OOTD 把换装卖点铺开。同一套角色在节点活动和日常投放里复用，保证信息流识别度。",
    outcome: "53 张去重横版成片。",
  },
  {
    slug: "feed-ads",
    category: "growth",
    title: "信息流长图与投放素材",
    en: "Feed & Performance",
    year: "2019 — 2022",
    client: "字节跳动",
    featured: false,
    cover: "/work/covers/cover-feed.jpg",
    gallery: ["/work/p26.jpg"],
    tags: ["信息流", "长图", "投放"],
    summary:
      "日常长图 / 电商图高效保质交付。团队内 8 次月度优秀设计师，均分稳定前 5。投放向视频产出 10 个消耗达 20 万的素材，其中 2 个超 50 万。",
    role: "视觉执行 / 投放创意",
    recap:
      "信息流不是海报。卖点要按滑动节奏拆层：头三屏抓注意力，中段讲证据，尾屏给行动。视觉服务于消耗，而不是作品集自嗨。",
    outcome: "8 次月度优秀；10 条素材消耗 20 万+，2 条超 50 万。",
  },
  {
    slug: "aigc-workflow",
    category: "draw",
    title: "AIGC 设计工作流",
    en: "AIGC Pipeline",
    year: "2023 — 2024",
    client: "多产品",
    featured: false,
    cover: "/work/covers/cover-ai.jpg",
    gallery: ["/work/p17.jpg"],
    tags: ["SD", "Midjourney", "工作流"],
    summary:
      "把 Stable Diffusion 与 Midjourney 嵌进真实交付：礼物、道具、头像框、霸屏、海报和运营 H5。",
    role: "设计方法建设",
    recap:
      "AI 不是一键出图。有效的是「关键词 / 线稿 / 风格分工 → 精修字体结构 → 分图层融合」。没有精修环节的 AI 图，进不了商业页。",
  },
  {
    slug: "social-props",
    category: "social",
    title: "社交道具 / 头像框 / 勋章",
    en: "Frames & Titles",
    year: "2023 — 2024",
    client: "伴伴系 / VEEKA 等",
    featured: false,
    cover: "/work/covers/cover-props.jpg",
    gallery: ["/work/p18.jpg"],
    tags: ["头像框", "飘屏", "勋章"],
    summary:
      "黑天鹅、冰雪、软糖、女神节、梦幻、中秋等头像框套装，以及飘屏、勋章和称号条。",
    role: "道具设计",
    recap:
      "功能属性要在圆形头像和窄条飘屏里依然能被识别。材质和主题符号必须「缩到 80px 还认识」，否则房间里就是一块脏色。",
  },
  {
    slug: "live-gifts",
    category: "social",
    title: "直播礼物与动态皮肤",
    en: "Live Gifts",
    year: "2023 — 2024",
    client: "语音 / 直播产品",
    featured: false,
    cover: "/work/covers/cover-gifts.jpg",
    gallery: ["/work/p19.jpg"],
    tags: ["礼物", "座驾", "动态"],
    summary:
      "3 升级花朵礼盒、全屏礼物动画、4 升级龙及多套角色向礼物。覆盖谁是凶手、皮队友、VEEKA、Starify 等。",
    role: "礼物 / 插画",
    recap:
      "礼物是付费情绪。升级路径要让每一档都「看起来更贵」，而不是同一张图换个颜色。动态全屏礼物用分层动画预留，便于后续动效接入。",
  },
  {
    slug: "hand-drawn",
    category: "draw",
    title: "手绘原创 · 运营系列图",
    en: "Hand-drawn Series",
    year: "2019 — 2022",
    client: "教育 / 生活服务等",
    featured: false,
    cover: "/work/covers/cover-draw.jpg",
    gallery: ["/work/p22.jpg"],
    tags: ["手绘", "长图", "招生"],
    summary:
      "早教英语班、少儿音乐暑假班等手绘 banner / 首图 / 长图，以及扁平场景、食物和装饰框等元素库。",
    role: "插画 / 平面",
    recap:
      "招生类手绘要可爱但不能幼稚到失去家长信任。配色先定主色占比，人物比例故意放大表情，信息模块用贴纸感贴上，避免插画把文字吃掉。",
  },
  {
    slug: "c4d-objects",
    category: "draw",
    title: "C4D 造型练习",
    en: "C4D Studies",
    year: "2022",
    client: "个人钻研",
    featured: false,
    cover: "/work/covers/cover-c4d.jpg",
    gallery: ["/work/p27.jpg"],
    tags: ["C4D", "三维"],
    summary:
      "Walkman、打字机、游戏机临摹，以及小卡车、积木鸭等场景造型，补三维基本功。",
    role: "三维练习",
    recap:
      "三维不是主职，但是补观察力的手段。临摹电子产品是为了把倒角、材质和投影看清楚，再反哺 2D 质感。",
  },
];

export const nav = [
  { id: "work", label: "工作经历" },
  { id: "archive", label: "工作产出" },
  { id: "stats", label: "个人优势" },
  { id: "contact", label: "联系我" },
] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectsIn(id: CategoryId) {
  const list = projects.filter((p) => p.category === id);
  const order: Partial<Record<CategoryId, string[]>> = {
    brand: [
      "mintegral-overseas",
      "cash-avalanche",
      "meow-kingdoms",
      "yumeng-gui",
      "mixed-campaigns",
    ],
    ops: [
      "singing-party",
      "fated-life",
      "nye-gala",
      "halloween-carnival",
      "dawn-of-gods",
      "egg-smash",
      "qixi-meet",
      "pati-monopoly",
    ],
  };
  const seq = order[id];
  if (!seq) return list;
  return [...list].sort((a, b) => {
    const ia = seq.indexOf(a.slug);
    const ib = seq.indexOf(b.slug);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
}

export const featured = projects.filter((p) => p.featured);

export const selectedFive = [
  {
    slug: "mintegral-overseas",
    no: "01",
    kicker: "大型商业项目",
    title: "PUBG",
    word: "GLOBAL",
    tab: "大型商业项目",
    lane: "GLOBAL",
    meta: ["CAMPAIGN", "GLOBAL", "MOTION", "AI"],
    accent: "#4d8aff",
    coverLayout: "fan4",
    covers: [
      "/work/pubg/spidey-hero.jpg",
      "/work/pubg/spidey-ugc.jpg",
      "/work/pubg/spidey-ticket.jpg",
      "/work/pubg/spidey-claim.jpg",
    ],
  },
  {
    slug: "nye-gala",
    no: "02",
    kicker: "活动视觉与科技",
    title: "运营活动 H5",
    word: "H5",
    tab: "运营活动 H5",
    lane: "H5",
    meta: ["SOCIAL", "LIVE OPS", "H5", "SYSTEM"],
    accent: "#bfff32",
    covers: ["/work/covers/cover-nye.jpg", "/work/p05.jpg"],
  },
  {
    slug: "yumeng-gui",
    no: "03",
    kicker: "游戏界面",
    title: "元梦之星 GUI",
    word: "GUI",
    tab: "元梦之星《游戏界面》",
    lane: "GAME",
    meta: ["GUI", "LIVE OPS", "主题换皮"],
    accent: "#ff4d9a",
    covers: ["/work/covers/cover-gui.jpg", "/work/p14.jpg", "/work/p15.jpg"],
  },
  {
    slug: "meow-kingdoms",
    no: "04",
    kicker: "海外游戏视觉",
    title: "喵将三国",
    word: "MEOW",
    tab: "喵将三国",
    lane: "GAME",
    meta: ["KV", "海外投放", "角色IP"],
    accent: "#a78bfa",
    covers: [
      "/work/meow/kv-wu.jpg",
      "/work/meow/kv-gate.jpg",
      "/work/meow/kv-diaochan.jpg",
    ],
  },
  {
    slug: "zaizai",
    no: "05",
    kicker: "增长创意投放",
    title: "崽崽ZEPETO",
    word: "GROWTH",
    tab: "增长信息流",
    lane: "GROWTH",
    meta: ["FEED", "ZAIZAI", "AI CHAT"],
    accent: "#ff9f1a",
    covers: [
      "/work/zaizai/bff-booth.jpg",
      "/work/zaizai/find-her.jpg",
      "/work/zaizai/cute-boy-10.jpg",
      "/work/zaizai/castle-ball.jpg",
      "/work/zaizai/heart-drop.jpg",
    ],
  },
] as const;
