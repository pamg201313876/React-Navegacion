import React from 'react'
import { BlogLink } from './BlogLink'
import blogdata from '../Data/BlogData'

export const BlogPage = () => {
  return (
    <>
      <div>BlogPage</div>
      <ul>
        {
          blogdata.map(
            post => (
                <BlogLink post={post}/>
            )
          )
        }
      </ul>
    </>
  )
}
