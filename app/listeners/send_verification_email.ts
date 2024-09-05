import ConfirmEmailNotification from '#mails/confirm_email_notification'
import User from '#models/user'
import env from '#start/env'
import router from '@adonisjs/core/services/router'
import mail from '@adonisjs/mail/services/main'

export default class SendVerificationEmail {
  async handle(user: User) {
    const signedUrl = router
      .builder()
      .prefixUrl(env.get('APP_URL'))
      .params([user.email])
      .makeSigned('auth.confirm-email')

    console.log(signedUrl)

    await mail.sendLater(new ConfirmEmailNotification(user, signedUrl))
  }
}
