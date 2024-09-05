import User from '#models/user'
import { UserType } from '#utils/enums/user_type'
import { IAuthService } from '#utils/interfaces/i_auth_service'
import { ForgotPasswordDto, ResetPasswordDto, SigninDto, SignupDto } from '#validators/auth'

export class AuthService extends IAuthService {
  async signin(dto: SigninDto) {
    const user = await User.verifyCredentials(dto.email, dto.password)
    if (!user.isActive || !user.emailVerified) {
      return null
    }
    return user
  }

  async signup(dto: SignupDto) {
    const { companyName, ...restDto } = dto
    const user = await User.create({
      ...restDto,
      emailVerified: false,
      userType: UserType.ORGANIZATION,
      isActive: true,
    })

    await user.related('organization').create({
      name: companyName,
    })

    await user.related('profile').create({})

    return user
  }

  async confirmEmail(email: string) {
    const user = await User.findByOrFail({ email })
    user.emailVerified = true
    await user.save()
    return user
  }

  async sendforgetPasswordEmail(dto: ForgotPasswordDto) {
    const user = await User.findBy({ email: dto.email })

    if (user) {
      return user
    } else {
      return null
    }
  }

  async resetPassword(dto: ResetPasswordDto, email: string) {
    const user = await User.findBy({ email })
    if (user) {
      user.password = dto.password
      await user.save()
      return user
    } else {
      return null
    }
  }
}
