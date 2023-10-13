import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/kit/vite"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: vitePreprocess({
        scss: {
            prependData: "@import './src/lib/scss/base.scss';"
        }
    }),
    kit: {
        adapter: adapter()
    },
}

// noinspection JSUnusedGlobalSymbols
export default config
