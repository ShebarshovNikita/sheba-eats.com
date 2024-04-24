import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import AuthCallbackPage from './pages/AuthCallbackPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path='/user-profile' element={<span>User profile</span>} />
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/auth-callback' element={<AuthCallbackPage />} />
        </Routes>
    )
}

export default AppRoutes