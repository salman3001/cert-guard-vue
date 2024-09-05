export type IResponseType<T> = {
  code: number
  success: boolean
  data?: T
  message?: string | null
  errors?: Array<{
    message: string
    field: string
    rule: string
  }>
}
