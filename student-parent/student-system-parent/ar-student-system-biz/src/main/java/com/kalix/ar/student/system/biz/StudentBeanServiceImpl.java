package com.kalix.ar.student.system.biz;

import com.kalix.ar.student.system.api.biz.IStudentBeanService;
import com.kalix.ar.student.system.api.dao.IStudentBeanDao;
import com.kalix.ar.student.system.entities.StudentBean;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;

/**
 * Created by hqj on 2017-3-7.
 */
public class StudentBeanServiceImpl extends ShiroGenericBizServiceImpl<IStudentBeanDao, StudentBean> implements IStudentBeanService {
    private static final String FUNCTION_NAME = "登录名";

    public StudentBeanServiceImpl() {
        super.init(StudentBean.class.getName());
    }

}
