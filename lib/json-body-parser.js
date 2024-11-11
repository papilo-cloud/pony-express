const readBody = require('../lib/read-body')
// We'll also be droping our own body-parser in favor or Express's own body-parser package
let jsonBodyParser = async (req, res, next) => {
    let body = await readBody(req)
    req.body = JSON.parse(body)
    next()
}

module.exports = jsonBodyParser