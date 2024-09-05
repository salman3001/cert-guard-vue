import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { UserType } from '#utils/enums/user_type'
import { ProfileFactory } from './profile_factory.js'
import { OrganizationFactory } from './organization_factory.js'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      password: '123456789',
      isActive: false,
      emailVerified: false,
      userType: UserType.ORGANIZATION,
    }
  })
  .relation('profile', () => ProfileFactory)
  .relation('organization', () => OrganizationFactory)
  .build()
