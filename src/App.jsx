import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import { ScrollToTop } from './components/atoms/ScrollToTop' 
import ProjectsList from './components/pages/ProjectsList'
import ProjectDetail from './components/pages/ProjectDetail'
import Gallery from './components/pages/Gallery'

/**
 * App — Root router
 * /              → Home (landing page)
 * /proyectos     → Projects list
 * /proyectos/:slug → Project detail with gallery
 * /galeria       → General photo gallery
 */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />  {/* ← agrega aquí, antes de Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<ProjectsList />} />
        <Route path="/proyectos/:slug" element={<ProjectDetail />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
