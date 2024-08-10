import React from 'react';
import {Routes, Route,Link} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/about';
import Counter from './pages/Counter';
import Input from './pages/input';
import Input2 from './pages/input2';
import List from './pages/List'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/Counter">Counter</Link> | 
        <Link to="/Input">Input</Link> | 
        <Link to="/Input2">Input2</Link> |
        <Link to="/List">List</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/Counter' element={<Counter />}/>
        <Route path='/Input' element={<Input />}/>
        <Route path='/Input2' element={<Input2 />}/>
        <Route path='/List' element={<List />}/>
      </Routes>

    </div>
  );
}

export default App;
