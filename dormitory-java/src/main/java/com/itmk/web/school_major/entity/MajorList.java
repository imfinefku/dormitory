package com.itmk.web.school_major.entity;

import lombok.Data;

/**

 */
@Data
public class MajorList {
    private String majorName;
    private String collageName;
    private Long currentPage;
    private Long pageSize;
}
