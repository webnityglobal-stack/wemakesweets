import './App.css'
import AppRoutes from './routes/AppRoutes'
import { Toaster } from 'sonner'

function App() {
  return (
    <div className=''>
      <Toaster 
        position="top-right" 
        richColors 
        closeButton 
        duration={3500}
        toastOptions={{
          style: {
            fontFamily: 'var(--font-manrope, sans-serif)',
          },
        }}
      />
      <AppRoutes/>
    </div>
  )
}

export default App
