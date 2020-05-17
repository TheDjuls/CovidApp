import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://coronavirus-19-api.herokuapp.com'
  })
  
Vue.prototype.$axios = axiosInstance

export { axiosInstance }
