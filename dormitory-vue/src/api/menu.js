import http from '@/utils/http'
//列表
export const getListApi = async() =>{
    return await http.get("/api/menu/list",null)
}
//上级树
export const getParentListApi = async() =>{
    return await http.get("/api/menu/parent",null)
}
//新增
export const addMenuApi = async(parm) =>{
    return await http.post("/api/menu",parm)
}
//编辑
export const editMenuApi = async(parm) =>{
    return await http.put("/api/menu",parm)
}
//删除
export const deleteMenuApi = async(parm) =>{
    return await http.delete("/api/menu",parm)
}