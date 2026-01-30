import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import App from './App.jsx'
import Home from './Home/Home.jsx'
import Company from './Company/Company.jsx'
import Partners from './Partners/Partners.jsx'
import Blog from './Blog/Blog.jsx'
import Contact from './Contact/Contact.jsx'
import './App.css'
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='Partners_with' element={<Partners />} />
      <Route path='Blog' element={<Blog />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='Company' element={<Company />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
)