import { ServerPaginationMeta } from '@/plugins/you-space/machine'
import { MutationTree } from 'vuex'
import { LocalState } from './state'

const mutations: MutationTree<LocalState> = {
  setData(state, data: any[]) {
    state.data = data
  },
  setMeta(state, meta: Partial<ServerPaginationMeta>) {
    state.meta = meta
  },
  setCurrent(state, value: any) {
    state.current = value
  },
}

export default mutations
