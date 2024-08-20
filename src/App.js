import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button, InputGroup, Form, ButtonGroup, Tab, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([
    { no: 1, title: '공부하기', done: false },
    { no: 2, title: '밥먹기', done: false },
    { no: 3, title: '수업가기', done: true },
    { no: 4, title: '꿀잠자기', done: false }]
  );
  const [noCnt, setNoCnt] = useState(5);
  const [inputTitle, setInputTitle] = useState("");
  const [outputTitle, setOutputTitle] = useState("");
  const onSaveTitle = (e) => {
    setTodoList([...todoList, { no: noCnt, title: inputTitle, done: false }]);
    setNoCnt(noCnt + 1);
    setInputTitle("");

  }
  const onChangeTitle = (e) => {
    setInputTitle(e.target.value);
  }
  const onEdit = ({ no, title, done }) => {
    const newEditList = [...todoList];
    todoList.forEach((item, idx)=>{
      if(item.no === no){
        newEditList[idx].title = outputTitle;
      }
    });
    setOutputTitle("");
    setTodoList(newEditList);
  }
  const onDelete = ({ no, title, done }) => {
    const newList = todoList.filter((todo) => {
      return todo.no !== no;
    });
    setTodoList(newList);
  }
  const onDoneFlag = ({ no, title, done }) => {
    const newTodoList = [...todoList];
    todoList.forEach((item, idx)=>{
      if(item.no === no){
        newTodoList[idx].done = !done;
      }
    });
    setTodoList(newTodoList);
  }
  const line = { textDecoration: "line-through" };


  return (

    <div className="App">
      <div className='App-header'>
        <h1>TodoList App</h1>
      </div>
      <div className='input-title'>
        <InputGroup>
          <Form.Control type="text" placeholder="Input Todo" onChange={onChangeTitle} />
          <Button variant="primary" onClick={onSaveTitle}>
            Save
          </Button>
        </InputGroup>
      </div>
      <div className='list-body'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((item) => {
              return (
                <tr key={item.no}>
                  <td colSpan={3}>
                    <InputGroup>
                      <InputGroup.Checkbox defaultChecked={item.done} onChange={() => {
                        onDoneFlag(item);
                      }} />

                      <Form.Control style={item.done ? line : {}} type="text" 
                      defaultValue={item.title} 
                      onChange={(e)=>{
                        setOutputTitle(e.target.value);
                      }}
                      />

                      <Button variant="primary" onClick={() => {
                        onEdit(item);}}>Edit</Button>
                      <Button variant="danger" onClick={() => {
                        onDelete(item);
                      }}>Delete</Button>
                    </InputGroup>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>

      </div>
    </div>
  );
}

export default App;
