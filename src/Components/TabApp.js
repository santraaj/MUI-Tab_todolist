import React, {useState} from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Todolist from './Todolist';

function TabApp() {
  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {
    setValue(value);
  };
  
  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="one" label="Home" />
        <Tab value="two" label="Todos" />
      </Tabs>
      {value === 'one' && <div>HOME <h1>Welcome! Create your own To-do list here</h1></div>}
      {value === 'two' && <div>TODOS <Todolist /> </div>}
    </div>
  );
};

export default TabApp;
