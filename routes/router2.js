const express = require('express');
const router = new express.Router();

const department = require('../controller/department.js');
const course = require('../controller/course.js');
const training = require('../controller/trainingCompany');

// department
router.post('/createdepartment', department.crateDepartment);

// course
router.post('/createcourse', course.createCourse);

// trinings
router.post('/createTraining', training.createTraining);

module.exports = router;