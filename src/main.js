import Vue from 'vue';
import App from './App.vue';
import router from "./router/index";
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
