import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import type { Authenticators } from '@adonisjs/auth/types'
import router from '@adonisjs/core/services/router'
import { UserType } from '#utils/enums/user_type'
import UnAuthorizedException from '#exceptions/un_authorized_exception'

/**
 * Auth middleware is used authenticate HTTP requests and deny
 * access to unauthenticated users.
 */
export default class RoleMiddleware {
  /**
   * The URL to redirect to, when authentication fails
   */
  redirectTo = router.builder().make('error.access-denied')

  async handle(
    ctx: HttpContext,
    next: NextFn,
    options: {
      role: UserType
      guards?: (keyof Authenticators)[]
    }
  ) {
    const user = await ctx.auth.authenticateUsing(options.guards, { loginRoute: this.redirectTo })

    if (user.userType === options.role) {
      return next()
    } else {
      throw new UnAuthorizedException('Access denied')
    }
  }
}
