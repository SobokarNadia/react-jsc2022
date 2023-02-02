import React, {useReducer, useRef} from 'react';

import {Cats, Dogs} from "../../components";


const PetsPage = () => {
    const initValue = () => ({cats: [], dogs: []})

    const cat = useRef();
    const dog = useRef();

    const reducer = (state, action) => {
        switch (action.type) {
            case 'addCat': {
                let slice = state.cats.slice(-1);
                let id = slice.length ? slice[0].id + 1 : 0;
                return {...state, cats: [...state.cats, {id, name: action.playload}]}
            }
            case 'deleteCat': {
                state.cats.splice(action.id, 1)
                return {...state, cats: [...state.cats]}
            }
            case 'addDog': {
                let slice = state.dogs.slice(-1);
                let id = slice.length ? slice[0].id + 1 : 0;
                return {...state, dogs: [...state.dogs, {id, name: action.playload}]}
            }
            case 'deleteDog': {
                state.dogs.splice(action.id, 1)
                return {...state, dogs: [...state.dogs]}
            }
            default:
                return {...state}
        }
    }

    const [state, dispatch] = useReducer(reducer, null, initValue);
    return (
        <div>
            <input type="text" placeholder={'Cat name'} ref={cat}/>
            <button onClick={() => {
                dispatch({type: 'addCat', playload: cat.current.value})
                cat.current.value = ''
            }}>Add cat
            </button>

            <input type="text" placeholder={'Dog name'} ref={dog}/>
            <button onClick={() => {
                dispatch({type: 'addDog', playload: dog.current.value})
                dog.current.value = ''
            }}>Add dog
            </button>

            <div style={{display: 'flex', gap: '30px',}}>
                <Cats cats={state.cats} dispatch={dispatch}/>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export {PetsPage};
