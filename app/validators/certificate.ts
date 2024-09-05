import vine from '@vinejs/vine'

export const CreateCertificateValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(4).maxLength(256),
    issuedTo: vine.string().minLength(4).maxLength(50),
    detail: vine.string().minLength(2).maxLength(1500),
  })
)

export type CreateCertificateDto = Awaited<
  ReturnType<(typeof CreateCertificateValidator)['validate']>
>
