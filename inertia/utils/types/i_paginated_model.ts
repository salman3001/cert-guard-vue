export type IPaginatedModel<T> = {
  meta: {
    currentPage: number
    firstPage: number
    firstPageUrl: string
    lastPage: number
    lastPageUrl: string
    nextPageUrl: string
    perPage: number
    previousPageUrl: boolean
    total: number
  }
  data: T[]
}
