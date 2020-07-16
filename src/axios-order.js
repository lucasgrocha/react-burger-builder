import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burguer-ee66c.firebaseio.com/'
})

export default instance