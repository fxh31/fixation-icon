
import { createApp, type App } from 'vue'
import App from './App.vue'
import './assets/iconfont.js'

createApp(App).mount('#app')


export default {
  install: (app: App) => {
    app.component('FixIcon', App)
  }
}