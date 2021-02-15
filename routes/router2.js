const express = require('express');
const router = new express.Router();

const department = require('../controller/department.js');

router.post('/createdepartment', department.crateDepartment);

module.exports = router;