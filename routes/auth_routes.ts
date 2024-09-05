import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const AuthController = () => import('#controllers/auth_controller')

router
  .group(() => {
    router
      .group(() => {
        // signin
        router.get('signin', [AuthController, 'signin']).as('signin')
        router.post('signin', [AuthController, 'signinPost']).as('signin.post')

        //signup
        router.get('signup', [AuthController, 'signup']).as('signup')
        router.post('signup', [AuthController, 'signupPost']).as('signup.post')
        router.get('confirm-email/:email', [AuthController, 'confirmEmail']).as('confirm-email')

        // forgot pasword
        router.get('forget-password', [AuthController, 'forgotPassword']).as('forget-password')
        router
          .post('forget-password', [AuthController, 'forgotPasswordPost'])
          .as('forget-password.post')

        // reset password
        router.get('reset-password', [AuthController, 'resetPassword']).as('reset-password')
        router
          .post('reset-password', [AuthController, 'resetPasswordPost'])
          .as('reset-password.post')
      })
      .use(middleware.guest())

    router.get('signout', [AuthController, 'signout']).as('signout')
  })
  .prefix('auth')
  .as('auth')
