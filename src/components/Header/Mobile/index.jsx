import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import logo from '../../../assets/logo.svg'
import { Notifications } from '@mui/icons-material'
import Paper from '@mui/material/Paper'
import {
  Divider,
  Grow,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import Popper from '@mui/material/Popper'
import { HeaderContainer, HeaderLogo, HeaderUserContent } from './styles'
import { AuthContext } from '../../../contexts/AuthContext'

export function Mobile() {
  const { user, handleLogout } = React.useContext(AuthContext)
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <HeaderContainer>
      <Box>
        <AppBar
          position="static"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flexStart',
            background: 'var(--color-principal-100)',
            borderRadius: '4px',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              padding: '0px var(--3, 24px)',
              alignItems: 'center',
              alignSelf: 'stretch',
              borderRadius: '4px',
              height: '64px',
            }}
          >
            <IconButton
              color="inherit"
              size="medium"
              ref={anchorRef}
              onClick={handleToggle}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <HeaderLogo src={logo} alt="" />
            </Typography>

            <HeaderUserContent>
              <img src={user?.url_avatar} alt="" />
              <IconButton color="inherit" size="medium">
                <Notifications />
              </IconButton>
            </HeaderUserContent>
          </Toolbar>
        </AppBar>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          sx={{ zIndex: '2000' }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper
                variant="elevation"
                elevation={10}
                square={false}
                sx={{ width: '220px', marginTop: '11px' }}
              >
                <List>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'var(--text-primary), rgba(0, 0, 0, 0.87)',
                          }}
                        >
                          Camila
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(0, 0, 0, 0.60)',
                            fontFeatureSettings: 'clig off, liga off',
                          }}
                        >
                          Camila.ux@gmail.com
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
                <Divider />
                <MenuList>
                  <MenuItem
                    component={Link}
                    to="/meusprojetos"
                    onClick={handleClose}
                  >
                    Meus Projetos
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/descobrir"
                    onClick={handleClose}
                  >
                    Descobrir
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <LogoutIcon fontSize="medium" />
                    </ListItemIcon>
                    <Typography variant="inherit">Sair</Typography>
                  </MenuItem>
                </MenuList>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </HeaderContainer>
  )
}
