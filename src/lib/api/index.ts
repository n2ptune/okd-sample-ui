import axios from "axios"

axios.defaults.baseURL = 'http://okd-sample-server-khlee.apps.lab.okd.local'

export const write = (context: any) => {
  return axios.post('/note', context)
}

export const readAll = () => {
  return axios.get('/notes')
}

export const readOne = (id: string) => {
  return axios.get('/note/' + id)
}
