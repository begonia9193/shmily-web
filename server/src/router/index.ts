import fs from 'fs'
import path from 'path'
import Router from '@koa/router'

const router = new Router()

const allRouterFiles: Array<string> = fs.readdirSync(__dirname)// 扫描文件，注册路由
allRouterFiles.forEach(item => {
  const routerName = item.split('.')[0]
  if (routerName === 'index') return
  const routerItem: Router = require(path.resolve(__dirname, routerName))
  router.use(`/${routerName}`, routerItem.routes(), routerItem.allowedMethods())
})

export default router