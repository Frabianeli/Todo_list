const router = require('express').Router()
const{getAll, getById, create, deleteById, update} = require('./todo.http')

router.route('/todo')
    .get(getAll)
    .post(create)

router.route('/todo/:id')
    .get(getById)
    .delete(deleteById)
    .patch(update)


module.exports = {
    router
}