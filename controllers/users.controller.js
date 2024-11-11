const users = require('../fixtures/users.json')

let getUsersRoute = (req, res) => {
    res.send(users)
}

let getUserRoute = (req, res) => {
    let user = users.find(user => user.id == req.params.id)
    res.send(user)
}

module.exports = {getUsersRoute, getUserRoute}