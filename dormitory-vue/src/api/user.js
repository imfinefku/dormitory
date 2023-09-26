import request from '@/utils/request'
import http from '@/utils/http'
export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }
//获取用户信息
export const getInfo = async(parm) => {
  return await http.get("/api/login/getInfo",parm)
}
export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
//获取用户列表
export const getListApi = async(parm) =>{
  return await http.get("/api/user/list",parm)
}
//新增
export const addUserApi = async(parm) =>{
  return await http.post("/api/user",parm)
}
//编辑
export const editUserApi = async(parm) =>{
  return await http.put("/api/user",parm)
}
//删除
export const deleteUserApi = async(parm) =>{
  return await http.delete("/api/user",parm)
}
//角色列表
export const getRoleListApi = async()=>{
  return await http.get("/api/user/roleList")
}
//根据用户Id查询角色
export const getRoleByUserIdApi = async(parm)=>{
  return await http.get("/api/user/getRoleByUserId",parm)
}
//登录
export const loginApi = async(parm)=>{
  return await http.post("/api/login/login",parm)
}
//获取菜单
export const getMenuListApi = async(parm)=>{
  return await http.get("/api/login/getMenuList",parm)
}
//首页统计
export const getTotalApi = async()=>{
  return await http.get("/api/home/getTotal",null)
}