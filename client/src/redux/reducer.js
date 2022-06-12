export const initState = {
    tasks: []
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                state
            }
    
        default:
            return state
    }
} 