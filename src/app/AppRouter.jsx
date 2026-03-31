import { Navigate, Route, Routes } from 'react-router-dom'
import { adminRoutes } from './routes/AdminRouter'
import Login from '../features/admin/pages/Login'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      {adminRoutes}
    </Routes>
  )
}

export default AppRouter
