const express = require('express')

const app = express()

const port = 3000

app.get('/hello', (req, res) => {
    res.send("hello world")
})

// GET  /api/tasks   - get all tasks
// POST /api/task    - add new task
// GET  /api/tasks/:id - get this task
// PUT  /api/tasks/:id - edit this task
// DELETE /api/tasks/:id - delete this task


app.listen(port, () => {
    console.log(`Server listening to port ${port}...`);
})