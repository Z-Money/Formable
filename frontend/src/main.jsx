import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ProfilesPage from './pages/ProfilesPage'
import NotFoundPage from './pages/NotFoundPage'

// import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <NotFoundPage />
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
