import { useState } from 'react'
import { useDispatch } from 'react-redux';
import Form from './components/Form';
import List from './components/List';
import { addTask } from './redux/actions';

function App() {

  const dispatch = useDispatch()

  const add = (data) => {
    console.log(data);
    dispatch(addTask(data))
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Form addTask={add} />
      <List />
    </div>
  );
}

export default App;
