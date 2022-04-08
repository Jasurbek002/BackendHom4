const express  = require('express')
const app = express()
app.use(express.json())

const todos = [
    {id:1,title:"Dars qilish",iscomplate:true},
    {id:1,title:"Dars qilish",iscomplate:true}
]

app.get('/todos',(req , res) =>{
    res.json(todos)
})

app.post('/todos',(req,res) =>{
    const todo = {
        ...req.body,
        id:todos.length+1
    }
    todos.push(todo)
    res.json(todos)
})
app.put('/todos/:id',(req,res) =>{
    const id = req.params.id
    const todoix = todos.findIndex(x => x.id == id)
    const todo = todos[todoix]
    const update = {...todo,...req.body}
    todos[todoix] = update
    res.json(update)
})
app.delete('/todos/:id',(req,res) =>{
    const id = parseInt(req.params.id)
    const todo = todos.find(x => x.id === id)
    res.json(todo)
})

const PORT = process.env.PORT|| 6060
app.listen(PORT,() =>{
   console.log(`Server ${PORT} da ishlamoqda`)
})