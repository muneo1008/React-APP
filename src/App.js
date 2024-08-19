import React from 'react';
// import {Routes, Route,Link} from 'react-router-dom';
// import { Button, Alert, Container, NavDropdown,Card,Accordion,Badge,Tab,ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

// import Home from './pages/Home';
// import About from './pages/about';
// import Counter from './pages/Counter';
// import Input from './pages/input';
// import Input2 from './pages/input2';
// import List from './pages/List';


function Nav(props){
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    const element = props.topics[i];
    lis.push(<li key={element.id}>
      <a id={element.id} href={'/read/'+element.id} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{element.title}</a>
      </li>)
    
  }
  return(
    <ol>{lis}</ol>
  )
}

function Article(props){
  return(
    <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
  )
}
function Header(props){

  return(
    <header>
      <h1><a href='/' onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
      </header>
  )
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1,title:'html',body:'html is ...'},
    {id:2,title:'css',body:'css is ...'},
    {id:3,title:'js',body:'js is ...'}
  ]
  let content =null;
  if(mode ==='WELCOME'){
    content = <Article title='Welcome' body='Hello, WEB'/>
  }else if(mode === 'READ'){
    let title,body = null;
    for (let i = 0; i < topics.length; i++) {
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}/>
  }

  return (
    <div className="App">

      <Header title='REACT' onChangeMode={()=>{
        setMode('WELCOME');
      }}/>

      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}/>
      {content}
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
