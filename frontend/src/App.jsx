import { createBrowserRouter, RouterProvider } from 'react-router'

import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ProfilesPage from './pages/ProfilesPage'
import NotFoundPage from './pages/NotFoundPage'
import AuthPage from './pages/AuthPage'
import DocsPage from './pages/DocsPage'
import DashboardPage from './pages/DashboardPage'


export default function App() {

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
  {
    path: '/auth',
    element: <AuthPage />
  },
  {
    path: '/docs',
    element: <DocsPage />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />
  }
  ]);
  return <RouterProvider router={router} />
}