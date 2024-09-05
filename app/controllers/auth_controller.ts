import env from '#start/env'
import { IAuthService } from '#utils/interfaces/i_auth_service'
import {
  ForgotPasswordValidator,
  ResetPasswordValidator,
  SigninValidator,
  SignupValidator,
} from '#validators/auth'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import emitter from '@adonisjs/core/services/emitter'
import router from '@adonisjs/core/services/router'

@inject()
export default class AuthController {
  constructor(private readonly authService: IAuthService) {}

  async signin({ inertia }: HttpContext) {
    return inertia.render('auth/signin')
  }

  async signinPost({ request, response, auth, session }: HttpContext) {
    const dto = await request.validateUsing(SigninValidator)

    const user = await this.authService.signin(dto)

    if (!user) {
      session.flash('message', {
        type: 'error',
        message: 'Accont is not verified or inactive',
      })

      return response.redirect().back()
    } else {
      await auth.use('web').login(user)
      session.flash('message', {
        type: 'success',
        message: 'Login Successfull',
      })

      return response.redirect().toRoute('web.home')
    }
  }

  async signout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('auth.signin')
  }

  signup({ inertia }: HttpContext) {
    return inertia.render('auth/signup')
  }

  async signupPost({ request, session, response }: HttpContext) {
    const dto = await request.validateUsing(SignupValidator)
    const user = await this.authService.signup(dto)
    session.flash('message', {
      type: 'success',
      message: 'Signed up! Please check your email and verify to login',
    })
    emitter.emit('user:registered', user)
    return response.redirect().toRoute('auth.signin')
  }

  async confirmEmail({ request, session, params, response }: HttpContext) {
    if (request.hasValidSignature()) {
      const email = params?.email
      await this.authService.confirmEmail(email)
      session.flash('message', {
        type: 'success',
        message: 'Email Confimed',
      })

      return response.redirect().toRoute('auth.signin')
    } else {
      session.flash('message', {
        type: 'error',
        message: 'Invalid Request',
      })
      return response.redirect().toRoute('auth.signin')
    }
  }

  forgotPassword({ inertia }: HttpContext) {
    return inertia.render('auth/forgot-password')
  }

  async forgotPasswordPost({ request, session, response }: HttpContext) {
    const dto = await request.validateUsing(ForgotPasswordValidator)
    const user = await this.authService.sendforgetPasswordEmail(dto)
    if (user) {
      emitter.emit('forgot-password', user)
      session.flash('message', {
        type: 'info',
        message: 'Email sent succesfully',
      })
      return response.redirect().toRoute('auth.signin')
    } else {
      session.flash('message', {
        type: 'error',
        message: 'Email doesnt exist',
      })
      return response.redirect().back()
    }
  }

  resetPassword({ inertia, request, session }: HttpContext) {
    if (request.hasValidSignature()) {
      const { email } = request.qs()
      const submitUrl = router
        .builder()
        .prefixUrl(env.get('APP_URL'))
        .qs({ email: email })
        .makeSigned('auth.reset-password.post', { expiresIn: '30m' })

      return inertia.render('auth/reset-password', { submitUrl })
    } else {
      session.flash('message', {
        type: 'error',
        message: 'Invalid Request',
      })
      return inertia.render('auth/signin')
    }
  }

  async resetPasswordPost({ response, request, session }: HttpContext) {
    const { email } = request.qs()

    const dto = await request.validateUsing(ResetPasswordValidator)
    const user = await this.authService.resetPassword(dto, email)

    if (user) {
      session.flash('message', {
        type: 'success',
        message: 'Password reset Successfully',
      })
      response.redirect().toRoute('auth.signin')
    } else {
      session.flash('message', {
        type: 'error',
        message: 'Bad request',
      })
      response.redirect().back()
    }
  }
}
