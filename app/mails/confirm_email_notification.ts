import User from '#models/user'
import env from '#start/env'
import { mailGenerator } from '#utils/mail_generator'
import { BaseMail } from '@adonisjs/mail'
import { Content } from 'mailgen'

export default class ConfirmEmailNotification extends BaseMail {
  subject = `Confirm your email - ${env.get('APP_NAME')}`

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
        title: `Welcome to ${env.get('APP_NAME')}`,
        intro: 'Your account has been created successfully!',
        action: {
          instructions: 'Click to verify your email',
          button: {
            color: '#22BC66', // otpional action button color
            text: 'Verify Email',
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
