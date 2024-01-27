import { Routes, Route, Navigate } from 'react-router-dom'
import { MyProject } from './pages/MyProject'
import { Discover } from './pages/Discover'
import { DefaultLayout } from './layout/DefaultLayout'
import { Login } from './pages/Login/index.jsx'
import { Register } from './pages/Register/index.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { Callback } from './pages/Callback/index.jsx'

export function Router() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Navigate to={'/meusprojetos'} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/auth/callback" element={<Callback />} />

        <Route path="/" element={<DefaultLayout />}>
          <Route path="/meusprojetos" element={<MyProject />} />
          <Route path="/descobrir" element={<Discover />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </AuthContextProvider>
  )
}
