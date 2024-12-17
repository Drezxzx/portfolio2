/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderScript, b as addAttribute, e as renderHead, f as renderComponent, g as renderSlot, h as createAstro, s as spreadAttributes } from '../chunks/astro/server_BGHe_ltw.mjs';
import 'kleur/colors';
import 'clsx';
import { Analytics } from '@vercel/analytics/next';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center text-white justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="flex flex-row gap-6 w-[25rem] md:gap-10 opacity-90 p-1 md:w-[34rem] md:p-2 rounded-full items-center justify-center font-semibold" data-astro-cid-3ef6ksr2> <a href="#Inicio" class="hover:scale-110 transition hover:text-purple-500/90" data-astro-cid-3ef6ksr2>Inicio</a> <a href="#Experiencia" class="hover:scale-110 transition hover:text-purple-500/90" data-astro-cid-3ef6ksr2>Experiencia</a> <a href="#Proyectos" class="hover:scale-110 transition hover:text-purple-500/90" data-astro-cid-3ef6ksr2>Proyectos</a> <a href="#Sobre mi" class="hover:scale-110 transition hover:text-purple-500/90" data-astro-cid-3ef6ksr2>Sobre mi</a> </nav> </header>  ${renderScript($$result, "/Users/andres/dev/portfolio2/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/andres/dev/portfolio2/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="rounded-lg shadow m-4 bg-black/20 backdrop-blur-lg xl:w-[1120px] mx-auto w-full"> <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Andres</a> </span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"> <li> <a href="#Sobre mi" class="hover:underline me-4 md:me-6">Sobre mi</a> </li> <li> <a href="#Experiencia" class="hover:underline me-4 md:me-6">Experiencia</a> </li> <li> <a href="#Proyectos" class="hover:underline me-4 md:me-6">Proyectos</a> </li> </ul> </div> </footer>`;
}, "/Users/andres/dev/portfolio2/src/components/Footer.astro", void 0);

const $$Astro$o = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Analytics", Analytics, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/andres/dev/portfolio2/src/layouts/Layout.astro", void 0);

const $$Astro$n = createAstro();
const $$File = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$File;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"${spreadAttributes(Astro2.props)} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/File.astro", void 0);

const $$Beadge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex text-white items-center animate-pulse"> <span class="relative inline-flex hover:scale-105  transition overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-white  rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "/Users/andres/dev/portfolio2/src/components/Beadge.astro", void 0);

const $$Astro$m = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 250" width="256"${addAttribute(Astro2.props.class, "class")} height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="white"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Github.astro", void 0);

const $$Astro$l = createAstro();
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${maybeRenderHead()}<svg width="256" height="256"${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="white"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/linkedin.astro", void 0);

const $$Astro$k = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24"${addAttribute(Astro2.props.class, "class")} height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Mail.astro", void 0);

const $$Astro$j = createAstro();
const $$Breifcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Breifcase;
  return renderTemplate`<!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    class={Astro.props.class}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
        d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
    ></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path
        d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg
> -->${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"${addAttribute(Astro2.props.class, "class")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l18 0"></path><path d="M5 21v-14l8 -4v18"></path><path d="M19 21v-10l-6 -4"></path><path d="M9 9l0 .01"></path><path d="M9 12l0 .01"></path><path d="M9 15l0 .01"></path><path d="M9 18l0 .01"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Breifcase.astro", void 0);

const $$Astro$i = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24"${spreadAttributes(Astro2.props)} height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-prompt"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 7l5 5l-5 5"></path><path d="M13 17l6 0"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Code.astro", void 0);

const $$Astro$h = createAstro();
const $$Exp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Exp;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(Astro2.props.class, "class")} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 12h.01"></path><path d="M12 12h.01"></path><path d="M9 12h.01"></path><path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2"></path><path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Exp.astro", void 0);

const $$Astro$g = createAstro();
const $$Me = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Me;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(Astro2.props.class, "class")} width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Me.astro", void 0);

const $$Astro$f = createAstro();
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`rounded-full text-white bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center gap-x-2 items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2 ${Astro2.props.class}`, "class")}${addAttribute(Astro2.props.href, "href")}${addAttribute(Astro2.props.id, "id")} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/andres/dev/portfolio2/src/components/Social.astro", void 0);

const $$Astro$e = createAstro();
const $$Css = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(Astro2.props)} viewBox="0 0 452 520"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Css.astro", void 0);

