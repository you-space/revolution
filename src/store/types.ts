import { ItemState } from './modules/item/state'
import { YoutubeState } from './modules/youtube/state'

export interface RootState {
  item: ItemState
  youtube: YoutubeState
}
