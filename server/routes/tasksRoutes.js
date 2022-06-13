const express = require('express')
const { getAllTasks, addNewTask, getTask, editTask, deleteTask } = require('../controllers/tasksController')

const router = express.Router()

router.get('/', getAllTasks)
router.post('/', addNewTask)
router.get('/:id', getTask)
router.patch('/:id', editTask)
router.delete('/:id', deleteTask)

module.exports = router