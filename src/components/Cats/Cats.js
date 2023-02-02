import React from 'react';

const Cats = ({cats, dispatch}) => {
    return (
        <div>
            Cats:
            {cats.map(({id, name}) => <div key={id}>
                <div>{name} </div>
                <button onClick={()=>dispatch({type: 'deleteCat', id})}>Delete</button>
            </div>)}
        </div>
    );
}

export {Cats};