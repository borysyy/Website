import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const headingMap = {
    '/education': { text: 'Education', className: 'text-end display-4' },
    '/experience': { text: 'Experience', className: 'text-end display-4' },
    '/contact': { text: 'Contact', className: 'text-end display-4' },
    '/': { text: 'Syracuse, NY', className: 'text-end display-4' }, // Root path
  }

  const { text, className } = headingMap[location.pathname] || headingMap['/']

  return (
    <div className="bg-primary">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <h1 className="display-4">Yaroslav Borysyuk</h1>
            <div>
              <Navbar />
            </div>
          </div>
          <div className="col-8 justify-content-end">
            <h1 className={className}>{text}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
