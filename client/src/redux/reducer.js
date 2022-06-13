export const initState = {
    tasks: []
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
                ...state
            }

        case 'DELETE_TASK':
            const tasks = state.tasks.filter(t => t._id !== action.payload)

            return {
                ...state,
                tasks
            }
        
        case 'EDIT_TASK':
            const list = state.tasks.filter(t => t._id !== action.payload)

            return {
                ...state,
                tasks: [...list, action.payload]
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