import http from "@/utils/http";
//新增
export const addApi = async(parm)=>{
    return await http.post("/api/notice",parm)
}
//列表
export const listApi = async(parm)=>{
    return await http.get("/api/notice/list",parm)
}
//编辑
export const editApi = async(parm)=>{
    return await http.put("/api/notice",parm)
}
//删除
export const deleteApi = async(parm)=>{
    return await http.delete("/api/notice",parm)
}
//首页公告列表
export const getTopListApi = async()=>{
    return await http.get("/api/notice/getTopList",null)
}