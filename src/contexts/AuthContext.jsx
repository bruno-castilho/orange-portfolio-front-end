import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../confs/api'

export const AuthContext = createContext({})

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(
    localStorage.getItem('@orange-portfolio:token'),
  )

  const navigate = useNavigate()

  function loginSucess(data) {
    localStorage.setItem('@orange-portfolio:token', data.token)
    setToken(data.token)
    setUser(data.user)
    navigate('/meusprojetos')
  }

  function handleLogout() {
    api
      .post('/logout', {})
      .then(() => {
        setUser(null)
        localStorage.setItem('@orange-portfolio:token', '')
        navigate('/login')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    const path = window.location.pathname

    if (path !== '/auth/callback') {
      const params = { token }
      api
        .get('/logged', { params })
        .then((response) => {
          const { data } = response

          if (data.logged) {
            localStorage.setItem('@orange-portfolio:token', data.token)
            setToken(data.token)
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
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        handleLogout,
        loginSucess,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
