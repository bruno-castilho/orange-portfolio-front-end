import IconButton from '@mui/material/IconButton'

import styles from './styles.module.css'
import logo from '../../assets/logo.svg'
import perfil from '../../assets/perfil.svg'
import { Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <img src={logo} alt="" />
          <div>
            <div>
              <Link to="/meusprojetos">Meus projetos</Link>
              <Link to="/descobrir">Descobrir</Link>
            </div>
          </div>
        </div>
        <div className={styles.userContent}>
          <img src={perfil} alt="" />
          <IconButton color="inherit" size="medium">
            <Notifications />
          </IconButton>
        </div>
      </div>
    </header>
  )
}
