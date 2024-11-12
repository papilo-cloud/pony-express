const users = require('../fixtures/users.json')

let findUserByCredentials = ({username, password}) => {
    return users.find(user => user.username == username && user.password == password)
}

let findUserByToken = ({userId}) => {
    return users.find(user => user.id == userId)
}

exports.byCredentials = findUserByCredentials
exports.byToken = findUserByToken