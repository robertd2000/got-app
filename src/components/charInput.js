import React, {useState, useEffect} from 'react';
import {GotApi} from '../service/gotApi';

export const CharInput = () => {

    const [state, setState] = useState('');

    const inputHandler = (e) => {
        try {
            GotApi.getCharacter(e.target.value).then(data => setState(data))
        } catch {
            console.log('not found')
        }
    }

    return (
        <div>
            <input className='input__char' onChange={inputHandler} />
            <h1>{state.name}</h1>
            <div>{state.gender}</div>
            <div>{state.born}</div>

            <hr></hr>
        </div>
    )
}