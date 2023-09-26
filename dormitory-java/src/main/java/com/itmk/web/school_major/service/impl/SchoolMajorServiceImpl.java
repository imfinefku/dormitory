package com.itmk.web.school_major.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.school_major.entity.MajorList;
import com.itmk.web.school_major.entity.SchoolMajor;
import com.itmk.web.school_major.mapper.SchoolMajorMapper;
import com.itmk.web.school_major.service.SchoolMajorService;
import org.springframework.stereotype.Service;

/**

 */
@Service
public class SchoolMajorServiceImpl extends ServiceImpl<SchoolMajorMapper, SchoolMajor> implements SchoolMajorService {
    @Override
    public IPage<SchoolMajor> getList(MajorList majorList) {
        //构造分页对象
        IPage<SchoolMajor> page = new Page<>(majorList.getCurrentPage(),majorList.getPageSize());
        return this.baseMapper.getList(page,majorList);
    }
}
