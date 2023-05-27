import React from 'react'
import './style.css'

export default function Navbar() {
  return (
    <section className='Navbar'>
      <ul className='navList'>
        <li className='navLinksWrapper'><div className='navLinks'>Home</div></li>
        <li className='navLinksWrapper'><div className='navLinks'>Skills</div></li>
        <li className='navLinksWrapper'><div className='navLinks'>Projects</div></li>
        <li className='navLinksWrapper'><div className='navLinks'>Contact</div></li>
      </ul>
    </section>
  )
}
