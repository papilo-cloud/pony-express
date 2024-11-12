const express = require('express')
const findUser = require('../lib/find-user')
const jwt = require('jsonwebtoken')
const tokensRouter = express.Router()


let createToken = (user) => 
    jwt.sign(
        {userId: user.id},
        process.env.SIGNATURE,
        {expiresIn: '7d'}
    )

let createTokenRoute = (req, res) => {
    let credentials = req.body
    let user = findUser.byCredentials(credentials)

    if (user) {
        let token = createToken(user)
        res.status(201)
        res.send(token)
    } else {
        res.sendStatus(422)
    }
}

tokensRouter.post('/', createTokenRoute)

module.exports = tokensRouter