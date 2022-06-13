import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, TextField, Button, ButtonGroup } from "@mui/material";
import { editTask } from "../redux/actions";

const EditPage = () => {
  const { taskId } = useParams();
  const [currentTask, setCurrentTask] = useState();
  const { tasks } = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const task = tasks.find((t) => t._id === taskId);
    setCurrentTask(task);
  }, [taskId]);

  const handleEdit = () => {
    dispatch(editTask(currentTask))
    navigate('/')
  }

  const handleChange = (e) => {
    setCurrentTask(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="App">
      <h1>Edit Task</h1>
      {currentTask && (
        <Card>
          <form className="list">
            <TextField 
                disabled="true"
                label="ID" 
                margin='normal'
                value={currentTask._id} />
            <TextField 
                label="Name" 
                name="name"
                margin='normal'
                onChange={handleChange}
                value={currentTask.name} />
            <TextField 
                onChange={handleChange}
                label="Description" 
                name="description"
                margin='normal'
                value={currentTask.description} />

                <ButtonGroup>
                    <Button
                        onClick={handleEdit}
                        variant='contained'>Save</Button>
                </ButtonGroup>
          </form>
        </Card>
      )}
    </div>
  );
};

export default EditPage;
