import React, {useState, useEffect} from 'react';
import {GotApi} from '../service/gotApi';

export const Houses = () => {
    const [state, setState] = useState([]);
    const [count, setcount] = useState(10);


    useEffect(() => {
        GotApi.getHouses(count).then(data => setState(data))
    }, []);

    const prevHandler = () => {
        setcount(() => {
            return count - 1
        })
        GotApi.getHouses(count).then(data => setState(data))
    }

    const nextHandler = () => {
        setcount(() => {
            return count + 1
        })
        GotApi.getHouses(count).then(data => setState(data))
    }

    const list = state.map((item, i) => {
        return (
            <div className='book__item' key={i}>
                <h1>Название дома: {item.name}</h1>
                <p>Регион: {item.region}</p>
                <div>Знамя: {item.coatOfArms}</div>
                <div>Титулы: {item.titles.join(', ')}</div>
                <div>Девиз: {item.words}</div>
                <hr/>
            </div>
        )
    })

    console.log(state)

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