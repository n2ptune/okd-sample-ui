import axios from "axios"

console.log(process.env.API_URL)

export const write = (context: any) => {
  return axios.post("/note", context)
}

export const readAll = () => {
  return axios.get("/notes")
}

export const readOne = (id: string) => {
  return axios.get("/note/" + id)
}
