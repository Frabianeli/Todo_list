const {getAllTodo, getTodoById, createTodo, deleteTodoId, updateTodo} = require('./todo.controllers')

const getAll = (req, res) =>{
    const data = getAllTodo()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) =>{
    const id = Number(req.params.id)
    if(id){
        const data = getTodoById(id)
        if(data){
            res.status(200).json(data)
        } else {
            res.status(400).json({message: 'Invalid ID'})
        }
    } else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

const create = (req, res) =>{
    const resTodo = req.body
    if(resTodo){
        if(resTodo.title && resTodo.description && resTodo.isCompleted){
            const data = createTodo(resTodo)
            res.status(201).json(data)
        } else {
            res.status(400).json({message: 'Complete the field isCompleted'})
        }
    }else{
        res.status(400).json({message: 'Fill in the fields'})
    }
}

const deleteById = (req, res) =>{
    const id = Number(req.params.id)
    if(id){
        const data = deleteTodoId(id)
        if(data){
            res.status(204).json()
        } else{
            res.status(400).json({message: 'Invalid ID'})
        }
    }else{
        res.status(400).json({message: 'Id is not a number'})
    }
}

const update = (req, res) =>{
    const id = Number(req.params.id)
    const resTodo = req.body
    if(id){
        if(resTodo.isCompleted){
            const data = updateTodo(resTodo, id)
            if(data){
                res.status(200).json()
            } else{
                res.status(400).json({message: 'Invalid ID'})
            }
        } else{
            res.status(400).json({message: 'Complete the field isCompleted'})
        }
    } else{
        res.status(400).json({message: 'Id is not a number'})
    }
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    update
}