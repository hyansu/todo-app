const port = 3000
const bodyparser = require('body-parser')
const express =  require('express')
const app = express()
const AllowCors = require('./cors')

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(AllowCors)

app.listen(port, function(){
    console.log(`BACKEND running on port ${port}`)
})

module.exports = app