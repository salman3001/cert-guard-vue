// import type { HttpContext } from '@adonisjs/core/http'

// import UnAuthorizedException from '#exceptions/un_authorized_exception'
// import { UserService } from '#services/user_service'
// import { UserCreateValidator, UserUpdateValidator } from '#validators/user'
import { inject } from '@adonisjs/core'
// import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ProfilesController {
  /**
   *
   */
  // constructor(private readonly userService: UserService) {}
  // async index({ bouncer, request }: HttpContext) {
  //   if (await bouncer.denies('listUsers')) {
  //     throw new UnAuthorizedException()
  //   }
  //   const user = await this.userService.index(request.qs())
  //   user.baseUrl('/users')
  // }
  // async show({ bouncer, params }: HttpContext) {
  //   if (await bouncer.denies('showUsers')) {
  //     throw new UnAuthorizedException()
  //   }
  //   const user = await this.userService.show(+params?.id)
  //   return user
  // }
  // async create({}: HttpContext) {}
  // async store({ request, bouncer }: HttpContext) {
  //   if (await bouncer.denies('createUsers')) {
  //     throw new UnAuthorizedException()
  //   }
  //   const payload = await request.validateUsing(UserCreateValidator)
  //   const user = await this.userService.store(payload)
  //   return user
  // }
  // async edit({}: HttpContext) {}
  // async update({ request, params, bouncer }: HttpContext) {
  //   if (await bouncer.denies('editUsers')) {
  //     throw new UnAuthorizedException()
  //   }
  //   const userId = +params.id
  //   const user = await this.userService.show(userId)
  //   const payload = await request.validateUsing(UserUpdateValidator, {
  //     meta: {
  //       userId: userId,
  //     },
  //   })
  //   const updatedUser = await this.userService.update(user, payload)
  //   return updatedUser
  // }
  // async destroy({ params, bouncer }: HttpContext) {
  //   if (await bouncer.denies('deleteUsers')) {
  //     throw new UnAuthorizedException()
  //   }
  //   const userId = +params.id
  //   const user = await this.userService.show(userId)
  //   await this.userService.destroy(user)
  // }
}
