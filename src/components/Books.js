import React, {useState, useEffect} from 'react';
import {GotApi} from '../service/gotApi';


export const Books = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        GotApi.getBooks().then(data => setState(data))

    }, []);

    console.log(state)
    const list = state.map((item, i) => {
        return <div className='book__item' key={i}>
            <h1>Название книги: {item.name}</h1>
            <div>Автор: {item.authors[0]}</div>
            <p>Количество страниц: {item.numberOfPages}</p>  
            <p>Год выпуска: {item.released.split('-')[0]}</p>
            <hr/>
        </div>
    })

    return (
        <div>
            {list}
        </div>
    )
}