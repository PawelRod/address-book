import Vue from 'vue'
import App from './App.vue'
import VueLodash from 'vue-lodash'

const options = { name: 'lodash' } // customize the way you want to call it

Vue.use(VueLodash, options) // options is optional

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')