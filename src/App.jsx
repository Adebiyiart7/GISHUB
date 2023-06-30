import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// LOCAL IMPORTS
import './index.css'
import Root from './root.jsx'
import ErrorPage from './error-page.jsx'
import Home from './pages/Home.jsx'
import Community from './pages/Community'
import Profile from './pages/Profile'
import About from './pages/About'

export default function App() {
  // const { currentUser, setOpenLoginModal } = useContext(AppContext)

  // const PrivateRoute = ({ component }) => {
  //   if (!currentUser?._id) {
  //     // toast.error("Please Login!");
  //     return <Navigate to='/' replace />
  //   }
  //   return component
  // }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/community',
          element: <Community />,
        },
        // {
        //   path: '/gishub',
        //   element: <PrivateRoute component={<gishub />} />,
        // },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
