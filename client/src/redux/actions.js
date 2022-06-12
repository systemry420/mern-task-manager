import axios from 'axios'

export const addTask = (data) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:8000/api/tasks', { data })
        const task = await res.data
        console.log(task);

        // dispatch({ 
        //     type: 'ADD_TASK',
        //     payload: task
        // })
    } catch (err) {
        console.log(err);
    }
}