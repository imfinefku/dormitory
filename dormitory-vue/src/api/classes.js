import http from "@/utils/http";
//根据学院id查询专业列表
export const getMajorListApi = async(parm)=>{
    return http.get("/api/class/getMajorList",parm)
}
//新增
export const addApi = async(parm)=>{
    return await http.post("/api/class",parm)
}
//列表
export const getListApi = async(parm)=>{
    return await http.get("/api/class/list",parm)
}
//编辑
export const editApi = async(parm)=>{
    return await http.put("/api/class",parm)
}
//删除
export const deleteApi = async(parm)=>{
    return await http.delete("/api/class",parm)
}
//根据id查询编辑的数据
export const getClassByIdApi = async(parm)=>{
    return await http.get("/api/class/getClassById",parm)
}
//分配宿舍，查询班级列表
export const getAssignClassApi = async(parm)=>{
    return await http.get("/api/class/getAssignClass",parm)
}
//管理员分配宿舍，查询班级列表
export const getListForAssignApi = async()=>{
    return await http.get("/api/class/getListForAssign",null)
}