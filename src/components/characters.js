import React, {useState, useEffect} from 'react';
import {GotApi} from '../service/gotApi';

export const Characters = () => {

    const [state, setState] = useState([]);
    const [count, setcount] = useState(10);
    useEffect(() => {
        GotApi.getCharacters(count).then(data => setState(data))
    }, []);

    const prevHandler = () => {
        setcount(() => {
            return count - 1
        })
        GotApi.getCharacters(count).then(data => setState(data))
    }

    const nextHandler = () => {
        setcount(() => {
            return count + 1
        })
        GotApi.getCharacters(count).then(data => setState(data))
    }

    console.log(state)
    const list = state.map((item, i) => {
        return (
            <div className='book__item' key={i}>
                <h1>Имя: {item.name}</h1>
                <div>Пол: {item.gender}</div>
                <div>Дата рождения: {item.born}</div>
                <div>Титулы: {item.titles.join(', ')}</div>
                <hr/>
            </div>
        )
    })
    return (
        <div>
            <div>
                <button onClick={prevHandler}>&#8592;</button>
                <button onClick={nextHandler}>&#8594;</button>
            </div>
            {list}
        </div>
    )
}