import { ServerPaginationMeta } from '@/plugins/you-space/machine'

export interface YoutubeState {
  data: any[]
  meta: Partial<ServerPaginationMeta>
  current: Record<string, string> | null
}

const state: YoutubeState = {
  data: [],
  meta: {},
  current: null,
}

export default state