const $$Astro$d = createAstro();
const $$Html = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(Astro2.props)} viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Html.astro", void 0);

const $$Astro$c = createAstro();
const $$Js = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Js;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="2500"${spreadAttributes(Astro2.props)} height="2500" viewBox="0 0 1052 1052"> <path fill="#f0db4f" d="M0 0h1052v1052H0z"></path> <path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path> </svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Js.astro", void 0);

const $$Astro$b = createAstro();
const $$TypeScript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TypeScript;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 256"${addAttribute(Astro2.props.class, "class")} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"></path><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/TypeScript.astro", void 0);

const $$Astro$a = createAstro();
const $$Php = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Php;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(Astro2.props)} viewBox="0 -1 100 50"><path fill="#fff" d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Php.astro", void 0);

const $$Astro$9 = createAstro();
const $$Sql = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Sql;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(Astro2.props)} preserveAspectRatio="xMidYMid" viewBox="0 0 256 252"> <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B"></path> <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B"></path> </svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Sql.astro", void 0);

const $$Astro$8 = createAstro();
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 228"${addAttribute(Astro2.props.class, "class")} width="256" height="228" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/React.astro", void 0);

const $$Astro$7 = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 154" width="256"${addAttribute(Astro2.props.class, "class")} height="154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop> <stop stop-color="#0ED7B5" offset="100%"></stop> </linearGradient></defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Tailwind.astro", void 0);

const $$Astro$6 = createAstro();
const $$Node = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Node;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 289" width="256"${spreadAttributes(Astro2.props)} height="289" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571Z" fill="#539E43"></path> </svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Node.astro", void 0);

const $$Tecnologies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-row w-full justify-around"> <div class="flex flex-col gap-5"> ${renderComponent($$result, "Html", $$Html, { "class": "size-16 hover:scale-110 transition" })} ${renderComponent($$result, "Php", $$Php, { "class": "size-16 hover:scale-110 transition" })} ${renderComponent($$result, "Js", $$Js, { "class": "size-16 hover:scale-110 transition" })} </div> <div class="flex flex-col gap-5"> ${renderComponent($$result, "Css", $$Css, { "class": "size-16 hover:scale-110 transition" })} ${renderComponent($$result, "Sql", $$Sql, { "class": "size-16 hover:scale-110 transition" })} ${renderComponent($$result, "Node", $$Node, { "class": "size-16 hover:scale-110 transition" })} </div> <div class="flex flex-col gap-5"> ${renderComponent($$result, "React", $$React, { "class": "size-16 hover:scale-110 transition" })} ${renderComponent($$result, "Tailwind", $$Tailwind, { "class": "size-16 hover:scale-110 transition" })} ${renderComponent($$result, "TypeScript", $$TypeScript, { "class": "size-16 hover:scale-110 transition" })} </div> </article>`;
}, "/Users/andres/dev/portfolio2/src/components/Tecnologies.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="flex gap-6 flex-col-reverse  md:flex-row "> <div class="flex flex-col text-white gap-y-4"> <p class="text-base md:text-lg  text-pretty">
Me llamo <span class="text-purple-400/90">Andrés</span>, soy un programador web full stack apasionado por crear applicaiones con muchas <span class="text-purple-400/90">funcionalidades</span>, apasionado por aprender lenguajes y freamworks webs.
</p> <p class="text-base  md:text-lg text-pretty"> <span class="text-purple-400/80 ">Actualmente</span> me encuentro trabajando creando bases de datos en digital target. <span class="text-purple-400/80 ">Tambien desarrollo</span> entornos para la explotación de estas bases de datos.
</p> </div> <img src="./Andres.jpeg" class="size-56 rotate-3 shadow-lg m-auto shadow-white/40 rounded-md object-cover" alt="Imagen de Andres Rodriguez"> </article>`;
}, "/Users/andres/dev/portfolio2/src/components/About.astro", void 0);

const $$Astro$5 = createAstro();
const $$NextJs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NextJs;
  return renderTemplate`${maybeRenderHead()}<svg width="180" height="180" viewBox="0 0 180 180"${addAttribute(Astro2.props.class, "class")} fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_408_139" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"> <circle cx="90" cy="90" r="90" fill="black"></circle> </mask> <g mask="url(#mask0_408_139)"> <circle cx="90" cy="90" r="87" fill="black" stroke="white" stroke-width="6"></circle> <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"></path> <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"></rect> </g> <defs> <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/NextJs.astro", void 0);

