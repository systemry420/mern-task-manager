import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const Form = ({ addTask }) => {
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const [error, setError] = useState({
    name: false,
    description: false
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!data.name) {
        setError(prevState => ({
            ...prevState,
            name: true
        }))
        return;
    }
    if (!data.description) {
        setError(prevState => ({
            ...prevState,
            description: true
        }))
        return;
    }
    setError({
        name: false,
        description: false    
    })
    setData({
        name: "",
        description: "",    
    })
    addTask(data)
  }

  const setValues = (e) => {
    setData(prevState => {
        return {
            ...prevState,
            [e.target.name]: e.target.value
        }
    })
  }

  return (
    <form className="form">
      <TextField
        variant="standard"
        margin="normal"
        value={data.name}
        label="Enter name"
        name='name'
        required='true'
        error={error.name}
        onChange={setValues}
      />
      <TextField
        variant="standard"
        margin="normal"
        value={data.description}
        label="Enter description"
        name='description'
        required='true'
        error={error.description}
        onChange={setValues}
      />
      <Button onClick={handleSubmit} margin="normal" className="btn" variant="contained">
        Add Task
      </Button>
    </form>
  );
};

export default Form;
