import React from 'react'
import './Routing.css'
import { Link } from 'react-router-dom'

export default function Routing() {
  
  //array define karke fir usko array.map karke usme key(i) ka use karke color change kar sakte hain

  return (
    <div className='routing'>
        <h1>Routing</h1>

        <nav className='routingNav'>
            <ul>
              <li><Link className='li' to={'/todoList'}>ToDo List</Link></li>
              <li><Link className='li' to={'/'}>Introduction</Link></li>
              <li><Link className='li' to={'/features'}>Features</Link></li>
              <li><Link className='li' to={'/contact'}>Contact Us</Link></li>
              <li><Link className='li' to={'/blog'}>Blog</Link></li>
              <li><Link className='li' to={'/jsx'}>Error</Link></li>
            </ul>
        </nav>
    </div>
  )
}
