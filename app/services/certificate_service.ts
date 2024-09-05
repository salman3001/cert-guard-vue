import Certificate from '#models/certificate'
import Organization from '#models/organization'
import { IcertificateService } from '#utils/interfaces/i_certificate_service'
import { CreateCertificateDto } from '#validators/certificate'

export class CertificateService extends IcertificateService {
  async view(id: string): Promise<Certificate | null> {
    const certificate = await Certificate.query().where('id', id).preload('organization').first()
    return certificate
  }
  async create(dto: CreateCertificateDto, userId: number): Promise<Certificate | null> {
    const org = await Organization.findBy('user_id', userId)
    if (org) {
      const certificate = await org.related('certificates').create(dto)
      return certificate
    }
    return null
  }

  async userCertificates(userId: number, page: number, perPage: number) {
    const org = await Organization.findByOrFail('user_id', userId)
    const certificate = await Certificate.query()
      .where('organization_id', org.id)
      .paginate(page, perPage)

    return certificate
  }
}
