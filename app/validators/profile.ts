import vine from '@vinejs/vine'

export const ProfileUpdateValidator = vine.compile(
  vine.object({
    avatar: vine.file({ extnames: ['jpeg', 'jpg', 'png', 'webp'], size: '2mb' }).optional(),
  })
)

export type ProfileUpdateDto = Awaited<ReturnType<(typeof ProfileUpdateValidator)['validate']>>

export const UpdatePasswordValidator = vine.compile(
  vine.object({
    password: vine.string().minLength(8).maxLength(50),
    password_confirmation: vine.string().confirmed({ confirmationField: 'password' }),
  })
)

export type UpdatePasswordDto = Awaited<ReturnType<(typeof UpdatePasswordValidator)['validate']>>

export const UpdateUserDetailValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(2).optional(),
    phone: vine.string().minLength(9).maxLength(15).optional().optional(),
  })
)

export type UpdateUserDetailDto = Awaited<
  ReturnType<(typeof UpdateUserDetailValidator)['validate']>
>

export const UpdateOrganizationValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(2).optional(),
    detail: vine.string().minLength(2).maxLength(1500),
  })
)

export type UpdateOrganizationDto = Awaited<
  ReturnType<(typeof UpdateOrganizationValidator)['validate']>
>
