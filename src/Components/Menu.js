import React from 'react'
import { Link, NavLink, Routes } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav>
      <ul>        

        {route.map(route => (

          <li key={route.to} >
            <NavLink to={route.to} style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })} >{route.text}</NavLink>
          </li>

        ))}

      </ul>
    </nav>
  )
}


const route = [];
route.push(
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/profile',
    text: 'Profile'
  },
  {
    to: '/blog',
    text: 'Blog'
  },
  {
    to: '/login',
    text: 'Log In'
  },
  {
    to: '/logout',
    text: 'Log Out'
  },
)