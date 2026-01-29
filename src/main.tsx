import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Discover } from './pages/Discover.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Discover />
  </StrictMode>,
)
