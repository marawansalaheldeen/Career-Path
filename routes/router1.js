const express = require('express');
const router = new express.Router();

const {createNewUser,userLogin}=require('../controller/registration');
const {
    getAllTrainingCompany,
    getAllStudents,
    getAllDepartments,
    getAllCourses,
    getAllCareers,
    getAllCareerCourse,
    getAllStudentCourse
    
}=require('../controller/getData');

router.post('/newuser',createNewUser);
router.post('/userlogin',userLogin);

/////////////////////////

router.get('/admin/getAllTrainingCompany',getAllTrainingCompany);

router.get('/admin/getAllStudents',getAllStudents);

router.get('/admin/getAllDepartments',getAllDepartments);

router.get('/admin/getAllCourses',getAllCourses);

router.get('/admin/getAllCareers',getAllCareers);

router.get('/admin/getAllCareerCourse',getAllCareerCourse);

router.get('/admin/getAllStudentCourse',getAllStudentCourse);

module.exports = router;