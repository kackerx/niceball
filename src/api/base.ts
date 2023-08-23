import axios from 'axios'
import { showDialog } from 'vant'

const instance = axios.create({ baseURL: '/api' })

instance.interceptors.response.use((resp) => {
    const { data: _data } = resp
    const { data, code, message } = _data
    if (code !== 0) {
        showDialog({ message: message }).then(R => {
        })
        return Promise.reject(message)
    }
    return data
})

export default instance