import type { HttpContext } from '@adonisjs/core/http'

import { IprofileService } from '#utils/interfaces/i_profile_service'
import { inject } from '@adonisjs/core'
import {
  ProfileUpdateValidator,
  UpdateOrganizationValidator,
  UpdatePasswordValidator,
  UpdateUserDetailValidator,
} from '#validators/profile'
import { IorganizationService } from '#utils/interfaces/i_organization_service'

@inject()
export default class ProfilesController {
  constructor(
    private profileService: IprofileService,
    private orgService: IorganizationService
  ) {}

  async view({ inertia, auth }: HttpContext) {
    const userId = auth.user?.id!
    const profile = await this.profileService.view(userId)
    const organization = await this.orgService.viewByUserId(userId)
    return inertia.render('profile', { profile, organization })
  }

  async update({ auth, request, session, response }: HttpContext) {
    const userId = auth.user?.id!
    const dto = await request.validateUsing(ProfileUpdateValidator)
    const profile = await this.profileService.update(userId, dto)
    if (!profile) {
      session.flash('message', {
        type: 'error',
        message: 'Bad Request',
      })
      return response.redirect().back()
    }

    session.flash('message', {
      type: 'success',
      message: 'Profle Uppdated',
    })

    return response.redirect().back()
  }

  async getUserAvatar({ auth }: HttpContext) {
    const userId = auth.user?.id!
    const avatar = await this.profileService.getUserAvatar(userId)
    return { avatar }
  }

  async updatePassword({ auth, request, session, response }: HttpContext) {
    const userId = auth.user?.id!
    const dto = await request.validateUsing(UpdatePasswordValidator)
    const user = await this.profileService.updatePassword(userId, dto)
    if (!user) {
      session.flash('message', {
        type: 'error',
        message: 'Bad Request',
      })
    }

    session.flash('message', {
      type: 'success',
      message: 'Password Updated',
    })
    return response.redirect().back()
  }

  async updateUserDetails({ auth, request, session, response }: HttpContext) {
    const userId = auth.user?.id!
    const dto = await request.validateUsing(UpdateUserDetailValidator)
    const user = await this.profileService.updateUserDetails(userId, dto)
    if (!user) {
      session.flash('message', {
        type: 'error',
        message: 'Bad Request',
      })
      return response.redirect().back()
    }

    session.flash('message', {
      type: 'success',
      message: 'User details Uppdated',
    })

    return response.redirect().back()
  }

  async updateOrganization({ auth, request, session, response }: HttpContext) {
    const userId = auth.user?.id!
    const dto = await request.validateUsing(UpdateOrganizationValidator)

    const org = await this.profileService.updateOrganization(userId, dto)
    if (!org) {
      session.flash('message', {
        type: 'error',
        message: 'Bad Request',
      })
      return response.redirect().back()
    }

    session.flash('message', {
      type: 'success',
      message: 'Organization details Updated',
    })

    return response.redirect().back()
  }
}
