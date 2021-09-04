import { ItemState } from './modules/item/state'
import { LocalState } from './modules/local/state'
import { YoutubeState } from './modules/youtube/state'

export interface RootState {
  item: ItemState
  youtube: YoutubeState
  local: LocalState
}
