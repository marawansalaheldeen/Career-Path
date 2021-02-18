const courseService = require('../core/courseService.js');

const createCourse = (req, res)=>{
    try{
        courseData = {
            courseName: req.body.courseName,
            numberOfHourse: req.body.numberOfHourse,
            videoLink: req.body.videoLink,
            departmentId: req.body.departmentId
        }

        courseService.createCourse(courseData, (result)=>{
            if (result.status) {
                // logger.log(`error`, `error occuerd on getting allsuppliers data, ${result.errors}`)
                res.status(result.status).send(result.errors)
            } else {
                // logger.log(`info`, `all supplier data retrieved successfully in controller`);
                res.send({ message: "course is created successfully" });
            }
        })
    }catch(err){

    }
}

module.exports = {
    createCourse
}