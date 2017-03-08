package com.kalix.ar.student.system.dao;

import com.kalix.ar.student.system.api.dao.IStudentBeanDao;
import com.kalix.ar.student.system.entities.StudentBean;
import com.kalix.framework.core.impl.dao.UserEntityDao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by Administrator on 2017/3/3.
 */
public class StudentBeanDaoImpl extends UserEntityDao<StudentBean,Long> implements IStudentBeanDao {

    @Override
    @PersistenceContext(unitName = "ar-student-system-unit")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
}
