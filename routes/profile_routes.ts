import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const ProfileController = () => import('#controllers/profiles_controller')

router
  .group(() => {
    // signin
    router.get('me', [ProfileController, 'view']).as('me.view')
    router.post('me', [ProfileController, 'update']).as('me.post')
    router.get('me/avatar', [ProfileController, 'getUserAvatar']).as('me.avatar')
    router
      .post('me/update-password', [ProfileController, 'updatePassword'])
      .as('me.update-password')
    router
      .post('me/update-user-details', [ProfileController, 'updateUserDetails'])
      .as('me.update-user-details')

    router
      .post('me/update-organization', [ProfileController, 'updateOrganization'])
      .as('me.update-organization')
  })
  .prefix('profile')
  .as('profile')
  .use(middleware.auth())
