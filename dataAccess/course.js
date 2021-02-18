const connection = require('../config/db.config');

const createCourse = (courseData, callback)=>{
    console.log("data", courseData);
    connection.query(`INSERT INTO course (course_name,number_of_hours,video_link,department_id) 
    VALUES ('${courseData.courseName}', ${courseData.numberOfHourse}, '${courseData.videoLink}', ${courseData.departmentId})`, (err, result)=>{
        if (err) {
            console.log(err);
            // logger.log(`error`, `error occuered in data access on updating bundle status: ${bundleIds}, ${err}`);
        }
        console.log(err);
        callback(err, result);
    })
}

module.exports = {
    createCourse
}