import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Introduction from './RoutingComponents/Introduction';
import Features from './RoutingComponents/Features';
import Contact from './RoutingComponents/Contact';
import Blog from './Blog/Blog';
import BlogContent from './Blog/BlogContent';
import ToDo from './TodoList/ToDo';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const allRouters = createBrowserRouter([
  {
    path: '/', 
    element: <Introduction/>
  },
  {
    path: '/todoList', 
    element: <ToDo/>
  },
  {
    path: '/features', 
    element: <Features/>
  },
  {
    path: '/contact', 
    element: <Contact/>
  },
  {
    path: '/blog', 
    element: <Blog/>
  },
  {
    path: '/blog/:id',
    element: <BlogContent/>
  },
  {
    path: '*',
    element: <App/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={allRouters}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
