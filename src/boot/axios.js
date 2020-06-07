import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'https://www.loatoday.net'