import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="filterby header-spc">Filter By:</div>
      <div className="unread header-spc">Unread</div>
      <div className="read header-spc">Read</div>
      <div className="favourite header-spc">Fovourites</div>
    </div>
  )
}

export default Header
