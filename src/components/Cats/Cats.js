import React from 'react';

import {petsActionType} from "../../reducers";

const Cats = ({cats, dispatch}) => {
    return (
        <div>
            Cats:
            {cats.map(({id, name}, index) => <div key={id}>
                <div>{name} </div>
                <button onClick={()=>dispatch({type: petsActionType.DELETE_CAT, index})}>Delete</button>
            </div>)}
        </div>
    );
}

export {Cats};