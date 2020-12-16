import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnauthorizedException from 'App/Exceptions/UnauthorizedException'

export default class Owner {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    const user = ctx.auth.user

    if (!user) {
      throw new UnauthorizedException('Not found user in context')
    }

    await user.preload('roles')
    const isAuthorized = user.roles.find((role) => role.slug === 'admin' || 'manager')

    if (isAuthorized) {
      return next()
    }

    if (ctx.request.method() === 'PUT' && ctx.params) {
      const id = ctx.params.id

      if (id !== user.id) {
        throw new UnauthorizedException('User is not authorized to update resources of other user')
      }
    }

    await next()
  }
}
