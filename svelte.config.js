import sveltePreprocess from "svelte-preprocess"
import * as dotenv from "dotenv"
import axios from 'axios'

axios.defaults.baseURL = process.env.API_URL

dotenv.config({ path: "./" })

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
  replace: [
      ["process.env.NODE_ENV", JSON.stringify(process.env.NODE_ENV)],
      ["process.env.API_URL", JSON.stringify(process.env.API_URL)],
    ]
  }),

  vite: false
}
