import IconButton from '@mui/material/IconButton'

import logo from '../../../assets/logo.svg'
import perfil from '../../../assets/perfil.svg'
import { Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderMenuContent, HeaderUserContent } from './styles'

export function Desktop() {
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
        <img src={perfil} alt="" />
        <IconButton color="inherit" size="medium">
          <Notifications />
        </IconButton>
      </HeaderUserContent>
    </HeaderContainer>
  )
}