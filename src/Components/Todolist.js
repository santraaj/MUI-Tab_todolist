import React, { useState }  from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Todolist() {
  const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    setTodos([...todos, todo]);
    setTodo({desc: '', date: '', priority: ''});
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  const columns = [
    { field: 'desc', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'priority', sortable: true, filter: true },
  ]

  return (
    <div className="App">
      <TextField 
        label="Description" 
        variant="standard" 
        name="desc" value={todo.desc} 
        onChange={inputChanged}/>
      <TextField
        label="Date"
        variant="standard" 
        name="date" value={todo.date} 
        onChange={inputChanged}/>
      <TextField 
        label="Priority"
        variant="standard"
        name="priority" value={todo.priority} 
        onChange={inputChanged}/>
      <Button onClick={addTodo} variant="outlined">Add</Button>
      <div className="ag-theme-material" style={{height: 400, width: 600, margin: 'auto'}}>
        <AgGridReact
          rowData={todos}
          columnDefs={columns}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default Todolist;