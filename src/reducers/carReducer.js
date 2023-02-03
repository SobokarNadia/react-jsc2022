const carActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const carAction = {
    ADD: (car) => ({type: carActionTypes.ADD, payload: car}),
    DELETE_BY_ID: (index) => ({type: carActionTypes.DELETE_BY_ID, payload: index})
}

const init = () => [];

const carReducerFunc = (state, action) => {
    switch (action.type) {
        case carActionTypes.ADD:
            let id = state.slice(-1).length ? state.slice(-1)[0].id + 1 : 0;
            return [...state, {id, ...action.payload}]
        case carActionTypes.DELETE_BY_ID:
            state.splice(action.payload, 1)
            return [...state]
        default:
            return [...state]
    }
}

export {init, carReducerFunc, carAction}