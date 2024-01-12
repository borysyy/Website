import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/ui/Header/Header'
import Home from './components/pages/Home'
import Education from './components/pages/Education'
import Experience from './components/pages/Experience'
import Interests from './components/pages/Interests/Interests'
import Contact from './components/pages/Contact'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
