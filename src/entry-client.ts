import { createApp } from './app'

createApp().then(async ({ app, router, store }) => {
  const storeInitialState = (window as any).INITIAL_STATE

  if (storeInitialState) {
    store.replaceState(storeInitialState)
  }

  await router.isReady()
  app.mount('#app')
})
