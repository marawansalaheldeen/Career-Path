class BadRequestError extends Error {
    constructor(args){
        super(args);
        this.name = "BadRequestError"
    }
}


class InternalServerError extends Error {
    constructor(args){
        super(args);
        this.name = "InternalServerError"
    }
}


class NotFound extends Error {
    constructor(args){
        super(args);
        this.name = "Not Found"
    }
}

class ExpiredSecurityTokenException extends Error{
    constructor(args){
        super(args);
        this.name = "Security token expired"
    }
}

class UnAuthorizedToken extends Error{
    constructor(args){
        super(args);
        this.name = "Security token UnAthorized"
    }
}

module.exports= {BadRequestError, InternalServerError, NotFound, ExpiredSecurityTokenException, UnAuthorizedToken}