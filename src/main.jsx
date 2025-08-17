import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@components/App.jsx'
import FilterProvider from '@context/FilterProvider'

createRoot(document.getElementById('root')).render(
  <FilterProvider>
  <App />
  </FilterProvider>
)
