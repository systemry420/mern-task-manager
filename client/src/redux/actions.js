import axios from 'axios'

const URL = 'http://localhost:8000/api/tasks/';

export const addTask = (data) => 
    async (dispatch) => {
    try {
        // dispatch({
        //     type: 'RESET'
        // })
        const res = await axios.post(URL, data)
        const task = await res.data

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
            type: "GET_TASKS",
            payload: tasks
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(URL + id)

        dispatch({
            type: 'DELETE_TASK',
            payload: id
        })
    } catch (error) {
        console.log(error);
    }
}

export const editTask = (data) => async (dispatch) => {
    try {
        const res = await axios.patch(URL + data._id, data)
        const task = await res.data

        dispatch({
            type: 'EDIT_TASK',
            payload: task
        })
    } catch(error) {

    }
}