import http from "@/utils/http";
//查询用户列表
export const getUserListApi = async()=>{
    return await http.get("/api/build/getUserList",null)
}
//新增
export const addApi = async(parm)=>{
    return await http.post("/api/build",parm)
}
//列表
export const listApi = async(parm)=>{
    return await http.get("/api/build/list",parm)
}
//编辑
export const editApi = async(parm)=>{
    return await http.put("/api/build",parm)
}
//删除
export const deleteApi = async(parm)=>{
    return await http.delete("/api/build",parm)
}
//新增层数
export const addStroyApi = async(parm)=>{
    return await http.post("/api/storey",parm)
}
//编辑层数
export const editStoryApi = async(parm)=>{
    return await http.put("/api/storey",parm)
}
//删除层数
export const deleteStoryApi = async(parm)=>{
    return await http.delete("/api/storey",parm)
}
//获取楼栋列表
export const getBuildListApi = async()=>{
    return await http.get("/api/build/getBuildList",null)
}
//获取层数
export const getDestoryListApi = async(parm)=>{
    return await http.get("/api/storey/getDestoryList",parm)
}
//根据性别获取楼栋列表
export const getBuildListBySexApi = async(parm)=>{
    return await http.get("/api/build/getBuildListBySex",parm)
}
export const getTotalBuildApi = async()=>{
    return await http.get("/api/build/getTotal",null)
}