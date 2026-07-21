import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import WhoWeAre from './pages/WhoWeAre'
import Community from './pages/Community'
import Events from './pages/Events'
import NCCM from './pages/NCCM'
import FinancialReports from './pages/FinancialReports'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:slug" element={<CourseDetail />} />
        <Route path="who-we-are" element={<WhoWeAre />} />
        <Route path="community" element={<Community />} />
        <Route path="events" element={<Events />} />
        <Route path="nccm" element={<NCCM />} />
        <Route path="financial-reports" element={<FinancialReports />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
