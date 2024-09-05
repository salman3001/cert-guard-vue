import User from '#models/user'
import env from '#start/env'
import { mailGenerator } from '#utils/mail_generator'
import { BaseMail } from '@adonisjs/mail'
import { Content } from 'mailgen'

export default class ResetPasswordNotification extends BaseMail {
  subject = `Reset your email - ${env.get('APP_NAME')}`

  /**
   *
   */
  constructor(
    private readonly user: User,
    private readonly signedUrl: string
  ) {
    super()
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  prepare() {
    const mail: Content = {
      body: {
        name: this.user.fullName,
        title: 'Forget password?',
        intro:
          'You have recieve this email because password reset request for account was recieved',
        action: {
          instructions: 'Please click to reset your password',
          button: {
            color: '#22BC66', // otpional action button color
            text: 'Reset Password',
            link: this.signedUrl,
          },
        },
      },
    }

    const html = mailGenerator.generate(mail)
    const text = mailGenerator.generatePlaintext(mail)

    this.message.to(this.user.email)
    this.message.html(html)
    this.message.text(text)
  }
}
