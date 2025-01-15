import {Routes, Route} from 'react-router'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  
  return (
    <>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Login/>} ></Route>
        <Route path="/todo" element={<Home/>} ></Route>       
      </Routes>
    </>
  )
}

export default App
