import { useState } from 'react'
import Form from './components/Form';
import List from './components/List';

function App() {

  const addTask = (data) => {
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Form addTask={addTask} />
      <List />
    </div>
  );
}

export default App;
