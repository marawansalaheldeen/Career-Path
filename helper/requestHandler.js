function HandleRequest(err, callback) {

    if (err.name === 'BadRequestError') {
        result = {
            status: 400,
            errors: [err.name]
        }
        callback(result);
    } else if (err.name === 'InternalServerError') {
        result = {
            status: 500,
            errors: [err.name]
        }
        callback(result);
    } else if (err.name === 'Security token expired') {
        console.log("entered handle request")
        result = {
            status: 403,
            errors: [err]
        }
        callback(result);
    } else if (err.name === 'Security token UnAthorized') {
        result = {
            status: 401,
            errors: [err]
        }
        callback(result);
    } else if (err.config) {
        result = {
            status: err.response.status,
            errors: [err.response.statusText]
        }
        callback(result);
    }else if(err.name === 'Not Found'){
        result = {
            status: 401,
            errors: [err]
        }
        callback(result);
    }

}

module.exports = {
    HandleRequest
}