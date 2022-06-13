const asyncWrapper = require("../middleware/async-wrapper")
const Task = require("../models/Task")

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
})

const addNewTask = asyncWrapper(async (req, res) => {
    console.log(req.body);
    const task = await Task.create({
        name: req.body.name,
        description: req.body.description,
        completed: req.body.completed
    })
    res.status(201).json(task)
})

const getTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params
    const task = await Task.findOne({ _id: taskId })

    if(!task) {
        return res.status(404).json({ message: `Task not found`})
    }

    res.status(200).json(task)
})

const editTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        nrunValidators: true
    })

    console.log(task);

    if(!task) {
        return res.status(404).json({ message: `Task not found`})
    }

    res.status(200).json(task)
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    res.status(200).json(task)
})

module.exports = {
    getAllTasks,
    addNewTask,
    getTask,
    editTask,
    deleteTask
}