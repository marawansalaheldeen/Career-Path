const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();




const control = require('./servicecontrol/control');

const app = express();




var corsOptions = {
  origin: "*"
};



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors(corsOptions));
app.options('*', cors())


app.all('', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //Auth Each API Request created by user.
  next();
});



control(app);




app.get("/", (req, res) => {
  res.json({ message: "Career-path-backend" });

});


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// set port, listen for requests
const PORT = 5000 || process.env.PORT_NUMBER;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});