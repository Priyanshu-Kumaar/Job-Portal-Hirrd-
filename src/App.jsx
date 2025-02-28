import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import Joblisting from './pages/job-listing'
import JobPage from './pages/job'
import PostJobs from './pages/post-jobs'
import SavedJobs from './pages/saved-jobs'
import MyJobs from './pages/my-jobs'
import { ThemeProvider } from './components/theme-provider'
import ProtectedRoute from './components/protected-route'

const router=createBrowserRouter([
  {
  element: <AppLayout/>,
  children: [
    {
      path:'/',
      element:<LandingPage/>,
    },
    {
      path:'/onboarding',
      element:(
        <ProtectedRoute>
        <Onboarding/>
        </ProtectedRoute>
      
      )
    },
    {
      path:'/jobs',
      element:(
        <ProtectedRoute>
        <Joblisting/>
        </ProtectedRoute>
        
      )
     
    },
    {
      path:'/job/:id',
      element:(
        <ProtectedRoute>
        <JobPage/>
        </ProtectedRoute>

      )
      
    },
    {
      path:'/post-jobs',
      element:(
        <ProtectedRoute>
        <PostJobs/>
        </ProtectedRoute>
      )    },
    {
      path:'/saved-jobs',
      element:(
        <ProtectedRoute>
        <SavedJobs/>
        </ProtectedRoute>
      )   
     },
    {
      path:'/my-jobs',
      element:(
        <ProtectedRoute>
        <MyJobs/>
        </ProtectedRoute>
      )    },
  ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router ={router}/>
    </ThemeProvider>
 
    </>
  )
}

export default App
