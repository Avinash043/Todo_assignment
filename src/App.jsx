import {Routes, Route} from 'react-router'
import Home from './components/Home'
import AddTask from './components/AddTask'
import EditTodo from './components/EditTodo'
import EditTask from './components/EditTask'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/addtask" element={<AddTask/>} ></Route>
        <Route path="/edittask/:id" element={<EditTodo/>} ></Route>
        <Route path="/edittodo/:id" element={<EditTask/>} ></Route>
      </Routes>
    </>
  )
}

export default App
