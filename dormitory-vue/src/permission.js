import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist
//全局守卫路由
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  //从cookies里面获取token
  const hasToken = getToken()
  //判断token是否存在
  if (hasToken) {
    if (to.path === '/login') { //判断是否是登录来的
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else { //不是从登录来的
      // determine whether the user has obtained his permission roles through getInfo
      
      //从vuex里面获取权限信息
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      //判断权限是否存在
      if (hasRoles) {
        //存在，直接放行
        next()
      } else {
        try { //如果vuex里面不存在权限信息
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          //获取权限信息
          const { roles } = await store.dispatch('user/getInfo')
          //动态的获取菜单信息，生成动态路由
          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          let obj = { path: '*', redirect: '/404', hidden: true }
          accessRoutes.push(obj)
          console.log('1111')
          console.log(accessRoutes)
          // dynamically add accessible routes
          //动态加载路由
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          // Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else { //token不存在
    /* has no token*/
    //判断是否在白名单中
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      //放行
      next()
    } else { //不在白名单，跳转登录
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
