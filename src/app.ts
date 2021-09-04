import App from './App.vue'
import { createSSRApp } from 'vue'
import { createAppRouter } from './router'
import { createStore } from './store'

import '@/styles/index.scss'
import bootPlugins from './boot'

export async function createApp() {
  const app = createSSRApp(App)
  const router = createAppRouter()
  const store = createStore()

  await bootPlugins(app)

  app.use(store)

  app.use(router)

  return { app, router, store }
}
