import { UserService } from 'App/Services'
import { ApiController } from 'App/Controllers/ApiController'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UpdateValidator } from 'App/Validators/Auth'

export default class UserController extends ApiController {
  public async index({ request, response, auth, pagination, application }: HttpContextContract) {
    const data = request.only(['where', 'orderBy', 'includes'])
    data.where.push({ key: 'applicationId', value: application.id })

    const users = await new UserService().setGuard(auth).getAll(pagination, data)

    return this.response(response).withCollection(users.toJSON())
  }

  public async show({ request, response, params, auth, application }: HttpContextContract) {
    const data = request.only(['where', 'orderBy', 'includes'])
    data.where.push({ key: 'applicationId', value: application.id })

    const user = await new UserService().setGuard(auth).getOne(params.id, data)

    return this.response(response).withOne(user)
  }

  public async update({ request, response, params, auth }: HttpContextContract) {
    const data = await this.request(request).validate(UpdateValidator)

    const user = await new UserService().setGuard(auth).update(params.id, data)

    return this.response(response).withOne(user)
  }

  public async delete({ response, params, auth }: HttpContextContract) {
    const user = await new UserService().setGuard(auth).delete(params.id)

    return this.response(response).withSoftDeleted(user.name)
  }
}
