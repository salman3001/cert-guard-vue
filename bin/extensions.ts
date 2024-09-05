import { IResponseType } from '#utils/types/response_type'
import { Response } from '@adonisjs/core/http'
import string from '@adonisjs/core/helpers/string'
import { CamelCaseNamingStrategy, BaseModel } from '@adonisjs/lucid/orm'

Response.macro('custom', function (this: Response, opt: IResponseType<any>) {
  const errorObject = opt.errors ? { errors: opt.errors } : {}
  this.status(opt.code).send({
    message: opt.message,
    data: opt.data,
    success: opt.success,
    ...errorObject,
  })
  return this
})

declare module '@adonisjs/core/http' {
  interface Response {
    custom(opt: IResponseType<any>): Response
  }
}

export class MyCustomNamingStrategy extends CamelCaseNamingStrategy {
  serializedName(_model: typeof BaseModel, propertyName: string) {
    return string.camelCase(propertyName)
  }
}
