const badyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.use(badyParser.json())
    app.use(cors({
        origin: '*'
    }))
}