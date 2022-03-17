const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// Middleware
app.use(express.static('./public'));
app.use(express.json())


// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

// Get all tasks -  app.get('/api/v1/tasks')
// Create a new task -- app.post('/api/v1/tasks') 
// Get single task -- app.get('/api/v1/tasks'/:id)
// Update task -- app.patch('/api/v1/tasks/:id')
// Delete Task -- app.delete('/api/v1/tasks/:id')

const port = 3000

app.listen(port, console.log(`Server is listening on port ${port}`))