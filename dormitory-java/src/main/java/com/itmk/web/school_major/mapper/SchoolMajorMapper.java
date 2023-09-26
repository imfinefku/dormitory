package com.itmk.web.school_major.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.itmk.web.school_major.entity.MajorList;
import com.itmk.web.school_major.entity.SchoolMajor;
import org.apache.ibatis.annotations.Param;

/**

 */
public interface SchoolMajorMapper extends BaseMapper<SchoolMajor> {
    IPage<SchoolMajor> getList(IPage<SchoolMajor> page, @Param("parm")MajorList majorList);
}
