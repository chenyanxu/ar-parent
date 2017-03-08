package com.kalix.ar.teacher.system.biz;

import com.kalix.ar.teacher.system.api.biz.ITeacherBeanService;
import com.kalix.ar.teacher.system.api.dao.ITeacherBeanDao;
import com.kalix.ar.teacher.system.entities.TeacherBean;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;

/**
 * Created by hqj on 2017-3-7.
 */
public class TeacherBeanServiceImpl extends ShiroGenericBizServiceImpl<ITeacherBeanDao, TeacherBean> implements ITeacherBeanService {
    private static final String FUNCTION_NAME = "登录名";

    public TeacherBeanServiceImpl() {
        super.init(TeacherBean.class.getName());
    }

}
