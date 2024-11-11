const express = require('express')
const usersRouter = express.Router()
const userController = require('../controllers/users.controller')
const requireAuth = require('../lib/require-auth')


usersRouter.use(requireAuth)

usersRouter.get('/', userController.getUsersRoute)
usersRouter.get('/:id', userController.getUserRoute)

module.exports = usersRouter