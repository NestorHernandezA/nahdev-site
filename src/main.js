import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'
import router from './router'
import './plugins/vuetify'
import './plugins/markdown'
// import './plugins/ga'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GA,
  router
});

Vue.use(Router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')