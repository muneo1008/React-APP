import React from 'react';
import {Routes, Route,Link} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/about';
import Counter from './pages/Counter';
import Input from './pages/input';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/Counter">Counter</Link> | <Link to="/Input">Input</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/Counter' element={<Counter />}/>
        <Route path='/Input' element={<Input />}/>
      </Routes>

    </div>
  );
}

export default App;
