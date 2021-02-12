import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './plugins/element.js'

// 引入全局样式表
import './assets/css/globle.css'
// 导入字体图标库
import './assets/fonts/iconfont.css'

// 引入axios包
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
