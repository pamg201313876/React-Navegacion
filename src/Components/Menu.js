import React from 'react'
import { Link, NavLink, Routes } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}

        {/* <li>
          <NavLink
            to={"/home"}
            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
          >Home</NavLink>
        </li>


        <li>
          <NavLink
            to={"/blog"}
            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
          >Blog</NavLink>
        </li>


        <li>
          <NavLink
            to={"/profile"}
            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
          >Profile</NavLink>
        </li>

      */}

        {route.map(route => (

          <li>
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
  }
)