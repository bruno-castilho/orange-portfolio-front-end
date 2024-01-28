import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../confs/api'

export const AuthContext = createContext({})

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  function loginSucess(userParams) {
    setUser(userParams)
    navigate('/meusprojetos')
  }

  function handleLogin(data) {
    api
      .post('/login', data)
      .then((response) => {
        loginSucess(response.data.user)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function handleGoogleLogin() {
    api
      .get(`/google/url`, {})
      .then((response) => {
        window.location.assign(response.data.url)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function handleLogout() {
    api
      .post('/logout', {})
      .then(() => {
        setUser(null)
        navigate('/login')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    const path = window.location.pathname

    if (path !== '/auth/callback') {
      api
        .get('/logged', {})
        .then((response) => {
          const { data } = response

          if (data.logged) {
            setUser(data.user)
            if (path === '/login' || path === '/registrar')
              navigate('/meusprojetos')
          } else {
            if (path === '/meusprojetos' || path === '/descobrir')
              navigate('/login')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [navigate])

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
        loginSucess,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
