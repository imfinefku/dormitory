import http from "@/utils/http";
//查询班级列表
export const getClassListApi = async(parm)=>{
    return await http.get("/api/student/getClassList",parm)
}
//新增
export const addApi = async(parm)=>{
    return await http.post("/api/student",parm)
}
//列表
export const listApi = async(parm)=>{
    return await http.get("/api/student/list",parm)
}
//编辑回显查询
export const getByIdApi = async(parm)=>{
    return await http.get("/api/student/getById",parm)
}
//编辑保存
export const editApi = async(parm)=>{
    return await http.put("/api/student",parm)
}
//删除
export const deleteApi = async(parm)=>{
    return await http.delete("/api/student",parm)
}
//查询角色列表
export const getRoleListApi = async()=>{
    return await http.get("/api/student/getRoleList",null)
}
//根据班级id查询学生列表
export const getClassByClassIdApi = async(parm)=>{
    return await http.get("/api/student/getClassByClassId",parm)
}
//重置密码
export const resetPasswordApi = async(parm)=>{
    return await http.post("/api/student/resetPassword",parm)
}