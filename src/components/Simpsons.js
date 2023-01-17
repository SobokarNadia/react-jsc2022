import React from 'react';
import {Simpson} from "./Simpson";

let Simpsons = (props) => {
    let simpsons = [
        {
            id:1,
            name: 'Homer',
            age: 39,
            gender: 'Male',
            pic: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png',
            occupation: 'Safety inspector'
        },{
            id:2,
            name: 'Bart',
            age: 10,
            gender: 'Male',
            pic: 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png',
            occupation: 'Student at Springfield Elementary School'
        },{
            id:3,
            name: 'Marge',
            age: 36,
            gender: 'Female',
            pic: 'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png',
            occupation: 'Unemployed (currently)'
        },{
            id:4,
            name: 'Lisa',
            age: 9,
            gender: 'Male',
            pic: 'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png',
            occupation: 'Student at Springfield Elementary School'
        },{
            id:5,
            name: 'Abe Simpson II',
            age: 86,
            gender: 'Male',
            pic: 'https://static.wikia.nocookie.net/simpsons/images/a/a9/Abraham_Simpson.png',
            occupation: 'Retired'
        },
    ]
    return (
        <div className={'wrap'}>
            {simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
}

export {Simpsons};