import Vue from 'vue'
import App from './App.vue'
import routers from './routers.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({routes:routers, mode: 'history'})
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
