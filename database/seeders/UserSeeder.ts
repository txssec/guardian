import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { Role, User } from 'App/Models'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      name: 'João Lenon',
      email: 'lenonsec7@gmail.com',
      password: '12345678',
      status: 'reproved',
      applicationId: 'e4f1d0e5-f7db-4e1b-a1a0-244221e60c21',
      fromToken: 'app-e4f1d0e5-f7db-4e1b-a1a0-244221e60c21',
    })

    const userTwo = await User.create({
      name: 'João Lenon',
      email: 'lenonsec7@hotmail.com',
      password: '12345678',
      status: 'approved',
      applicationId: 'e4f1d0e5-f7db-4e1b-a1a0-244221e60c21',
      fromToken: 'app-e4f1d0e5-f7db-4e1b-a1a0-244221e60c21',
    })

    const role = await Role.findByOrFail('slug', 'admin')

    await userTwo.related('roles').attach([role.id])
  }
}
