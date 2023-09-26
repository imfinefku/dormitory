import http from "@/utils/http";
//查询学院列表
export const getCollegeListApi = async()=>{
    return await http.get("/api/major/getCollegeList")
}
//新增
export const addApi = async(parm)=>{
    return await http.post("/api/major",parm)
}
//列表
export const listApi = async(parm)=>{
    return await http.get("/api/major/list",parm)
}
//编辑
export const editApi = async(parm)=>{
    return await http.put("/api/major",parm)
}
//删除
export const deleteApi = async(parm)=>{
    return await http.delete("/api/major",parm)
}