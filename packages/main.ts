import { createApp } from 'vue'
import App from './App.vue'

import Fixa from 'fixation-icon'

const app = createApp(App)

app.use(Fixa)
app.mount('#app')
