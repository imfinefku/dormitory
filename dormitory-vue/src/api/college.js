import http from "@/utils/http";
//新增
export const addApi = async (parm) => {
  return await http.post("/api/collage", parm);
};
//列表
export const listApi = async(parm)=>{
  return await http.get("/api/collage/list",parm)
}
//编辑
export const editApi = async(parm)=>{
  return await http.put("/api/collage", parm)
}
//删除
export const deleteApi = async(parm)=>{
  return await http.delete("/api/collage", parm)
}