// let logger = (req, res, next) => {
//     console.log(req.method +' '+ req.url)
//     next()
// }

// Using the logger middleware to replace our own logger.

const morgan = require('morgan')
let logger = morgan('tiny')

module.exports = logger