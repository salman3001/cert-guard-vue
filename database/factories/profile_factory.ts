import factory from '@adonisjs/lucid/factories'
import Profile from '#models/profile'
import { UserFactory } from './user_factory.js'

export const ProfileFactory = factory
  .define(Profile, async () => {
    return {}
  })
  .relation('user', () => UserFactory)
  .build()
