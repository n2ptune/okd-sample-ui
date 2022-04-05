import axios from "axios"

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? process.env.APP_API_URL : 'http://localhost:3033'

export const write = (context: any) => {
  return axios.post('/note', context)
}

export const readAll = () => {
  return axios.get('/notes')
}

export const readOne = (id: string) => {
  return axios.get('/note/' + id)
}
