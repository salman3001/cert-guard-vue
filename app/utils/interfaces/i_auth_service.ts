import User from '#models/user'
import { ForgotPasswordDto, ResetPasswordDto, SigninDto, SignupDto } from '#validators/auth'

export abstract class IAuthService {
  abstract signin(dto: SigninDto): Promise<User | null>
  abstract signup(dto: SignupDto): Promise<User>
  abstract confirmEmail(email: string): Promise<User>
  abstract sendforgetPasswordEmail(dto: ForgotPasswordDto): Promise<User | null>
  abstract resetPassword(dto: ResetPasswordDto, email: string): Promise<User | null>
}
