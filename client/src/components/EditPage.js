import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card } from '@mui/material'

const EditPage = () => {
    const { taskId } = useParams()
    const [currentTask, setCurrentTask] = useState();
    const { tasks } = useSelector(state => state.taskReducer)

    useEffect(() => {
        const task = tasks.find(t => t._id === taskId)
        setCurrentTask(task)
    }, [taskId])

  return (
    <div className='App'>
        <h1>Edit Task</h1>
        {currentTask && (
            <Card>
                <h1>ID: {currentTask._id}</h1>
                <h1>ID: {currentTask.name}</h1>
                <h1>ID: {currentTask.description}</h1>
            </Card>
        )}
    </div>
  )
}

export default EditPage