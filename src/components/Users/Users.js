import React from 'react';

import {useAppReducer} from "../../hooks/useAppReducer";
import {usersAction} from "../../reducers";

const Users = () => {
    const [state, dispatch] = useAppReducer(reducers => reducers.userReducer);

    return (
        <div>
            {state.map(({id, name, surname, age}, index) => <div key={id}>
                <div>{name}  {surname} - {age}</div>
                <button onClick={()=>dispatch(usersAction.DELETE_BY_ID(index))}>Delete</button>
            </div>)}
        </div>
    );
}

export {Users};