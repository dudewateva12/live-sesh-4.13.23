import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { userData } from './utils/users.js'

function App() {
//  console.log(userData)
const[users, setUsers] = useState([]);


  return (
    <div className="App">
      <Header userData={userData} setUsers={setUsers} />
      <HomePage users={users} />
    </div>
  )
}

export default App
