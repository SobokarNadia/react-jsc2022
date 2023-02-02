import React, {useReducer, useRef} from 'react';

import {Cats, Dogs} from "../../components";
import {initValue, petsActionType, reducer} from "../../reducers";


const PetsPage = () => {
    const cat = useRef();
    const dog = useRef();

    const [state, dispatch] = useReducer(reducer, null, initValue);
    console.log(state)
    return (
        <div>
            <input type="text" placeholder={'Cat name'} ref={cat}/>
            <button onClick={() => {
                dispatch({type: petsActionType.ADD_CAT, playload: cat.current.value})
                cat.current.value = ''
            }}>Add cat
            </button>

            <input type="text" placeholder={'Dog name'} ref={dog}/>
            <button onClick={() => {
                dispatch({type: petsActionType.ADD_DOG, playload: dog.current.value})
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
