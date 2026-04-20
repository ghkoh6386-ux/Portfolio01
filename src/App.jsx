import { Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import ScrollManager from './components/layout/ScrollManager'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'

export default function App() {
  return (
    <div className="app-shell">
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  )
}
