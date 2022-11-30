import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex'
console.log(store);

createApp(App).use(store).mount('#app')
