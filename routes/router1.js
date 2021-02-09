const express = require('express');
const router = new express.Router();

const {createNewUser,userLogin}=require('../controller/registration');

router.post('/newuser',createNewUser);
router.post('/userlogin',userLogin);


module.exports = router;