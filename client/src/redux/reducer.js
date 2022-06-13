export const initState = {
    tasks: [],
    currentTask: null
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
    
        case 'GET_TASKS':
            return {
                ...state,
                tasks: [...state.tasks, ...action.payload]
            }

        case 'DELETE_TASK':
            const tasks = state.tasks.filter(t => t._id !== action.payload)
            console.log(tasks);

            return {
                ...state,
                tasks
            }

        case 'RESET':
            return {
                ...state, 
                tasks: []
            }
        default:
            return state
    }
} 