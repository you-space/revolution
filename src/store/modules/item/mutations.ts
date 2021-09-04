import { ServerPaginationMeta } from '@/plugins/you-space/machine'
import { MutationTree } from 'vuex'
import { ItemState } from './state'

const mutations: MutationTree<ItemState> = {
  setData(state, data: any[]) {
    state.data = data
  },
  setMeta(state, meta: Partial<ServerPaginationMeta>) {
    state.meta = meta
  },
}

export default mutations
