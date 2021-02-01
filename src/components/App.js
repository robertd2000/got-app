import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Books} from './Books';
import { Characters } from './characters';
import { CharInput } from './charInput';
import {Header} from './header';

const AppJS = () => {

  const char = () => {
    return <div>
      <CharInput/>
      <Characters/>
    </div>
  }
  
  return (
    <div className='container'>
      <Router>
        <Header/>
        <hr/>
        <Route path='/' exact component={Books} />
        <Route path='/characters' exact component={char} />
      </Router>
      
    </div>
  )
}

export default AppJS