import React from 'react';

const Dogs = ({dogs, dispatch}) => {
    return (
        <div>
            <div>
                Dogs:
                {dogs.map(({id, name}) => <div key={id}>
                    <div>{name}</div>
                    <button onClick={()=>dispatch({type: 'deleteDog', id})}>Delete</button>
                </div>)}
            </div>
        </div>
    );
}

export {Dogs};