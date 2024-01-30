import { useContext, useEffect } from 'react'
import api from '../../confs/api'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export function Callback() {
  const { user, loginSucess } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      api
        .get(`/google/login${window.location.search}`, {})
        .then((response) => {
          const { data } = response

          if (data.haveAnAccount) {
            loginSucess(data)
          } else {
            const { user } = data
            navigate(
              `/registrar?email=${user.email}&nome=${user.given_name}&sobrenome=${user.family_name}&url_avatar=${user.picture}`,
            )
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [user, loginSucess, navigate])

  return <div>Loading...</div>
}
