import React, {useEffect, useState} from 'react';
import axios from "axios";

import {Launch} from "./";

const SpaceX = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches').then(value => value.data).then(value => setLaunches(value))
    }, [])


    return (
        <div>
            {launches.map((launch, i) => {
                if(launch.date_utc.substring(0,4)) <Launch key={i} launch={launch}/>
            })}
        </div>
    );
}

export {SpaceX};