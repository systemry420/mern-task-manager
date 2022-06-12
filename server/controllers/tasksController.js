const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ message: error })
    }
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

const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOne({ _id: taskId })

        if(!task) {
            return res.status(404).json({ message: `Task not found`})
        }

        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error })
    }
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