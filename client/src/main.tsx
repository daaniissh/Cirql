import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from 'react-router-dom'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})
createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <QueryClientProvider client={queryClient} >
      <App />
    </QueryClientProvider>
  </BrowserRouter>

)
