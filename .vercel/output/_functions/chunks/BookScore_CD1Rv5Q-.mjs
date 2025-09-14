import { c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_1gnqINhK.mjs';
import 'kleur/colors';
import 'clsx';
import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs text-gray-200" id="score">
⭐️ Puntuación: ${scoreValue.trim()}/5
</span>`;
}, "/Users/damianalvarezholguin/code/personal-projects/dev-books/src/components/BookScore.astro", void 0);

const $$file = "/Users/damianalvarezholguin/code/personal-projects/dev-books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
