import React from 'react';

function Character({character}) {
    const {name, status, species, gender, image} = character;
    return (
        <div className={'wrapBlock'}>
            <img src={image} alt={name} className={'image'}/>
            <div className={'infoBlock'}>
                <div className={'info'}>Name: {name}</div>
                <div className={'info'}>Status: {status}</div>
                <div className={'info'}>Gender: {gender}</div>
                <div className={'info'}>Species: {species}</div>
            </div>
        </div>
    );
}

export {Character};