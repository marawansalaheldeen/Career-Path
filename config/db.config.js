require('dotenv').config();
const mysql = require('mysql');

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DB: process.env.DB_NAME,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };




const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
   
  //connect to database         
  conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
  });

module.exports = conn;