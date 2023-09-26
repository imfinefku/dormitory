import http from "@/utils/http";
//查询我的宿舍列表
export const getStuBedListApi = async(parm)=>{
    return await http.get("/api/stuBed/getStuBedList",parm)
}
//查询班级下的学生
export const getStuListApi = async(parm)=>{
    return await http.get("/api/stuBed/getStuList",parm)
}
//申请提交
export const applySaveApi = async(parm)=>{
    return await http.post("/api/applyChange/applySave",parm)
}
//申请列表
export const getListApi = async(parm)=>{
    return await http.get("/api/applyChange/getList",parm)
}
//处理申请
export const applyDoApi = async(parm)=>{
    return await http.post("/api/applyChange/applyDo",parm)
}
//删除学生
export const deleteBedApi = async(parm)=>{
    return await http.delete("/api/stuBed",parm)
}