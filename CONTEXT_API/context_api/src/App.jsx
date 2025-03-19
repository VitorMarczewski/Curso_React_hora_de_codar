import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// COMPONENTES
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App
