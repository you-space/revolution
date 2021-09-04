import { ServerPaginationMeta } from '@/plugins/you-space/machine'

export interface LocalState {
  data: any[]
  meta: Partial<ServerPaginationMeta>
  current: Record<string, string> | null
}

const state: LocalState = {
  data: [],
  meta: {},
  current: null,
}

export default state
