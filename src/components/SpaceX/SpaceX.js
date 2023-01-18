import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Launch} from "../index";

const SpaceX = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches').then(value => value.data).then(value => setLaunches(value))
    }, [])


    return (
        <div>
            {launches.map((launch, i) => <Launch key={i} launch={launch}/>)}
        </div>
    );
}

export {SpaceX};