import React from 'react';
import {Link} from 'react-router-dom';

const data = [
    {title: 'Книги', path: '/'},
    {title: 'Персонажи', path: '/characters'},

]

const Nav = ({data}) => {
    return data.map((item, i) => {
        return (
            <Link to={item.path} key={i} className="nav_link" href="#" >{item.title}</Link>
        )
    })
}

export const Header = () => {
    return (
        <div className='nav'>
            <Nav data={data} />
        </div>
    )
}