const $$Astro$4 = createAstro();
const $$Turso = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Turso;
  return renderTemplate`${maybeRenderHead()}<svg fill="none" height="170"${addAttribute(Astro2.props.class, "class")} viewBox="0 0 201 170" width="201" xmlns="http://www.w3.org/2000/svg"><path d="m100.055 170c-2.1901 0-18.2001-12.8-21.3001-16.45-2.44 3.73-6.44 7.96-6.44 7.96-11.05-5.57-25.17-20.06-27.83-25.13-2.62-5-12.13-62.58-12.39-79.3-.34-9.41 5.85-28.49 67.9601-28.49 62.11 0 68.29 19.08 67.96 28.49-.25 16.72-9.76 74.3-12.39 79.3-2.66 5.07-16.78 19.56-27.83 25.13 0 0-4-4.23-6.44-7.96-3.1 3.65-19.11 16.45-21.3 16.45z" fill="#1ebca1"></path><path d="m100.055 132.92c-20.7301 0-33.9601-10.95-33.9601-10.95l1.91-26.67-21.75-1.94-3.91-31.55h115.4301l-3.91 31.55-21.75 1.94 1.91 26.67s-13.23 10.95-33.96 10.95z" fill="#183134"></path><path d="m121.535 75.79 78.52-27.18c-4.67-27.94-29.16-48.61-29.16-48.61v30.78l-14.54 3.75-9.11-10.97-7.8 15.34-39.38 10.16-39.3801-10.16-7.8-15.34-9.11 10.97-14.54-3.75v-30.78s-24.50997 20.67-29.1799684 48.61l78.5199684 27.18-2.8 37.39c6.7 1.7 13.75 3.39 24.2801 3.39 10.53 0 17.57-1.69 24.27-3.39l-2.8-37.39z" fill="#4ff8d2"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Turso.astro", void 0);

const $$Astro$3 = createAstro();
const $$Preview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Preview;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(Astro2.props.class, "class")} width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 15l6 -6"></path><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path></svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/Preview.astro", void 0);

const $$Astro$2 = createAstro();
const $$ReactRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ReactRouter;
  return renderTemplate`${maybeRenderHead()}<svg width="94"${addAttribute(Astro2.props.class, "class")} height="61" viewBox="0 0 94 61" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M72.7315 20.9357C70.0548 20.0941 68.6725 20.3778 65.8649 20.071C61.5246 19.5976 59.7954 17.9013 59.0619 13.5356C58.6514 11.0985 59.1361 7.53022 58.0881 5.32106C56.0839 1.10875 51.3943 -0.780439 46.6828 0.297843C42.7049 1.20956 39.3951 5.18518 39.2117 9.266C39.0021 13.9254 41.657 17.901 46.2156 19.273C48.3814 19.9261 50.6825 20.2548 52.9444 20.4214C57.0925 20.7238 57.4113 23.0297 58.5335 24.9277C59.2409 26.1243 59.9264 27.3034 59.9264 30.8714C59.9264 34.4394 59.2365 35.6185 58.5335 36.8151C57.4113 38.7087 56.0271 39.9491 51.879 40.2559C49.6171 40.4225 47.3116 40.7513 45.1502 41.4044C40.5916 42.7807 37.9367 46.7519 38.1463 51.4113C38.3297 55.4921 41.6395 59.4678 45.6174 60.3795C50.3289 61.4621 55.0185 59.5686 57.0227 55.3563C58.075 53.1471 58.6514 50.6443 59.0619 48.2072C59.7998 43.8414 61.5289 42.1451 65.8649 41.6717C68.6725 41.3649 71.5783 41.6717 74.2093 40.177C76.9895 38.1456 79.4734 35.0968 79.4734 30.8714C79.4734 26.6459 76.7967 22.2156 72.7315 20.9357Z" fill="#F44250"></path> <path d="M28.1997 40.7739C22.7285 40.7739 18.2656 36.3027 18.2656 30.8213C18.2656 25.3399 22.7285 20.8687 28.1997 20.8687C33.6709 20.8687 38.1338 25.3399 38.1338 30.8213C38.1338 36.2983 33.6665 40.7739 28.1997 40.7739Z" fill="#121212"></path> <path d="M9.899 61C4.43661 60.9868 -0.0130938 56.498 2.89511e-05 51.0122C0.0132099 45.5353 4.4936 41.0773 9.96914 41.0948C15.4359 41.108 19.8856 45.5968 19.8681 51.0825C19.8549 56.5551 15.3745 61.0131 9.899 61Z" fill="#121212"></path> <path d="M83.7137 60.9998C78.2339 61.0304 73.7361 56.5901 73.7052 51.122C73.6747 45.632 78.1068 41.1258 83.5646 41.0949C89.0444 41.0643 93.5423 45.5046 93.5731 50.9727C93.6036 56.4583 89.1716 60.9689 83.7137 60.9998Z" fill="#121212"></path> </svg>`;
}, "/Users/andres/dev/portfolio2/src/icons/ReactRouter.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    PHP: {
      name: "PHP",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$Php
    },
    JS: {
      name: "JS",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$Js
    },
    HTML: {
      name: "html",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$Html
    },
    CSS: {
      name: "css",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$Css
    },
    NODE_JS: {
      name: "node.js",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$Node
    },
    MYSQL: {
      name: "mysql",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$Sql
    },
    TAILWIND: {
      name: "Tailwind",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$Tailwind
    },
    ReactRouter: {
      name: "ReactRouter",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$ReactRouter
    },
    TYPESCRYPT: {
      name: "TypeScript",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$TypeScript
    },
    REACT: {
      name: "React",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$React
    },
    TURSO: {
      name: "TURSO",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$Turso
    },
    NEXTJS: {
      name: "NEXTJS",
      class: "rounded-full bg-white/5 hover:scale-110 transition hover:bg-white/10 border border-white/10 flex justify-center items-center mg:gap-x-4 mg:py-2 mg:px-4 py-1 text-xs mg:text-base px-2",
      icon: $$NextJs
    }
  };
  const PROJECTS = [
    {
      tittle: "Zdev la red social de desarrolladores",
      description: `Zdev es una red social dise\xF1ada espec\xEDficamente para desarrolladores. En esta plataforma, puedes compartir fragmentos de c\xF3digo, participar en discusiones t\xE9cnicas, publicar tus proyectos y mucho m\xE1s. La aplicaci\xF3n est\xE1 desarrollada con Next.js y utiliza Turso DB como base de datos principal. Cuenta con un sistema de recomendaciones personalizado que se adapta a tus lenguajes de programaci\xF3n favoritos. Adem\xE1s, todas las API routes est\xE1n optimizadas con paginaci\xF3n, lo que garantiza un rendimiento eficiente incluso con grandes vol\xFAmenes de datos. zDev tambi\xE9n incluye un sistema de notificaciones en tiempo real para mantenerte al tanto de las actualizaciones importantes, brindando una experiencia interactiva y din\xE1mica.`,
      img: "./project7.png",
      tags: [TAGS.TYPESCRYPT, TAGS.NEXTJS, TAGS.TURSO],
      github: "https://github.com/Drezxzx/zdev",
      link: "https://zdev.es/"
    },
    {
      tittle: "Translated.io",
      description: "Traductor creado en base a una api, que cuenta con todas las funcionalidaes de un traductor. Constuido con tecnolog\xEDas frontend. Un dise\xF1o completamente responsive",
      img: "./project2.png",
      tags: [TAGS.TYPESCRYPT, TAGS.TAILWIND, TAGS.REACT, TAGS.NEXTJS],
      github: "https://github.com/Drezxzx/tranlated.io",
      link: "https://tranlated-io.vercel.app/"
    },
    {
      tittle: "Acortador Url",
      description: "Acortador de urls, desarrollado completamente por mi, utilizando turso db para la base de datos.",
      img: "./project5.png",
      tags: [TAGS.TYPESCRYPT, TAGS.NEXTJS, TAGS.TURSO],
      github: "https://github.com/Drezxzx/shorter-url",
      link: "https://d-orcin-nine.vercel.app/"
    },
    {
      tittle: "Coffe-landing-page",
      description: "Landing page creada con un api externa de una caf\xE9teria que muestra todos los productos de la caf\xE9teria y te permite ver los productos que estan disponibles y los que no.",
      img: "./project1.png",
      tags: [TAGS.TYPESCRYPT, TAGS.TAILWIND, TAGS.REACT],
      github: "https://github.com/Drezxzx/coffe-landing-page",
      link: "https://coffe-landing-page-lemon.vercel.app/"
    },
    {
      tittle: "Creador de codigosQR",
      description: "Creador de codigos QR, con un dise\xF1o minimalista y una interfaz de usuario muy amigable. Creado con tailwindcss y react, completamente responsive",
      img: "./project6.png",
      tags: [TAGS.TYPESCRYPT, TAGS.TAILWIND, TAGS.REACT, TAGS.NEXTJS],
      github: "https://github.com/Drezxzx/qr-generator",
      link: "https://qr-generator-eta-seven.vercel.app/"
    },
    {
      tittle: "Tienda De Mov\xEDles",
      description: "Tienda completa desarrolada con react, que cuenta con las funcionalidades de login, carrito de compra, detalles de productos, busquedas y compras. Apoyada con una api prop\xEDa",
      img: "./project4.png",
      tags: [
        TAGS.JS,
        TAGS.TAILWIND,
        TAGS.TYPESCRYPT,
        TAGS.ReactRouter,
        TAGS.REACT,
        TAGS.MYSQL,
        TAGS.NODE_JS
      ],
      github: "https://github.com/Drezxzx/Store-react",
      link: "https://store-react-xi.vercel.app/"
    }
  ];
  return renderTemplate`${PROJECTS.map(({ tittle, description, img, github, tags, link }) => renderTemplate`${maybeRenderHead()}<article class="size-30 mb-24" data-astro-cid-amng4zvp><div data-astro-cid-amng4zvp><h3 class="md:text-2xl lg:text-3xl text-xl  flex flex-row justify-between mb-2 font-semibold text-purple-400/80 " data-astro-cid-amng4zvp>${tittle}${" "}<ul class="flex text-white flex-row gap-x-2" data-astro-cid-amng4zvp><li data-astro-cid-amng4zvp>${renderComponent($$result, "Social", $$Social, { "class": " bg-[#1f2937] hover:bg-[#242d39]", "href": github, "data-astro-cid-amng4zvp": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Github", $$Github, { "class": "size-5 md:size-6 lg:size-7", "data-astro-cid-amng4zvp": true })}
Repositorio
` })}</li><li data-astro-cid-amng4zvp>${renderComponent($$result, "Social", $$Social, { "class": "  bg-[#1f2937] hover:bg-[#242d39]", "href": link, "data-astro-cid-amng4zvp": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Preview", $$Preview, { "class": "size-5 md:size-6 lg:size-7", "data-astro-cid-amng4zvp": true })}
Preview
` })}</li></ul></h3><p class="text-base text-white  md:text-xl mb-4 md:mb-6 text-pretty" data-astro-cid-amng4zvp>${description}${" "}</p><ul class="flex flex-row gap-x-1 gap-3 md:gap-x-2 min-w-2 flex-wrap md:min-w-120  mb-2" data-astro-cid-amng4zvp>${tags.map((tag) => renderTemplate`<li data-astro-cid-amng4zvp><span${addAttribute(` text-xs text-white font-semibold flex lg:gap-x-2 gap-x-1 items-center flex-row rounded-full py-1 px-2 ${tag.class}`, "class")} data-astro-cid-amng4zvp>${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-5", "data-astro-cid-amng4zvp": true })}${tag.name}</span></li>`)}</ul></div><div class="overflow-hidden rounded shadow-2xl shadow-purple-400/20" data-astro-cid-amng4zvp><img class="rounded object-cover transition-transform ease-in-out duration-300 hover:scale-[1.04]  "${addAttribute(img, "src")} alt="Captura del proyecto" data-astro-cid-amng4zvp></div></article>`)}`;
}, "/Users/andres/dev/portfolio2/src/components/Projects.astro", void 0);

