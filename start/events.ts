import User from '#models/user'
import emitter from '@adonisjs/core/services/emitter'

const SendVerificationEmailListner = () => import('#listeners/send_verification_email')
const SendForgotPasswordEmail = () => import('#listeners/send_forgot_password_email')

emitter.on('user:registered', [SendVerificationEmailListner, 'handle'])
emitter.on('forgot-password', [SendForgotPasswordEmail, 'handle'])

emitter.onError((event, error) => {
  console.log('Error occured on event - ', event, error)
})

declare module '@adonisjs/core/types' {
  interface EventsList {
    'user:registered': User
    'forgot-password': User
  }
}
