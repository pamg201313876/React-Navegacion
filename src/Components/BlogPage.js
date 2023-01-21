import React from 'react'
import { BlogLink } from './BlogLink'
import blogdata from '../Data/BlogData'
import { Outlet } from 'react-router-dom'

export const BlogPage = () => {
  return (
    <>
      
      <div>BlogPage</div>

      

      <ul>
        {
          blogdata.map(
            post => (
                <BlogLink key={post.slug} post={post}/>
            )
          )
        }
      </ul>


      <Outlet/>
    </>
  )
}
