const express = require('express')
const todoRouter = require('./todo/todo.router').router

require('dotenv').config()

const app = express()

app.use(express.json())

const port = process.env.PORT
//Aqui se ecuentran las rutas de mis todos
app.use('/api/v1', todoRouter)


app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})