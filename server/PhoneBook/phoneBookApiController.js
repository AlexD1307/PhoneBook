const PhoneBook = require("./phoneBook")

let phoneBookApiController = {}

module.exports = phoneBookApiController

phoneBookApiController.getAll = (req, res) => {
    PhoneBook.find({}, (err, users) => {
        if (err) {
            res.send(err)
        } else {
            res.json(users)
        }
    })
}

phoneBookApiController.get = (req, res) => {
    let id = req.params.id
    find = (err, user) => {
        if (user) {
            res.json(user)
        } else {
            res.status(404)
            res.end()
        }
    }

    if (id) {
        PhoneBook.findById( id, (err, user) => find(err, user) )
    } else {
        res.status(404)
        res.end()
    }
}

phoneBookApiController.post = (req, res, next) => {
    PhoneBook.create(req.body, (err, createdUser) => {
        if (err) {
            next(err)
        } else {
            res.status(201)
            res.set("Location", `${req.url}/${createdUser.id}`)
            res.end()
        }
    })
}

phoneBookApiController.put = (req, res) => {
   PhoneBook.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, (err, updatedPhoneBook) => {
      if (updatedPhoneBook) {
         res.end()
      } else if (err) {
         if (err.name === "ValidationError") {
            res.status(400)
         } else {
            res.status(404)
         }
         res.end()
      } else {
         res.status(404)
         res.end()
      }
   })
}

phoneBookApiController.delete = (req, res) => {
    let id = req.params.id
    check = (err, deletedPhoneBook) => {
        if (deletedPhoneBook) {
            res.end()
        } else {
            res.status(404)
            res.send(err)
        }
    }
    if (id) {
        PhoneBook.findByIdAndRemove(id, (e, deleted) => check(e, deleted))
    } else {
        res.status(404)
        res.send(err)
    }
}
