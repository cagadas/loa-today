import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'https://listeners.loatoday.net'