import Route from '@ioc:Adonis/Core/Route'

Route.get('/lista', async () => {
  return { hello: 'world' }
})

Route.post("/Cadastro", "AuthController.register")
Route.post("/Login", "AuthController.login")