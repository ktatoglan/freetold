import React from 'react'

const BlogContent = ({blog}) => {
  return (
    <p className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content.rendered }}></p>

  )
}

export default BlogContent