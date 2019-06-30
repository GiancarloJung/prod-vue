import { create } from 'apisauce'
import app from '../main'

const api = create({
  baseURL: 'http://127.0.0.1:8000'
})

api.addRequestTransform(() => {
  if (app !== undefined) {
    app.$Progress.start()
  }
})

api.addResponseTransform(() => {
  if (app !== undefined) {
    app.$Progress.finish()
  }
})

export default api
