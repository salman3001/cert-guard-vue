import vine from '@vinejs/vine'

export const SigninValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
  })
)

export type SigninDto = Awaited<ReturnType<(typeof SigninValidator)['validate']>>

export const SignupValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(2).maxLength(50),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const user = await db.from('users').where('email', value).first()
        return user ? false : true
      }),
    password: vine.string().minLength(8).maxLength(50),
    phone: vine.string().minLength(9).maxLength(15).optional(),
    companyName: vine.string().minLength(2),
  })
)

export type SignupDto = Awaited<ReturnType<(typeof SignupValidator)['validate']>>

export const ForgotPasswordValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
  })
)

export type ForgotPasswordDto = Awaited<ReturnType<(typeof ForgotPasswordValidator)['validate']>>

export const ResetPasswordValidator = vine.compile(
  vine.object({
    password: vine.string().minLength(8).maxLength(50),
    password_confirmation: vine.string().confirmed({ confirmationField: 'password' }),
  })
)

export type ResetPasswordDto = Awaited<ReturnType<(typeof ResetPasswordValidator)['validate']>>
