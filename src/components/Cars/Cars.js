import React from 'react';

import {useAppReducer} from "../../hooks/useAppReducer";
import {carAction} from "../../reducers";

const Cars = () => {
    const [state, dispatch] = useAppReducer(reducers => reducers.carReducer);

    return (
        <div>
            {state.map(({id, model, year}, index) => <div key={id}>
                <div>{model} - {year}</div>
                <button onClick={()=>dispatch(carAction.DELETE_BY_ID(index))}>Delete</button>
            </div>)}
        </div>
    );
}

export {Cars};