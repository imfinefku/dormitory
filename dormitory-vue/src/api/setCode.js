import http from "@/utils/http";
//新增
export const addApi = async(parm)=>{
    return await http.post("/api/dormRoom",parm)
}
//列表
export const getStoreyListApi = async(parm)=>{
    return await http.get("/api/dormRoom/list",parm)
}
//编辑
export const editApi = async(parm)=>{
    return await http.put("/api/dormRoom",parm)
}
//删除
export const deleteApi = async(parm)=>{
    return await http.delete("/api/dormRoom",parm)
}
//初始化床位
export const initBedApi = async(parm)=>{
    return await http.post("/api/storey/initBed",parm)
}
//编辑
export const editChildApi = async(parm)=>{
    return await http.put("/api/roomBed",parm)
}
//删除
export const deleteChildApi = async(parm)=>{
    return await http.delete("/api/roomBed",parm)
}