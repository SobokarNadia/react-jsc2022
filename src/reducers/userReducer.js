const userActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const usersAction = {
    ADD: (item) => ({type: userActionTypes.ADD, payload: item}),
    DELETE_BY_ID: (id) => ({type: userActionTypes.DELETE_BY_ID, payload: id})
}

const initial = () => [];

const userReducerFunc = (state, action) => {
    switch (action.type) {
        case userActionTypes.ADD:
            let slice = state.slice(-1);
            let id = slice.length ? slice[0].id + 1 : 0
            return [...state, {id, ...action.payload}]
        case userActionTypes.DELETE_BY_ID:
            state.splice(action.payload, 1)
            return [...state]
        default:
            return [...state]
    }
}


export {usersAction, userReducerFunc, initial}
