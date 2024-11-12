const jwt = require('jsonwebtoken')

const signature = '1m_s3cure'

let tokenAuth = (findUserByToken) => (req, res, next) => {
    let header = req.headers.authorization || ''
    let [type, token] = header.split(' ')

    if (type == 'Bearer') {
        let payload
        try {
require('dotenv').config()
            payload = jwt.verify(token, process.env.SIGNATURE)
        } catch (error) {
            res.sendStatus(401)
            return
        }
        console.log(payload)

        let user = findUserByToken(payload)
        if (user) {
            req.user = user
        } else {
            res.sendStatus(401)
            return
        }
    }
    next()
}

module.exports = tokenAuth