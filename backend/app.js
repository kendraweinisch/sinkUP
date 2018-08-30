// import express, bodyparser, etc
// import routes
// configure web server and tell it which port to listen on
const express = require('express')
const cors = require ('cors')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./routes')

const app = express() 
const port = 3001

// app.use(cors())

app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json())

app.use(morgan('dev'))

app.use(router)

console.log("Server is listening on" + port)
app.listen(port);