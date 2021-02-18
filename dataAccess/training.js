const connection = require('../config/db.config');

const creataeTraining = (trainingData, callback)=>{
    console.log("data", trainingData);
    connection.query(`INSERT INTO training_company (training_company_name, training_company_description, training_company_phone_number, training_company_address, training_company_work_field)
    VALUES ('${trainingData.companyName}',
        '${trainingData.description}',
        ${trainingData.phoneNumber},
        '${trainingData.address}',
        '${trainingData.workField}')`, (err, result)=>{
        if (err) {
            console.log(err);
            // logger.log(`error`, `error occuered in data access on updating bundle status: ${bundleIds}, ${err}`);
        }
        console.log(err);
        callback(err, result);
    })
}

module.exports = {
    creataeTraining
}