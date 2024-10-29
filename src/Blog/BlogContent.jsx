import React from 'react'
import { useLocation } from 'react-router-dom'
import { data } from '../Data/BlogData';

export default function BlogContent() {
    let uselocation = useLocation();
    let index = uselocation.pathname.split('/')[2]
    let content = data.filter((d) => d.id==index)[0]
    
  return (
    <div className='blogContent'>
        <h1>Blog Content</h1>

        <div className="content">
            <div className='flex'><h2>ID:</h2><span>{content.id}</span></div>
            <div className='flex'><h2>Title:</h2><span>{content.title}</span></div>
            <div className='flex'><h2>Body:</h2><span>{content.body}</span></div>
        </div>
    </div>
  )
}
