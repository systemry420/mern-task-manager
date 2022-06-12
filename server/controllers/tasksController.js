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
}

const editTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true, runValidators: true
        })

        if(!task) {
            return res.status(404).json({ message: `Task not found`})
        }

        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = {
    getAllTasks,
    addNewTask,
    getTask,
    editTask,
    deleteTask
}