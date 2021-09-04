import { ServerPaginationMeta } from '@/plugins/you-space/machine'
import { MutationTree } from 'vuex'
import { ItemState } from './state'

const mutations: MutationTree<ItemState> = {
  SET_DATA(state, data: any[]) {
    state.data = data
  },
  SET_META(state, meta: Partial<ServerPaginationMeta>) {
    state.meta = meta
  },
}

export default mutations
