import { BootArgs } from '@/types'
import moment from 'moment'

export function useMoment() {
  return moment
}

export default function ({ app }: BootArgs) {
  app.config.globalProperties.$moment = moment
}
