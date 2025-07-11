import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ProfilesPage from './pages/ProfilesPage'

import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <h1>404</h1>
},
{
  path: '/profile',
  element: <ProfilePage />
},
{
  path: '/profiles',
  element: <ProfilesPage />,
  children: [
    {
      path: '/profiles/:profileId',
      element: <ProfilePage />
    }
  ]
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
