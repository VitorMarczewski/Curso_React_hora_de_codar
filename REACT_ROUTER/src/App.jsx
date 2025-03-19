import { useState } from 'react'

//aula 1 configurando react router
import {BrowserRouter, Routes,Route} from 'react-router-dom';

//paginas

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product';
import NotFound from './pages/NotFound';
//aula 2
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm'
import Search from './pages/Search';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <BrowserRouter>
          <Navbar/>
          <SearchForm/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path= "product/:id" element={<Product/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/search" element={<Search/>}/>
          </Routes>
        </BrowserRouter>
        
        
      </div>
    </>
  )
}

export default App
