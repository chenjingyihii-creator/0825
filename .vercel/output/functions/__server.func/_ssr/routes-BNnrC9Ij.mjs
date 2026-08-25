import { o as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Mail, i as MessageCircle, l as ArrowDownRight, o as ArrowUpRight, r as Phone, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { _ as timeline, c as categories, d as profile, g as stats, h as skills, l as featured, m as roles, p as projectsIn, s as bio, v as cn } from "./router-fbrqMHrr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BNnrC9Ij.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-24 border-t border-white/5 py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-4 left-1/2 z-10 h-8 w-16 -translate-x-1/2 rounded-b-2xl bg-primary shadow-[0_12px_30px_-10px_rgba(31,75,255,0.9)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "glass relative overflow-hidden rounded-[28px] p-4 pt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[20px] bg-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile.portrait,
								alt: profile.name,
								className: "aspect-[4/5] w-full object-cover object-[60%_18%]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-start justify-between gap-3 px-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] tracking-[0.2em] text-muted uppercase",
									children: "Visual Designer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 text-2xl font-black",
									children: profile.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										profile.city,
										" · ",
										profile.company
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-accent px-2.5 py-1 text-[10px] font-black text-background",
								children: [profile.years, " YRS"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 px-1 text-xs leading-relaxed text-muted",
							children: profile.headline
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-primary uppercase",
					children: "About me"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-2 text-3xl font-black tracking-tight lg:text-5xl",
					children: ["多边形战士，", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "不止一张图。"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base leading-7 text-foreground/85",
					children: bio.lead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-7 text-muted",
					children: bio.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
					children: roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-widest text-accent uppercase",
								children: r.en
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-lg font-bold",
								children: r.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: r.hint
							})
						]
					}, r.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: bio.core.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pill-glow px-3 py-1.5 text-xs font-medium",
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 space-y-0",
					children: timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[16px_1fr] gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-3 rounded-full bg-primary shadow-[0_0_12px_#1f4bff]" }), i < timeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px flex-1 bg-white/10" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pb-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] tracking-widest text-accent uppercase",
									children: t.period
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 text-base font-semibold",
									children: [t.org, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-2 font-normal text-muted",
										children: ["/ ", t.title]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-6 text-muted",
									children: t.note
								})
							]
						})]
					}, t.period))
				})
			] })]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "noise relative scroll-mt-24 overflow-hidden border-t border-white/5 py-24 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-0 w-[5%] checker opacity-70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-0 w-[5%] checker opacity-70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-10 bottom-0 size-[280px] rounded-full bg-primary/40 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-10 top-10 size-[220px] rounded-full bg-primary-deep/40 blur-3xl" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-accent uppercase",
					children: "Thanks for watching"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-5xl leading-none font-bold tracking-tight sm:text-7xl lg:text-8xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-transparent [-webkit-text-stroke:1.5px_#c8ff3a]",
							children: "THANKS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white",
							children: " FOR"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white",
							children: "WATCHING"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-base text-muted",
					children: "设计 2019—2026 合集。欢迎沟通岗位、项目与合作。武汉可到场，远程亦可。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${profile.phone}`,
							className: "inline-flex h-12 items-center gap-2 rounded-full bg-accent px-5 text-sm font-bold text-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), profile.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${profile.email}`,
							className: "pill-glow inline-flex h-12 items-center gap-2 px-5 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), profile.email]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex h-12 items-center gap-2 rounded-full border border-white/10 px-5 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }),
								"微信 ",
								profile.wechat
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 inline-flex items-center rounded-full bg-hot px-5 py-2 text-sm font-bold text-white",
					children: "期待面试"
				})
			]
		})]
	});
}
function Bauhaus() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-0 w-[3.5%] checker sm:w-[4.5%]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-0 w-[3.5%] checker sm:w-[4.5%]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "halftone absolute inset-0 opacity-25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[12%] left-1/2 h-[min(520px,58vh)] w-[min(1080px,88%)] -translate-x-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid h-full grid-cols-6 grid-rows-4 gap-2.5 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-2 row-span-2 rounded-[42px] bg-primary shadow-[0_0_80px_-10px_#1f4bff]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-2 row-span-2 rounded-full bg-primary-deep" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-2 row-span-1 rounded-[36px] bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-1 row-span-1 rounded-lg bg-accent shadow-[0_0_32px_rgba(200,255,58,0.55)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-1 row-span-1 rounded-br-[80px] rounded-tl-[80px] bg-primary-deep" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-2 row-span-2 rounded-[32px] bg-primary/95" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-2 row-span-2 rounded-t-full bg-primary-deep" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-2 row-span-1 rounded-l-full bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-1 rounded-md bg-accent/90" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-1 rounded-full bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-2 rounded-[28px] bg-primary-deep" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" })
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "noise relative flex min-h-screen flex-col overflow-hidden pt-16 lg:pt-[72px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bauhaus, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-[1700px] flex-1 flex-col px-5 pb-6 md:px-8 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col justify-center py-8 lg:py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-hot px-3 py-1 text-[11px] font-bold text-white",
									children: "视觉设计"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] text-muted backdrop-blur",
									children: "挑战 › 成长 › 革新"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden rounded-full border border-accent/50 bg-accent/15 px-3 py-1 text-[11px] font-medium text-accent sm:inline",
									children: "Get an offer"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative max-w-5xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "relative text-[56px] leading-[0.9] font-black tracking-tight text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] sm:text-[88px] lg:text-[128px]",
								children: ["作品集", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "swoosh hidden sm:block" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-display text-[26px] tracking-[0.16em] text-white/95 italic sm:text-[40px] lg:text-[50px]",
								children: [
									"PORTFOLIO",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-3 rounded-sm bg-accent px-2 py-0.5 align-middle font-sans text-[11px] font-black tracking-widest text-background not-italic sm:text-xs",
										children: "DESIGN"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white",
										children: "2026."
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-hot via-[#ff4d6d] to-[#ff8aa8] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(255,51,85,0.95)]",
								children: [
									profile.name,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-background px-2.5 py-0.5 text-xs font-black text-accent",
										children: [profile.years, "年"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-normal",
										children: "设计经验"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base",
							children: [
								profile.headline,
								" · 现 ",
								profile.company,
								" 海外大型项目视觉。平面 + 视频，覆盖游戏 / 社交 / 旅游 / 电商。"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#work",
								className: "inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(31,75,255,1)] transition-transform hover:scale-[1.02] active:scale-[0.98]",
								children: ["查看作品", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "pill-glow inline-flex h-12 items-center gap-2 px-6 text-sm font-semibold",
								children: ["联系合作", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "size-4 text-accent" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 flex flex-wrap gap-2",
							children: [
								"运营设计 | 策略",
								"视觉创意 | 手绘",
								"AIGC 探索 | 实践",
								"营销 & 剪辑"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-l-2 border-accent bg-black/40 px-3 py-1.5 text-xs tracking-wide text-white/90 backdrop-blur-md",
								children: t
							}, t))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.28em] text-muted uppercase",
							children: "Featured / 精选项目"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#work",
							className: "text-xs text-accent hover:underline",
							children: "全部作品"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
						children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work/$slug",
							params: { slug: p.slug },
							className: "group relative h-36 w-[220px] shrink-0 overflow-hidden rounded-[18px] border border-white/10 bg-card sm:h-40 sm:w-[260px]",
							children: [
								p.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.cover,
									alt: "",
									className: "absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary to-primary-deep" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-widest text-accent uppercase",
										children: p.en
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 line-clamp-1 text-sm font-semibold",
										children: p.title
									})]
								})
							]
						}, p.slug))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 border-t border-white/10 bg-black/55 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell flex flex-wrap items-center gap-x-5 gap-y-2 py-2.5 text-[11px] tracking-wide text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-accent",
						children: "技能 OPEN"
					}), skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent" }),
							s.level
						]
					}, s.name))]
				})
			})
		]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stats",
		className: "scroll-mt-24 border-y border-white/5 bg-black/40 py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-muted uppercase",
					children: "Numbers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-black lg:text-4xl",
					children: "个人数据"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-8",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-[10px] tracking-[0.35em] text-primary uppercase",
								children: s.en
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-[clamp(2.75rem,5.4vw,6.25rem)] leading-[0.85] font-black tracking-tight text-white",
								children: [s.value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-0.5 align-super text-[0.38em] font-black text-accent",
									children: s.suffix
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: s.label
							})
						]
					}, s.label))
				})
			]
		})
	});
}
function WorkFolders() {
	const [active, setActive] = (0, import_react.useState)("brand");
	const list = (0, import_react.useMemo)(() => projectsIn(active), [active]);
	const [current, setCurrent] = (0, import_react.useState)(list[0]?.slug ?? "");
	const cat = categories.find((c) => c.id === active);
	const project = list.find((p) => p.slug === current) ?? list[0];
	function selectCat(id) {
		setActive(id);
		const next = projectsIn(id);
		setCurrent(next[0]?.slug ?? "");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "scroll-mt-24 py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.28em] text-primary uppercase",
							children: "Selected work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-black tracking-tight lg:text-5xl",
							children: "按真实业务能力收纳"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-sm leading-6 text-muted",
							children: "点开文件夹看大图预览，其余类别折叠成标签。详情页放完整版面与复盘。"
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex gap-1 overflow-x-auto pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: categories.map((c) => {
						const on = c.id === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => selectCat(c.id),
							className: cn("folder-tab relative w-[128px] shrink-0 overflow-hidden px-3 py-2.5 text-left transition-transform sm:w-[152px]", on ? "z-10 -mb-px translate-y-0 bg-card" : "translate-y-2 opacity-70 hover:opacity-100"),
							style: { boxShadow: on ? `inset 0 3px 0 ${c.tint}` : void 0 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-[10px] tracking-widest text-muted",
								children: [
									c.no,
									" / ",
									c.en
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block truncate text-[13px] font-semibold leading-tight",
								children: c.title
							})]
						}, c.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "folder-panel relative p-4 sm:p-6 lg:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-sm text-muted",
							children: cat.blurb
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted",
							children: [list.length, " 个项目"]
						})]
					}), project && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work/$slug",
							params: { slug: project.slug },
							className: "group relative block min-h-[280px] overflow-hidden rounded-2xl bg-black sm:min-h-[420px]",
							children: [
								project.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.cover,
									alt: project.title,
									className: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandCover, { tags: project.tags }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-5 sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] tracking-widest text-accent uppercase",
											children: [
												project.year,
												" · ",
												project.client
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 text-2xl font-black sm:text-3xl",
											children: project.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 max-w-xl text-sm text-white/75",
											children: project.summary
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent",
											children: ["开启详情与复盘", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2",
							children: list.map((p) => {
								const on = p.slug === project.slug;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setCurrent(p.slug),
									className: cn("flex items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors", on ? "border-primary/50 bg-primary/15" : "border-white/8 bg-white/[0.03] hover:bg-white/[0.06]"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-12 shrink-0 overflow-hidden rounded-lg bg-primary/30",
										style: { backgroundColor: on ? void 0 : "#12141c" },
										children: p.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.cover,
											alt: "",
											className: "size-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-full place-items-center text-[10px] text-accent",
											children: "NEW"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block truncate text-sm font-semibold",
											children: p.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block truncate text-xs text-muted",
											children: [
												p.en,
												" · ",
												p.year
											]
										})]
									})]
								}, p.slug);
							})
						})]
					})]
				})
			]
		})
	});
}
function BrandCover({ tags }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#1f4bff,transparent_50%),radial-gradient(ellipse_at_bottom_right,#0a2ad4,transparent_45%),#070914]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "halftone absolute inset-0 opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-8 left-8 size-28 rounded-[32px] bg-primary/80 blur-[1px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-10 bottom-24 size-24 rounded-full bg-primary-deep" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-10 right-16 size-10 rounded-md bg-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col justify-center p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm tracking-[0.3em] text-accent uppercase",
						children: "Mintegral 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 max-w-md text-3xl font-black leading-tight",
						children: [
							"海外大型项目",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"视觉售卖"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs backdrop-blur",
							children: t
						}, t))
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkFolders, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
//#endregion
export { Home as component };
