import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form';
import List from './components/List';
import { addTask, getTasks } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  const {tasks} = useSelector(state => state.taskReducer)

  const add = (data) => {
    dispatch(addTask(data))
  }

  useEffect(() => {
    dispatch(getTasks())
  }, [])

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Form addTask={add} />
      {tasks.length > 0 && <List list={tasks} />}
    </div>
  );
}

export default App;
