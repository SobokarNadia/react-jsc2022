const petsActionType = {
    ADD_CAT: 'ADD_CAT',
    DELETE_CAT: 'DELETE_CAT',
    ADD_DOG: 'ADD_DOG',
    DELETE_DOG: 'DELETE_DOG'
}

const initValue = () => ({cats: [], dogs: []})

const reducer = (state, action) => {
    switch (action.type) {
        case petsActionType.ADD_CAT: {
            let slice = state.cats.slice(-1);
            let id = slice.length ? slice[0].id + 1 : 0;
            return {...state, cats: [...state.cats, {id, name: action.playload}]}
        }
        case petsActionType.DELETE_CAT: {
            state.cats.splice(action.index, 1)
            return {...state, cats: [...state.cats]}
        }
        case petsActionType.ADD_DOG: {
            let slice = state.dogs.slice(-1);
            let id = slice.length ? slice[0].id + 1 : 0;
            return {...state, dogs: [...state.dogs, {id, name: action.playload}]}
        }
        case petsActionType.DELETE_DOG: {
            state.dogs.splice(action.index, 1)
            return {...state, dogs: [...state.dogs]}
        }
        default:
            return {...state}
    }
}

export {initValue, reducer, petsActionType}