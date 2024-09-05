import env from '#start/env'
import { IcertificateService } from '#utils/interfaces/i_certificate_service'
import { CreateCertificateValidator } from '#validators/certificate'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class CertificatesController {
  constructor(private readonly certificateService: IcertificateService) {}

  async view({ params, inertia }: HttpContext) {
    const id = params?.id
    const certificate = await this.certificateService.view(id)
    if (certificate) {
      return inertia.render('verify-certificate', { certificate })
    } else {
      return inertia.render('errors/not_found')
    }
  }

  async myCertificates({ inertia, auth, request }: HttpContext) {
    const userId = auth?.user?.id!
    const qs = request.qs()
    const page = qs?.page || 1
    const perPage = qs?.perPage || env.get('RECORDS_PER_PAGE')
    const certificates = await this.certificateService.userCertificates(userId, page, perPage)
    return inertia.render('my-certificate', { certificates })
  }

  async create({ request, inertia, session, auth, response }: HttpContext) {
    const dto = await request.validateUsing(CreateCertificateValidator)
    const userId = auth?.user?.id!
    const certificate = await this.certificateService.create(dto, userId)
    if (certificate) {
      session.flash('message', {
        type: 'success',
        message: 'Certificate added',
      })
      return response.redirect().toRoute('web.my-certificates')
    } else {
      session.flash('message', {
        type: 'error',
        message: 'Failed to add certificate! Bad request',
      })
      return inertia.render('errors/not_found')
    }
  }
}
