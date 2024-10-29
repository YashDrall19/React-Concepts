import React from 'react'
import './Blog.css'
import { data } from '../Data/BlogData'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div className='blog'>
        <h1 className='title'>Blog Page</h1>

        <div className="container">
        {data.map((d, i) =>{
            return(
                <div className='card' key={i}>
                    <h3>{d.title}</h3>
                    <p>{d.body}</p>
                    <button><Link to={`/blog/${d.id}`}>Read More</Link></button>
                </div>
        )})}
        </div>
    </div>
  )
}
