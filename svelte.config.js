
// import adapter from "@sveltejs/adapter-static"; 
// import { vitePreprocess } from '@sveltejs/kit/vite';
// import { flush_render_callbacks } from "svelte/internal";
// // was "@sveltejs/adapter-auto"

// const dev = "production" === "development";

// /** @type {import(""@sveltejs/kit").Config} */
// const config = {
//     preprocess: vitePreprocess(),
//     kit: {
//         adapter: adapter({
//             pages: "docs",
//             assets: "docs",
//             fallback: undefined
            
//         }),
//         paths: {
//             // change below to your repo name
//             base: dev ? "" : "",
//         }
//         // hydrate the <div id="svelte"> element in src/app.html

//     }
// };

// export default config;

// import adapter from '@sveltejs/adapter-node';
// import { vitePreprocess } from '@sveltejs/kit/vite';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter({ out: 'build' }),
// 	},
// 	preprocess: vitePreprocess()
// };

// export default config;


import adapter from '@sveltejs/adapter-vercel';

export default {
    kit: {
        adapter: adapter({
            // see the 'Deployment configuration' section below
        })
    }
};