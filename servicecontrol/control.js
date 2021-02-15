const router1 = require('../routes/router1');
const router2 = require('../routes/router2');

module.exports = (app)=>{
    app.use(router1);
    app.use(router2);
}