import vine from '@vinejs/vine'
import { UserType } from '../utils/enums/user_type.js'

export const UserCreateValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(2),
    email: vine
      .string()
      .email({})
      .normalizeEmail()
      .unique(async (db, value) => {
        const user = await db.from('users').where('email', value).first()
        return !user
      }),
    password: vine.string().minLength(8).maxLength(50),
    phone: vine.string().minLength(9).maxLength(15).optional(),
    userType: vine.enum(UserType),
    isActive: vine.boolean().optional(),
    emailVerified: vine.boolean().optional(),
  })
)

export type UserCreateDto = Awaited<ReturnType<(typeof UserCreateValidator)['validate']>>

export const UserUpdateValidator = vine.withMetaData<{ userId: number }>().compile(
  vine.object({
    fullName: vine.string().minLength(2).optional(),
    email: vine
      .string()
      .email({})
      .normalizeEmail()
      .unique(async (db, value, field) => {
        const user = await db
          .from('users')
          .where('email', value)
          .whereNot('id', field.meta.userId)
          .first()
        return !user
      })
      .optional(),
    password: vine.string().minLength(8).maxLength(50).optional(),
    phone: vine.string().minLength(9).maxLength(15).optional(),
    userType: vine.enum(UserType).optional(),
    isActive: vine.boolean().optional(),
    emailVerified: vine.boolean().optional(),
  })
)

export type UserUpdateDto = Awaited<ReturnType<(typeof UserUpdateValidator)['validate']>>
