import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import mes from '../src/components/message/message'
import store from '../src/store/store'
Vue.config.productionTip = false
Vue.use(mes)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
