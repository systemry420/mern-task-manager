const Task = require("../models/Task")

const getAllTasks = (req, res) => {
    res.send('all tasks')
}

const addNewTask = async (req, res) => {
    try {
        const task = await Task.create({
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed
        })
        res.status(201).json(task)
    } catch(error) {
        res.status(500).json({ message: error })
    }
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