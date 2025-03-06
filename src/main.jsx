// Node Module
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Css
import './index.css';
import 'lenis/dist/lenis.css'

// Components
import App from './App.jsx'
import Projects from './pages/Projects.jsx';

// library
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/project",
    element:<Projects/>
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
