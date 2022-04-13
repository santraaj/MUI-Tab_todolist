import React, { useState, useRef }  from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

function Todolist() {
  const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
  const [todos, setTodos] = useState([]);
  const gridRef =useRef();

  const addTodo = (event) => {
    setTodos([...todos, todo]);
    setTodo({desc: '', date: '', priority: ''});
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
        setTodos(todos.filter((todo, index) =>
            index !== gridRef.current.getSelectedNodes()[0].childIndex))
    }
    else {
        alert('Select a row first!');
    }
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
      <Button onClick={deleteTodo} variant="outlined" color="error" endIcon={<DeleteIcon />}>Delete</Button>
      <div className="ag-theme-material" style={{height: 400, width: 600, margin: 'auto'}}>
        <AgGridReact
          rowData={todos}
          columnDefs={columns}
          rowSelection="single"
          ref={gridRef}
          onGridReady={ params => gridRef.current = params.api }>
        </AgGridReact>
      </div>
    </div>
  );
}

export default Todolist;