import Router from '@koa/router'
import UesrController from '@src/controller/user'

const userRouter = new Router()
const routes = ['login']

routes.forEach(item => {
  userRouter.post(`/${item}`, UesrController[item])
})

module.exports = userRouter