import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/reset.scss'

// elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 代码 高亮
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/monokai-sublime.css'
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
