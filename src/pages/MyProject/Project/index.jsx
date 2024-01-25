import styles from './styles.module.css'
import Chip from '@mui/material/Chip'

import img from '../../../assets/image.png'
import perfil from '../../../assets/perfil.svg'
import { IconButton, Menu, MenuItem, MenuList, Paper } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import React from 'react'

export function Project() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={styles.projectContainer}>
      <div
        className={styles.projectCard}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className={styles.editButton}>
          <IconButton color="inherit" size="medium" onClick={handleClick}>
            <EditIcon />
          </IconButton>
        </div>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          MenuListProps={{
            sx: {
              width: '208px',
              height: '104px',
              borderRadius: '8px',
              background: 'var(--Neutral-Colors-Neutral-60, #FCFDFF)',
              boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.30)',
              padding: '16px 0px',
              color:
                'var(--Neutral-Colors-Neutral-110, var(--Neutral-Colors-Neutral-110, #515255))',
            },
          }}
        >
          <MenuItem
            onClick={handleClose}
            sx={{
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '16px',
              letterSpacing: '0.15px',
              marginBottom: '8px',
              ':hover': {
                background: 'var(--Color-Brand-Secundria-Secondary-60, #FEC)',
              },
            }}
          >
            Editar
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '16px',
              letterSpacing: '0.15px',
              ':hover': {
                background: 'var(--Color-Brand-Secundria-Secondary-60, #FEC)',
              },
            }}
            divider={false}
          >
            Excluir
          </MenuItem>
        </Menu>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.projectInfoFirst}>
          <img src={perfil} alt="" />
          <div>
            <p>Camila Soares</p>
            <span>12/23</span>
          </div>
        </div>

        <div className={styles.projectInfoLast}>
          <Chip label="UX" color="default" size="medium" variant="filled" />
          <Chip label="Web" color="default" size="medium" variant="filled" />
        </div>
      </div>
    </div>
  )
}
