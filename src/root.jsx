import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import { AppContextProvider } from './providers/AppContext'
import Navbar from './components/Navbar'
import LeftMenu from './components/navbar/LeftMenu'

export default function Root() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Navbar />
        <div className='text-primaryText'>
          <Toaster /> {/* last */}
          <div className='flex'>
            <div className='border-r border-gray-200 h-[100vh]'>
              <LeftMenu />
            </div>
            <div className='py-[10px]'>
              <Outlet />
            </div>
          </div>
        </div>
      </AppContextProvider>
    </QueryClientProvider>
  )
}
