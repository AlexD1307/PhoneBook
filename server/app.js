const mongoose = require("mongoose")
const express = require("express")
const phoneBookApiRouter = require("./PhoneBook/phoneBookApiRouter")

mongoose.connect("mongodb://localhost:27017/phonebook", {
    useNewUrlParser: true
})

const app = express()

app.use(express.static(__dirname + '/../public'))
app.use("/api/phonebook", phoneBookApiRouter)

app.listen(3000)