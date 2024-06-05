import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ROUTES } from './constants'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path={`${ROUTES.HOME}`} element={<Home />} />
    </Routes>
  )
}

export default App
