import React from 'react';

import {petsActionType} from "../../reducers";

const Dogs = ({dogs, dispatch}) => {
    return (
        <div>
            <div>
                Dogs:
                {dogs.map(({id, name}, index) => <div key={id}>
                    <div>{name}</div>
                    <button onClick={()=>dispatch({type: petsActionType.DELETE_DOG, index})}>Delete</button>
                </div>)}
            </div>
        </div>
    );
}

export {Dogs};