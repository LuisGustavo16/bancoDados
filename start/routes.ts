import Route from '@ioc:Adonis/Core/Route'

Route.get('/lista', async () => {
  return { hello: 'world' }
})

Route.post("/register", "AuthController.register")
Route.post("/login", "AuthController.login")