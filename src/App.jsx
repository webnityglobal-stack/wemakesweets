import './App.css'
import AppRoutes from './routes/AppRoutes'
import { Toaster } from 'sonner'
import ErrorBoundary from './components/common/ErrorBoundary'

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
      <ErrorBoundary>
        <AppRoutes/>
      </ErrorBoundary>
    </div>
  )
}

export default App
