import axios from 'axios'

export interface ServerPaginationMeta {
  total: number
  last_page: number
  current_page: number
}
export interface ServerPagination<T> {
  meta: ServerPaginationMeta
  data: T[]
}

interface Filters {
  [prop: string]: any
  page?: number
  limit?: number
}

export function createMachine(baseURL = '/api/v1') {
  const api = axios.create({
    baseURL,
  })

  async function fetchTypeItems<T = any>(typeName: string, filters?: Filters) {
    const { data } = await api.get<ServerPagination<T>>(`types/${typeName}/items`, {
      params: filters,
    })

    return data
  }

  async function findItem<T = any>(typeName: string, id: string) {
    const { data } = await api.get<T>(`types/${typeName}/items/${id}`)

    return data
  }

  return {
    fetchTypeItems,
    findItem,
  }
}
