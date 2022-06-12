import { Button, TextField } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <TextField placeholder='Enter title' />
        <TextField placeholder='Enter description' />
        <Button variant='contained'>Add Task</Button>
    </div>
  )
}

export default Form