const express = require('express')
const app = express()

// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

// Get all tasks -  app.get()
// Create a new task -- app.post() 
// Get single task -- app.get()
// Update task -- app.patch()
// Delete Task -- app.delete()

const port = 3000

app.listen(port, console.log(`Server is listening on port ${port}`))