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
                tasks: [...state.tasks, ...action.payload]
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