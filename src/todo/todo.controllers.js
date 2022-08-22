const todoDb = [
    {
        id: 1,
        title: "Crear linkendin",
        description: "Desarrollo frontend",
        isCompleted: "false"
    },
    {
        id: 2,
        title: "Crear portafolio",
        description: "Frontend",
        isCompleted: "false"
    }
]

const getAllTodo = () => {
    return todoDb
}

const getTodoById = (id) =>{
    const filterTodo = todoDb.filter(todo => todo.id === id)
    return filterTodo[0]
}

const createTodo = (userObj) => {
    if(todoDb.length === 0){
        const newTodo = {
            id: 1,
            title: userObj.title,
            description: userObj.description,
            isCompleted: userObj.isCompleted
        }
        todoDb.push(newTodo)
        return todoDb
    } else {
        const newTodo = {
            id: todoDb[todoDb.length -1].id + 1,
            title: userObj.title,
            description: userObj.description,
            isCompleted: userObj.isCompleted
        }
        todoDb.push(newTodo)
        return todoDb
    }
}

const deleteTodoId = (id) => {
    const index = todoDb.findIndex(todo => todo.id === id)
    if(index !== -1){
        todoDb.splice(index, 1)
        return true
    } else{
        return false
    }
}   

const updateTodo = (data, id) => {
    const index = todoDb.findIndex(todo => todo.id === id)
    if(index !== -1){
        todoDb[index] = {
            id: todoDb[index].id,
            title: todoDb[index].title,
            description: todoDb[index].description,
            isCompleted: data.isCompleted
        }
        return todoDb
    } else {
        return false
    }
}


module.exports = {
    getAllTodo,
    getTodoById,
    createTodo,
    deleteTodoId,
    updateTodo
}