// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'babel-polyfill'
import apiConfig from '../config/api.config'
// import ElementUI from 'element-ui'
// 全局使用ElementUI
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
Vue.prototype.$ajax = axios // axios请求接口
axios.defaults.baseURL = apiConfig.baseUrl // 跨域初始化前缀地址
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
