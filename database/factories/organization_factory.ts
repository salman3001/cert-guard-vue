import factory from '@adonisjs/lucid/factories'
import Organization from '#models/organization'
import { UserFactory } from './user_factory.js'
import { CertificateFactory } from './certificate_factory.js'

export const OrganizationFactory = factory
  .define(Organization, async ({ faker }) => {
    return {
      name: faker.lorem.word(20),
      detail: faker.lorem.paragraph(2),
    }
  })
  .relation('user', () => UserFactory)
  .relation('certificates', () => CertificateFactory)
  .build()
