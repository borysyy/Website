// src/components/ui/Header.js
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="bg-primary">
      <div className="row">
        <div className="col-4">
          <h1 className="display-4">Yaroslav Borysyuk</h1>
          <div>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
