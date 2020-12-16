import { Exception } from '@poppinss/utils'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UniqueException extends Exception {
  constructor(
    message = 'This data already exists in our database',
    status = 422,
    code = 'E_UNIQUE'
  ) {
    super(message, status, code)
  }

  public async handle(error: this, ctx: HttpContextContract) {
    return ctx.response.status(error.status).send({
      status: error.status,
      method: ctx.response.request.method,
      code: error.code,
      path: ctx.response.request.url,
      timestamp: new Date().getTime(),
      error: {
        name: error.name,
        help: 'BaseException',
        message: error.message.split(': ')[1],
      },
    })
  }
}
