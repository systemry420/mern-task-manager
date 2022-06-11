const express = require('express')
const connectDB = require('./db')
const router = require('./routes/tasksRoutes')
require('dotenv').config()

const app = express()

const port = 8000  

// middleware 
app.use(express.json())


// GET  /api/tasks   - get all tasks
app.use('/api/tasks', router)

// POST /api/task    - add new task
app.use('/api/tasks', router)

// GET  /api/tasks/:id - get this task
app.use('/api/tasks/:id', router)

// PATCH  /api/tasks/:id - edit this task
app.use('/api/tasks/:id', router)

// DELETE /api/tasks/:id - delete this task
app.use('/api/tasks/:id', router)

const URL = 'mongodb+srv://kassem:qj3QCDLlbMdct1lG@mern-apps.gbjov1n.mongodb.net/Tasks_db?retryWrites=true&w=majority'

connectDB(URL)
    .then(() => {
        console.log('Connected to DB');

        app.listen(port, () => {
            console.log(`Server listening to port ${port}...`);
        })
    })