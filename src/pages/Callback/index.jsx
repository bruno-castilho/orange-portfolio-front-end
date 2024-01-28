import { useContext, useEffect } from 'react'
import api from '../../confs/api'
import { AuthContext } from '../../contexts/AuthContext'

export function Callback() {
  const { user, loginSucess } = useContext(AuthContext)

  useEffect(() => {
    if (!user) {
      api
        .get(`/google/login${window.location.search}`, {})
        .then((response) => {
          const { data } = response

          if (data.haveAnAccount) {
            loginSucess(data.user)
          } else {
            console.log(data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [user, loginSucess])

  return <div>Loading...</div>
}
