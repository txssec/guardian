declare module '@ioc:Adonis/Core/HttpContext' {
  interface HttpContextContract {
    pagination: {
      page: number
      limit: number
    }
    application: {
      id: string
      name: string
      email: string
      token: string
      status: string
      created_at: Date
      update_at: Date
      deleted_at: Date | null
    }
  }
}
