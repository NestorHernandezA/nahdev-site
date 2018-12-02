import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
