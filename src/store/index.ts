import { createStore as basCreateStore, useStore as basUseStore } from 'vuex'
import { RootState } from './types'

const context = require.context('@/store/modules', true, /\.ts/)

const modules: any = {}

context.keys().forEach((filename) => {
  const [_, moduleName, key] = filename.replace('.ts', '').split('/')

  if (!modules[moduleName]) {
    modules[moduleName] = {
      namespaced: true,
    }
  }

  modules[moduleName][key] = context(filename).default
})

export function useStore() {
  return basUseStore<RootState>()
}

export function createStore() {
  return basCreateStore({
    state: {},
    mutations: {},
    actions: {},
    modules,
  })
}
