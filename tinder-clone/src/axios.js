import axios from 'axios'

const instance = axios.create({
    baseURL:'https://tinder-backend-temp.herokuapp.com/'
})

export default instance;