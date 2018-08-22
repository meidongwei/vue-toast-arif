import Vue from 'vue'
import App from './App.vue'

import Toast from './lib/index.js'
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
