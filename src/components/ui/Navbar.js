import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Welcome!
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className="nav-link">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link">
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
