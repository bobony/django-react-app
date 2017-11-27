import React from 'react'
import {
  NavLink
} from 'react-router-dom'
import './header.css'

const Header = () => (
  <div className='container'>
    <header className='primary-header'>
      <nav>
        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
        <NavLink to='/app/photos' activeClassName='active'>Photos</NavLink>
      </nav>
    </header>
  </div>
)

export default Header
