import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Chat from 'vue-beautiful-chat'
import store from './store'

Vue.use(Chat)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
