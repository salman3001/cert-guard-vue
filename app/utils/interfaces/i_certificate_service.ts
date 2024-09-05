import Certificate from '#models/certificate'
import { CreateCertificateDto } from '#validators/certificate'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'

export abstract class IcertificateService {
  abstract view(id: string): Promise<Certificate | null>
  abstract create(dto: CreateCertificateDto, userId: number): Promise<Certificate | null>
  abstract userCertificates(
    userId: number,
    page: number,
    perPage: number
  ): Promise<ModelPaginatorContract<Certificate>>
}
