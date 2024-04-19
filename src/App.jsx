import { Route, Routes } from 'react-router-dom/dist'
import './App.css'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Error from './pages/Error'

function App() {
  return (
    <div>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        {/* <Route path="/login">
          {localStorage.getItem("auth_token") ? <Navigate to="/" /> : <Route path="/login" element={<Login />} />}
        </Route>
        <Route path="/login">
          {localStorage.getItem("auth_token") ? <Navigate to="/" /> : <Route path="/register" element={<Register />} />}
        </Route> */}
      </Routes>
    </div>
  )
}

export default App
