import React from 'react'
import { Link, NavLink, Routes } from 'react-router-dom'


export const BlogLink = ({post}) => {
  return (
    <li>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}
