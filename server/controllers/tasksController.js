
const getAllTasks = (req, res) => {
    res.send('all tasks')
}

const addNewTask = (req, res) => {
    res.send('add task')
}

const getTask = (req, res) => {
    res.send('get task')
}

const editTask = (req, res) => {
    res.send('edit task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    addNewTask,
    getTask,
    editTask,
    deleteTask
}