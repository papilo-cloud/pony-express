const express = require('express')
const emailsRouter = express.Router()
const emailController = require('../controllers/email.controller')
const requireAuth = require('../lib/require-auth')


// let upload = multer({
//     dest: path.join(__dirname, '../uploads')
// })

// emailsRouter.use(requireAuth)

emailsRouter.route('/')
    .get(emailController.getEmailsRoute)
    .post(emailController.upload.array('file'), emailController.createEmailRoute)
emailsRouter.route('/:id')
    .get(emailController.getEmailRoute)
    .put(emailController.updateEmailRoute)
    .delete(emailController.deleteEmailRoute)


module.exports = emailsRouter