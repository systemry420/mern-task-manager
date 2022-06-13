import axios from 'axios'

const URL = 'http://localhost:8000/api/tasks';

export const addTask = (data) => 
    async (dispatch) => {
    try {
        const res = await axios.post(URL, data)
        const task = await res.data
        console.log(task);

        dispatch({ 
            type: 'ADD_TASK',
            payload: task
        })
    } catch (err) {
        console.log(err);
    }
}

export const getTasks = () => async (dispatch) => {
    try {
        const res = await axios.get(URL)
        const tasks = await res.data

        dispatch({
            type: "ADD_TASK",
            payload: tasks
        })
    } catch (error) {
        console.log(error);
    }
}