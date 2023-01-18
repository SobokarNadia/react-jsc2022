import React from 'react';

const Launch = ({launch}) => {
    const {name,date_utc, links: {patch: {small}}} = launch;
    return (
        <div>
            <h5>{name} - {date_utc.substring(0,4)}</h5>
            {small && <img width={'50px'} src={small} alt={name}/>}
        </div>
    );
}

export {Launch};