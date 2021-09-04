import { ServerPaginationMeta } from '@/plugins/you-space/machine'

export interface ItemState {
  data: any[]
  meta: Partial<ServerPaginationMeta>
}

const state: ItemState = {
  data: [],
  meta: {},
}

export default state
