const express = require("express")
const phoneBookApiController = require("./phoneBookApiController")
const bodyParser = require('body-parser')
let phoneBookApiRouter = express.Router()

module.exports = phoneBookApiRouter
phoneBookApiRouter.use("/", bodyParser.json())

phoneBookApiRouter.route("/:id")
    .get(phoneBookApiController.get)
    .put(phoneBookApiController.put)
    .delete(phoneBookApiController.delete)

phoneBookApiRouter.route("/")
   .get(phoneBookApiController.getAll)
   .post(phoneBookApiController.post)