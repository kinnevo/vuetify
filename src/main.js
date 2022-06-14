import Vue from 'vue'
import App from './App.vue'

console.log(Vue.version);  // 2.6.11

new Vue({
  render: h => h(App),
}).$mount('#app')