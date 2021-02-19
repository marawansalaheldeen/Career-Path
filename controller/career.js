const careerService = require('../core/careerService.js');

const createCareer = (req, res)=>{
    try{
        careerData = {
            jobName: req.body.jobName,
            jobDescription: req.body.jobDescription,
            trainingId: req.body.trainingId
        }

        careerService.createCareer(careerData, (result)=>{
            if (result.status) {
                // logger.log(`error`, `error occuerd on getting allsuppliers data, ${result.errors}`)
                res.status(result.status).send(result.errors)
            } else {
                // logger.log(`info`, `all supplier data retrieved successfully in controller`);
                res.send({ message: "career is created successfully" });
            }
        })
    }catch(err){

    }
}

const setCareerCourses = (req, res)=>{
    try{
        careerData = {
            careerId: req.body.careerId,
            courseId: req.body.courseId,
            minGrade: req.body.minGrade,
            maxGrade: req.body.maxGrade
        }

        careerService.setCareerCourses(careerData, (result)=>{
            if (result.status) {
                // logger.log(`error`, `error occuerd on getting allsuppliers data, ${result.errors}`)
                res.status(result.status).send(result.errors)
            } else {
                // logger.log(`info`, `all supplier data retrieved successfully in controller`);
                res.send({ message: result });
            }
        })
    }catch(err){

    }
}

module.exports = {
    createCareer,
    setCareerCourses
}