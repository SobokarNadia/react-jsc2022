import React from 'react';
import './characters.css'

function Simpson({name, age, gender, pic, occupation}) {
    return (
        <div className={'wrapBlock'}>
            <img src={pic} alt={name} className={'image'}/>
            <div className={'infoBlock'}>
                <div className={'info'}>Name: {name}</div>
                <div className={'info'}>Age: {age}</div>
                <div className={'info'}>Gender: {gender}</div>
                <div className={'info'}>Occupation: {occupation}</div>
            </div>
        </div>
    );
}

export default Simpson;