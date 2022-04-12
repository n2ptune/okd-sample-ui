import sveltePreprocess from "svelte-preprocess"
import * as dotenv from "dotenv"

dotenv.config({ path: "./" })

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    replace: [
      ["process.env.NODE_ENV", JSON.stringify(process.env.NODE_ENV)],
    ]
  }),

  vite: false
}
