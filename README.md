#Orden

1. Definir las rutas
2. Definir los verbos de cada ruta

/todo
- GET (obtener todos los todos)
- POST (crear un nuevo todo)
/todo/:id
- GET (obtener todo en específico)
- PATCH (editar solo isCompeleted)
- DELETE (eliminar todo)

3. Crear los controladores
```javascript
    const getAllTodo = () => {
        return todoDB
    }
```

4. Crear los servicios
5. Crear las rutas