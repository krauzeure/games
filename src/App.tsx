import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Games from './Pages/Games/Games'
import Help from './Pages/Help/Help'
import Memory from './Pages/Games/Memory/Memory'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/memory" element={<Memory />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  )
}

export default App
