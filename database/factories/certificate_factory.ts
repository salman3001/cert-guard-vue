import factory from '@adonisjs/lucid/factories'
import Certificate from '#models/certificate'
import { OrganizationFactory } from './organization_factory.js'

export const CertificateFactory = factory
  .define(Certificate, async ({ faker }) => {
    return {
      title: faker.lorem.lines(1),
      issuedTo: faker.person.fullName(),
    }
  })
  .relation('organization', () => OrganizationFactory)
  .build()
