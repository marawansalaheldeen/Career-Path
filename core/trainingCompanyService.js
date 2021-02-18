const trainingCompanyDataAccess = require('../dataAccess/training.js');
const { BadRequestError, InternalServerError, NotFound } = require('../helper/exception.js');
const requestHandler = require('../helper/requestHandler.js');

const createTraining = (trainingData, callback)=>{
    try{
        trainingCompanyDataAccess.creataeTraining(trainingData, (err, result)=>{
            try {
                if (err) {
                    console.log(err)
                    throw new InternalServerError('Inetrnal server error, we are tarcking these issues.')
                }
                callback(result);
            }
            catch (err) {
                requestHandler.HandleRequest(err, (result) => {
                    callback(result);
                })
            }
        })
    }catch(err){
        requestHandler.HandleRequest(err, (result) => {
            callback(result);
        })
    }
}

module.exports = {
    createTraining
}