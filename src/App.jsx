import { Link, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Sobre from './components/Sobre'
import './App.css'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/sobre">Sobre</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  )
}
