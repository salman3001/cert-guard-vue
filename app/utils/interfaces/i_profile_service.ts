import Organization from '#models/organization'
import Profile from '#models/profile'
import User from '#models/user'
import { Image } from '#utils/types/image'
import {
  ProfileUpdateDto,
  UpdateOrganizationDto,
  UpdatePasswordDto,
  UpdateUserDetailDto,
} from '#validators/profile'

export abstract class IprofileService {
  abstract view(userId: number): Promise<Profile | null>
  abstract update(userId: number, dto: ProfileUpdateDto): Promise<Profile | null>
  abstract getUserAvatar(userId: number): Promise<Image | undefined>
  abstract updatePassword(userId: number, dto: UpdatePasswordDto): Promise<User | null>
  abstract updateUserDetails(userId: number, dto: UpdateUserDetailDto): Promise<User | null>
  abstract updateOrganization(
    userId: number,
    dto: UpdateOrganizationDto
  ): Promise<Organization | null>
}
