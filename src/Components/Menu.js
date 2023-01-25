import React from 'react'
import { Link, NavLink, Routes } from 'react-router-dom'
import { useAuth } from '../Data/Auth'

export const Menu = () => {

  const auth = useAuth();

  return (
    <nav>
      <ul>

        {route.map(route => {
          if(route.publicOnly && auth.user) return null;

          if ( (route.private && !auth.user) ) return null;

          return (
            <li key={route.to} >
              <NavLink to={route.to} style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })} >{route.text}</NavLink>
            </li>
          )

        })}

      </ul>
    </nav>
  )
}


const route = [];
route.push(
  {
    to: '/',
    text: 'Home',
    private: false,
  },
  {
    to: '/profile',
    text: 'Profile',
    private: true,
  },
  {
    to: '/blog',
    text: 'Blog',
    private: false,
  },
  {
    to: '/login',
    text: 'Log In',
    publicOnly: true,
    private: false,
  },
  {
    to: '/logout',
    text: 'Log Out',
    private: true,
  },
)