import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional(),
    email: schema.string.optional({}, [rules.email({ sanitize: true })]),
    password: schema.string.optional({}, [rules.confirmed()]),
  })

  public messages = {
    'name.string': 'Name should be a string',
    'email.string': 'Email should be a string',
    'email.string.email': 'Email should be a valid email',
    'password.string': 'Password should be a valid string',
    'password.string.confirmed': 'Password confirmation should be the same as password',
  }
}
