import axios from 'axios'

const api = axios.create({
  baseURL: 'https://laferu-be-the-hero-backend.herokuapp.com/'
})

export default api
