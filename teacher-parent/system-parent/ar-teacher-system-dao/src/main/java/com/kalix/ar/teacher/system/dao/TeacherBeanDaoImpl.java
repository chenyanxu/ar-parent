package com.kalix.ar.teacher.system.dao;

import com.kalix.ar.teacher.system.api.dao.ITeacherBeanDao;
import com.kalix.ar.teacher.system.entities.TeacherBean;
import com.kalix.framework.core.impl.dao.UserEntityDao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by Administrator on 2017/3/3.
 */
public class TeacherBeanDaoImpl extends UserEntityDao<TeacherBean,Long> implements ITeacherBeanDao {

    @Override
    @PersistenceContext(unitName = "ar-teacher-system-unit")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
}
