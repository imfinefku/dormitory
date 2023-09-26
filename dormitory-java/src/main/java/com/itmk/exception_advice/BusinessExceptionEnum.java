package com.itmk.exception_advice;


public enum  BusinessExceptionEnum {
    SERVER_ERROR(500, "服务器异常！"),
    ;

    private Integer code;
    private String message;

    BusinessExceptionEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}