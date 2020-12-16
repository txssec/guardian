import axios from 'axios'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnauthorizedException from 'App/Exceptions/UnauthorizedException'
import NotFoundException from 'App/Exceptions/NotFoundException'

export default class Token {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    const token = ctx.request.header('Token')

    if (!token) {
      throw new NotFoundException('Token not found in header')
    }

    let application: any = null

    try {
      application = await axios.get(
        `https://txssec-application.herokuapp.com/app/v0.0.2/applications/${token}`
      )
    } catch (error) {
      throw new NotFoundException('Application not found')
    }

    if (!application || !application.data) {
      throw new UnauthorizedException('Application not found')
    }

    ctx.application = application.data.data

    await next()
  }
}
