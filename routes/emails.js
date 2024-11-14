const express = require('express')
const emailsRouter = express.Router()
const emailController = require('../controllers/email.controller')
const requireAuth = require('../lib/require-auth')
const enforce = require('../lib/enforce')


// let upload = multer({
//     dest: path.join(__dirname, '../uploads')
// })


emailsRouter.use(requireAuth)

emailsRouter.route('/')
    .get(emailController.getEmailsRoute)
    .post(emailController.upload.array('file'), emailController.createEmailRoute)
emailsRouter.route('/:id')
    .get(enforce(emailController.getEmailPolicy), emailController.getEmailRoute)
    .put(enforce(emailController.updateEmailPolicy), emailController.updateEmailRoute)
    .delete(enforce(emailController.deleteEmailPolicy), emailController.deleteEmailRoute)


module.exports = emailsRouter