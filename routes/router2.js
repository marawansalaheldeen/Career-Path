const express = require('express');
const router = new express.Router();

const department = require('../controller/department.js');
const course = require('../controller/course.js');
const training = require('../controller/trainingCompany');
const career = require('../controller/career.js');

// department
router.post('/createdepartment', department.crateDepartment);

// course
router.post('/createcourse', course.createCourse);

// trinings
router.post('/createTraining', training.createTraining);

// career
router.post('/admin/createcareer', career.createCareer);
router.post('/admin/careercourses', career.setCareerCourses);

module.exports = router;