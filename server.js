const express = require('express')
const errorHandeler = require('./middleware/middleware')
const connectdb = require('./config/dbconnection')
const PORT = process.env.PORT||4000

const app = express()
app.use(express.json())
app.use('/api',require('./routes/route'))
app.use(errorHandeler)

connectdb() 

app.listen(PORT,()=>{
    console.log(`listening to the port ${PORT}`)
})