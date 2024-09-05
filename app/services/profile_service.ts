import Organization from '#models/organization'
import Profile from '#models/profile'
import User from '#models/user'
import { IfileService } from '#utils/interfaces/i_file_service'
import { IprofileService } from '#utils/interfaces/i_profile_service'
import {
  ProfileUpdateDto,
  UpdateOrganizationDto,
  UpdatePasswordDto,
  UpdateUserDetailDto,
} from '#validators/profile'
import { inject } from '@adonisjs/core'

@inject()
export class ProfileService extends IprofileService {
  /**
   *
   */
  constructor(private readonly fileService: IfileService) {
    super()
  }
  async view(userId: number) {
    const profile = await Profile.findBy('userId', userId)
    return profile
  }

  async update(userId: number, dto: ProfileUpdateDto) {
    const profile = await Profile.findBy('userId', userId)
    console.log(profile)

    const { avatar, ...restDto } = dto
    if (profile) {
      profile.merge(restDto)
      if (avatar) {
        const oldAvatar = profile.avatar
        profile.avatar = await this.fileService.uploadImage(avatar)
        await profile.save()
        if (oldAvatar) {
          await this.fileService.deleteImage(oldAvatar)
        }
      }
    }

    return profile
  }

  async getUserAvatar(userId: number) {
    const profile = await Profile.findBy('userId', userId)
    return profile?.avatar
  }

  async updatePassword(userId: number, dto: UpdatePasswordDto) {
    const user = await User.findBy('id', userId)
    if (user) {
      user.merge({ password: dto.password })
      await user.save()
    }
    return user
  }

  async updateUserDetails(userId: number, dto: UpdateUserDetailDto) {
    const user = await User.findBy('id', userId)

    if (user) {
      user.merge(dto)
      await user.save()
    }

    return user
  }

  async updateOrganization(userId: number, dto: UpdateOrganizationDto) {
    const org = await Organization.findBy('userId', userId)

    if (org) {
      org.merge(dto)
      await org.save()
    }

    return org
  }
}
