import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bes5qhM2.mjs';
import { manifest } from './manifest_C_ouZXcw.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CD1Rv5Q-.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.10.2_@types+node@24.0.10_jiti@2.5.1_lightningcss@1.30.1_rollup@4.44.1_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "31492410-9a2c-46a2-9f38-5df42ea0bb10",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
