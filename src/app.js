const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    return res.json({
        message: 'ok, I am Bang. My StudentID is B2111971'
    })
})

module.exports = app