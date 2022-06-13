import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form';
import List from './components/List';
import { addTask, getTasks, deleteTask } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  const {tasks} = useSelector(state => state.taskReducer)

  const add = (data) => {
    dispatch(addTask(data))
  }

  const edit = (id) => {
    console.log(id);
  }

  const deleteItem = id => {
    dispatch(deleteTask(id))
  }

  useEffect(() => {
    dispatch(getTasks())
  }, [])

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Form addTask={add} />
      {tasks.length > 0 && <List list={tasks} handleDelete={deleteItem} />}
    </div>
  );
}

export default App;
