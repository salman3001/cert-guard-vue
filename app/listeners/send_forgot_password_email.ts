import ResetPasswordNotification from '#mails/reset_password_notification'
import User from '#models/user'
import env from '#start/env'
import router from '@adonisjs/core/services/router'
import mail from '@adonisjs/mail/services/main'

export default class SendForgotPasswordEmail {
  async handle(user: User) {
    const signedUrl = router
      .builder()
      .prefixUrl(env.get('APP_URL'))
      .qs({ email: user.email })
      .makeSigned('auth.reset-password', { expiresIn: '30m' })

    console.log(signedUrl)

    await mail.sendLater(new ResetPasswordNotification(user, signedUrl))
  }
}
