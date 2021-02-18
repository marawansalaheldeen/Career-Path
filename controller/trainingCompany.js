const trainingCompanyService = require('../core/trainingCompanyService.js');

const createTraining = (req, res)=>{
    try{
        trainingCompanyData = {
            companyName: req.body.companyName,
            description: req.body.description,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            workField: req.body.workField 
        }

        trainingCompanyService.createTraining(trainingCompanyData, (result)=>{
            if (result.status) {
                // logger.log(`error`, `error occuerd on getting allsuppliers data, ${result.errors}`)
                res.status(result.status).send(result.errors)
            } else {
                // logger.log(`info`, `all supplier data retrieved successfully in controller`);
                res.send({ message: "training is created successfully" });
            }
        })
    }catch(err){

    }
}

module.exports = {
    createTraining
}