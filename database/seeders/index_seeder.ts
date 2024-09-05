import { UserFactory } from '#database/factories/user_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { UserType } from '../../app/utils/enums/user_type.js'

export default class extends BaseSeeder {
  static environment = ['development', 'testing', 'production']

  async run() {
    await UserFactory.merge([
      {
        fullName: 'Admin',
        email: 'admin@gmail.com',
        userType: UserType.ADMIN,
        isActive: true,
        emailVerified: true,
      },
    ])
      .with('profile', 1)
      .with('organization', 1)
      .create()

    await UserFactory.merge([
      {
        fullName: 'user',
        email: 'user@gmail.com',
        userType: UserType.ORGANIZATION,
        isActive: true,
        emailVerified: true,
      },
    ])
      .with('profile', 1)
      .with('organization', 1, (o) => {
        o.with('certificates', 4)
      })
      .createMany(10)
  }
}
