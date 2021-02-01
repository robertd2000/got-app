import React, {useState, useEffect} from 'react';
import {GotApi} from '../service/gotApi';

export const Characters = () => {

    const [state, setState] = useState([]);
    useEffect(() => {
        GotApi.getCharacters().then(data => setState(data))
    }, []);

    console.log(state)
    const list = state.map((item, i) => {
        return (
            <div className='book__item' key={i}>
                <h1>Имя: {item.name}</h1>
                <div>Пол: {item.gender}</div>
                <div>Дата рождения: {item.born}</div>
                <div>Титулы: {item.titles.map(i => i)}</div>
                <hr/>
            </div>
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}