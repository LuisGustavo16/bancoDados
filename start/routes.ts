import Route from '@ioc:Adonis/Core/Route'

Route.get('/lista', async () => {
  return { hello: 'world' }
})
