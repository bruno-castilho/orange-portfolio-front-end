import IconButton from '@mui/material/IconButton'

import logo from '../../../assets/logo.svg'
import perfil from '../../../assets/perfil.svg'
import { Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderMenuContent, HeaderUserContent } from './styles'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

export function Desktop() {
  const { user } = useContext(AuthContext)
  return (
    <HeaderContainer>
      <HeaderMenuContent>
        <img src={logo} alt="" />
        <div>
          <Link to={'/meusprojetos'}>Meus Projetos</Link>
          <Link to={'/descobrir'}>Descobrir</Link>
        </div>
      </HeaderMenuContent>

      <HeaderUserContent>
        <img src={user?.avatar_url} alt="" />
        <IconButton color="inherit" size="medium">
          <Notifications />
        </IconButton>
      </HeaderUserContent>
    </HeaderContainer>
  )
}
