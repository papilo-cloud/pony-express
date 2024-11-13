class UserNotAuthorized extends Error {
    constructor(message) {
        super(message)
        this.name = 'UserNotAuthorized'
    }
}

let enforce = (policy) => (req, res, next) => {
    if (!policy(req)) {
        res.sendStatus(403)
        throw new UserNotAuthorized()
    } else{
        next()
    }
}

module.exports = enforce