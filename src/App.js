import React from 'react';
import {Routes, Route,Link} from 'react-router-dom';
import { Button, Alert, Container, NavDropdown,Card,Accordion,Badge,Tab,ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// import Home from './pages/Home';
// import About from './pages/about';
// import Counter from './pages/Counter';
// import Input from './pages/input';
// import Input2 from './pages/input2';
// import List from './pages/List';


function App() {
  return (
    <div className="App">
      <Container fluid>
        <ButtonGroup>
          <ButtonGroup>
            <Button variant="primary" onClick={() => console.log("Primary")}>
              Primary
            </Button>
            <Button variant="danger" onClick={() => console.log("Danger")}>
              Danger
            </Button>
            <Button variant="dark" onClick={() => console.log("Dark")}>
              Dark
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </Container>
    </div>
      
      /* <nav>
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
      </Routes> */

  );
}

export default App;
