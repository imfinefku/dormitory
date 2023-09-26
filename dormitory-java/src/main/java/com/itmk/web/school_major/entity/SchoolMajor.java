package com.itmk.web.school_major.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**

 */
@Data
@TableName("school_major")
public class SchoolMajor {
    @TableId(type = IdType.AUTO)
    private Long majorId;
    private Long collageId;
    private String majorName;
    private Integer orderNum;
    //学院名称，不属于专业表，需要排除
    @TableField(exist = false)
    private String collageName;
}
