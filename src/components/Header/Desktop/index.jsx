import IconButton from '@mui/material/IconButton'

import logo from '../../../assets/logo.svg'

import { Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderMenuContent, HeaderUserContent } from './styles'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

export function Desktop() {
  const { user, handleLogout } = useContext(AuthContext)
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
        <img src={user?.url_avatar} alt="" />
        <IconButton color="inherit" size="medium" onClick={handleLogout}>
          <Notifications />
        </IconButton>
      </HeaderUserContent>
    </HeaderContainer>
  )
}