const $$Astro$1 = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: classname, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${classname} w-full lg:w-[740px] mx-auto pb-24  `, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/andres/dev/portfolio2/src/components/SectionContainer.astro", void 0);

const $$Astro = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { tittle, date, description, place } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="mb-10 ms-4"> <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-gray-200/80 ">${date}</time> <h3 class="text-lg font-semibold text-purple-400/80 mt-2">${tittle}</h3> <p class="my-2 mb-2 text-sm font-normal text-gray-200/80">${place}</p> <p class="mb-4 text-base font-normal text-gray-200 text-pretty ">-${description}</p> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </li>`;
}, "/Users/andres/dev/portfolio2/src/components/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCE = [
    {
      date: "Abril/2024-Octubre/2024",
      tittle: "Programador Junior ",
      place: "Digital Target",
      description: `
Fui responsable de la gesti\xF3n integral del \xE1rea inform\xE1tica de la empresa, abarcando desde el dise\xF1o y desarrollo de bases de datos hasta el an\xE1lisis avanzado de datos. Cre\xE9 aplicaciones internas para optimizar procesos mediante la explotaci\xF3n eficiente de la informaci\xF3n. Adem\xE1s, desarroll\xE9 varias aplicaciones web privadas adaptadas a las necesidades de la organizaci\xF3n, integrando funcionalidades espec\xEDficas para la gesti\xF3n de datos. Apliqu\xE9 t\xE9cnicas de web scraping con Node.js y Python para extraer informaci\xF3n relevante de diversas fuentes y dise\xF1\xE9 procesos automatizables que mejoraron notablemente la eficiencia operativa.`
    },
    {
      date: "Febrero/2024-Marzo/2024",
      tittle: "Practicas Programador Junior ",
      place: "Digital Target",
      description: "Durante mis pr\xE1cticas, particip\xE9 en la creaci\xF3n de bases de datos, lo que me permiti\xF3 adquirir habilidades en el dise\xF1o y gesti\xF3n de informaci\xF3n estructurada."
    },
    {
      date: "Agoosto/2019-Mayo/2020",
      tittle: "Practicas de bachillerato administrativo",
      place: "Ayuntamento de Santo Domingo(Republica Dominicana)",
      description: "Manejo de inventario haciendo uso de excel"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 dark:border-gray-700 ml-3"> ${EXPERIENCE.map((exp) => renderTemplate`${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...exp })}`)} </ol>`;
}, "/Users/andres/dev/portfolio2/src/components/Experience.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio De Andres Desarrollador" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 animate-fade-in-down"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Inicio", "class": "py-44  pb-32" }, { "default": ($$result3) => renderTemplate` <img src="./Andres.jpeg" alt="Logo" class="rounded-full w-12 h-12 object-cover mb-2"> <h1 class="lg:text-5xl text-white  md:text-4xl text-2xl font-bold flex pb-6 lg:pb-10 flex-row gap-x-4">
Hey, soy Andrés
<div class="flex items-center justify-center"> <a class="flex items-center justify-center" target="_blank" href="https://www.linkedin.com/in/andr%C3%A9s-rodr%C3%ADguez-3153a1299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">${renderComponent($$result3, "Beadge", $$Beadge, {}, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })}</a> </div> </h1> <h2 class="text-white text-xl lg:text-3xl max-w-[700px] text-wrap"> <span class="text-purple-400/90">1 año de experiecia</span>,
<span class="opacity-80">Desarrollador web.</span> <span class="opacity-80">De Madrid, España 🇪🇸.</span> <span class="opacity-80">Especializado en crear</span> <span class="opacity-80">apliclaciones web y bases de datos relacionadas.</span> </h2> <nav class="flex flex-wrap  gap-4 mt-8"> ${renderComponent($$result3, "Social", $$Social, { "href": "https://github.com/Drezxzx" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Github", $$Github, { "class": "text-white mg:size-6 size-4" })}
Github
` })} ${renderComponent($$result3, "Social", $$Social, { "href": "https://es.linkedin.com/in/andr%C3%A9s-rodr%C3%ADguez-3153a1299?original_referer=https%3A%2F%2Fwww.google.com%2F" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Linkedin", $$Linkedin, { "class": "text-white mg:size-6 size-4" })}
Linkedind
` })} ${renderComponent($$result3, "Social", $$Social, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Mail", $$Mail, {})}
andres250197@hotmail.com
` })} ${renderComponent($$result3, "Social", $$Social, { "class": "cursor-pointer", "id": "pdf" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "File", $$File, {})} <button>Ver CV</button> ` })} </nav> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Experiencia" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl text-white  font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "Breifcase", $$Breifcase, { "class": "size-7" })}
Experiecia laboral </h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl text-white  font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "Code", $$Code, { "class": "size-7" })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Sobre mi" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl text-white  font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "Me", $$Me, { "class": "Size-7" })}
Sobre mí
</h2> ${renderComponent($$result3, "About", $$About, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Tecnologias" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl text-white  font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "Exp", $$Exp, { "class": "Size-7" })}
Tecnologías
</h2> ${renderComponent($$result3, "Tecnologies", $$Tecnologies, {})} ` })} </main> ` })} ${renderScript($$result, "/Users/andres/dev/portfolio2/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/andres/dev/portfolio2/src/pages/index.astro", void 0);

const $$file = "/Users/andres/dev/portfolio2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
