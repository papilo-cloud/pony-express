const express = require('express')
const app = express()
const path = require('path')
const usersRouter = require('./routes/users')
const emailsRouter = require('./routes/emails')
const logger = require('./lib/logger')
const compress = require('compression')
const basicAuth = require('./lib/basic-auth')
const findUser = require('./lib/find-user')


app.use(express.json())
app.use(logger)
app.use(compress())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use(basicAuth(findUser.byCredentials))
app.use('/users', usersRouter)
app.use('/emails', emailsRouter)


app.listen(3000)