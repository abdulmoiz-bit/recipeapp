const initialState = [];
const counterReducer = (state = initialState, action) => {
    const todo = action.payload;
    switch (action.type) {
        case 'DELETE':
            const exist = state.find(item => item.id === todo.id)
            if (exist) {
                return state.filter(item => item.id !== todo.id)
            }
            return todo;

        default: 
            return state;
    }
}

export default counterReducer;