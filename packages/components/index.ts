import '../assets/iconfont.js'
import FixationIcon from './FixationIcon.vue'
import type { App } from 'vue'

export default {
  install: (app: App) => {
    app.component('FixIcon', FixationIcon)
  }
}
