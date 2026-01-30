import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import PathwaysToPurpose from './pages/PathwaysToPurpose'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Book from './pages/Book'
import Whatsapp from './components/Whatsapp'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/pathways' element={<PathwaysToPurpose />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book' element={<Book />} />
      </Routes>
      <Footer />
      <Whatsapp />
    </div>
  )
}

export default App
