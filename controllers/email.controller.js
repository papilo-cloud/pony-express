const path = require('path')
const multer = require('multer')
const emails = require('../fixtures/emails.json')
const generateId = require('../lib/generate-id')
class NotFound extends Error {
    constructor(message) {
        super(message)
        this.name = 'NotFound'
    }
}
let getEmailsRoute = (req, res, next) => {
    res.send(emails)
}

let getEmailRoute = (req, res) => {
    let email = emails.find(email => email.id == req.params.id)
    if (!email) {
        throw new NotFound();
    }
    res.send(email)
}

let createEmailRoute = async (req, res) => {
    let file = (req.files || []).map(file => file.filename)
    let newEmail = {...req.body, id: generateId(), file}
    emails.push(newEmail)
    res.status(201)
    res.send(newEmail)
}

// Mutation is generally a bad practice, but we just used mutation to keep
// things simple. Production backends would typically use a DB anyways
let updateEmailRoute = async (req, res) => {
    let email = emails.find(email => email.id == req.params.id)
    Object.assign(email, req.body) 
    res.status(200)
    res.send(email)
}

let deleteEmailRoute = (req, res) => {
    let index = emails.findIndex(email => email.id == req.params.id)
    emails.splice(index, 1)
    res.sendStatus(204)
}

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, res, cb) => {
        cb(null, 'image.jpg')
    }
})

const upload = multer({storage})

module.exports = {getEmailsRoute, getEmailRoute, createEmailRoute, updateEmailRoute, deleteEmailRoute, upload}