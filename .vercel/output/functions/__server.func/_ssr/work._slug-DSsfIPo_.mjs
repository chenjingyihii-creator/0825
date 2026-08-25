import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowLeft, o as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { c as categories, f as projects, o as Route$1, u as getProject } from "./router-fbrqMHrr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-DSsfIPo_.js
var import_jsx_runtime = require_jsx_runtime();
function WorkDetail() {
	const { slug } = Route$1.useParams();
	const project = getProject(slug);
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center px-6 pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "未找到该项目"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-4 inline-block text-accent underline",
				children: "返回首页"
			})]
		})
	});
	const cat = categories.find((c) => c.id === project.category);
	const related = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "pt-20 pb-24 lg:pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					hash: "work",
					className: "inline-flex items-center gap-2 text-sm text-muted hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "返回作品"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-[11px] tracking-[0.28em] text-accent uppercase",
					children: [
						cat?.en,
						" · ",
						project.year
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-xl text-primary italic",
					children: project.en
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base leading-7 text-muted",
					children: project.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: project.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs",
						children: t
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] tracking-widest text-muted uppercase",
								children: "Client"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-semibold",
								children: project.client
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] tracking-widest text-muted uppercase",
								children: "Role"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-semibold",
								children: project.role
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] tracking-widest text-muted uppercase",
								children: "Outcome"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-semibold",
								children: project.outcome ?? "完整视觉交付"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/15 to-transparent p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.28em] text-accent uppercase",
							children: "Recap / 复盘"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl font-black",
							children: "项目推进与复盘"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-3xl text-sm leading-7 text-foreground/85",
							children: project.recap
						})
					]
				}),
				project.cover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.cover,
						alt: project.title,
						className: "w-full object-cover"
					})
				}),
				!project.cover && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 overflow-hidden rounded-3xl border border-white/10 bg-primary/20 p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-accent",
						children: "汇量科技 · 海外项目视觉成片持续更新"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: project.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur",
							children: t
						}, t))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-8",
					children: project.gallery.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "overflow-hidden rounded-2xl bg-black",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "w-full",
							loading: "lazy"
						})
					}, src))
				}),
				related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: "同文件夹其他项目"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-3",
						children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work/$slug",
							params: { slug: p.slug },
							className: "group overflow-hidden rounded-2xl border border-white/10 bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[16/10] overflow-hidden bg-primary/20",
								children: p.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.cover,
									alt: "",
									className: "size-full object-cover transition-transform group-hover:scale-105"
								}) : null
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate text-sm font-semibold",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 shrink-0 text-accent" })]
							})]
						}, p.slug))
					})]
				})
			]
		})
	});
}
//#endregion
export { WorkDetail as component };
