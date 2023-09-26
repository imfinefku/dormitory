import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import locale from 'element-ui/lib/locale/lang/zh-CN'
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
//清空表单
import resetForm from '@/utils/resetForm'
Vue.prototype.$resetForm = resetForm;
//信息提示框
import myconfirm from '@/utils/myconfirm'
Vue.prototype.$myconfirm = myconfirm;
//对象快速复制
import objCoppy from '@/utils/objCoppy'
Vue.prototype.$objCoppy = objCoppy;
//echarts
import * as echarts from 'echarts';
import '@/icons' // icon
import '@/permission' // permission control
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.directive('permission',permission)
Vue.prototype.$checkPermission = checkPermission
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
