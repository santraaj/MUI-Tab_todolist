import React, {useState} from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Todolist from './Todolist';

function TabApp() {
  const [value, setValue] = useState('home');

  const handleChange = (event, value) => {
    setValue(value);
  };
  
  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="home" label="Home" />
        <Tab value="todos" label="Todos" />
      </Tabs>
      {value === 'home' && <div>HOME <h1>Welcome! Create your own To-do list here</h1></div>}
      {value === 'todos' && <div>TODOS <Todolist /> </div>}
    </div>
  );
};

export default TabApp;
