import axios from 'axios'
export default() => {
  return axios.create({
    baseURL: '/api/v1/storage',
    // todo implement ssl certificate communication
    withCredentials: false,
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
  })
}
