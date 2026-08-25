//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-CLDN-soj.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/login",
			"/work/$slug",
			"/api/auth/$"
		],
		preloads: ["/assets/index-oeAVnbAb.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-oeAVnbAb.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: ["/assets/routes--x6r9nMP.js", "/assets/arrow-up-right-plbHaEf7.js"]
	},
	"/login": {
		filePath: "/workspace/src/routes/login.tsx",
		children: void 0,
		preloads: ["/assets/login-BZ5YBXfu.js"]
	},
	"/work/$slug": {
		filePath: "/workspace/src/routes/work.$slug.tsx",
		children: void 0,
		preloads: ["/assets/work._slug-IrAHXC48.js", "/assets/arrow-up-right-plbHaEf7.js"]
	}
} });
//#endregion
export { tsrStartManifest };
