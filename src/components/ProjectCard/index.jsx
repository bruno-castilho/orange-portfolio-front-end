import Chip from '@mui/material/Chip'

import { IconButton, Menu, MenuItem } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import React from 'react'
import {
  MenuButtonContainer,
  ProjectCardImg,
  ProjectCardInfo,
  ProjectCardInfoPublication,
  ProjectCardInfoTags,
} from './styles'

export function CardProject({
  withMenu = false,
  project,
  handleDeleteProject,
  handleEditProject,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const data = new Date(project.updatedAt)
  const month = ('0' + (data.getUTCMonth() + 1)).slice(-2)
  const year = ('' + data.getUTCFullYear()).slice(-2)

  return (
    <div>
      <ProjectCardImg img={project.arquivo}>
        {withMenu && (
          <>
            <MenuButtonContainer>
              <IconButton color="inherit" size="medium" onClick={handleClick}>
                <EditIcon />
              </IconButton>
            </MenuButtonContainer>

            <Menu
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
                  minHeight: '104px',
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
                onClick={() => {
                  handleEditProject(project)
                  handleClose()
                }}
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '16px',
                  letterSpacing: '0.15px',
                  marginBottom: '8px',
                  ':hover': {
                    background:
                      'var(--Color-Brand-Secundria-Secondary-60, #FEC)',
                  },
                }}
              >
                Editar
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleDeleteProject()
                  handleClose()
                }}
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '16px',
                  letterSpacing: '0.15px',
                  ':hover': {
                    background:
                      'var(--Color-Brand-Secundria-Secondary-60, #FEC)',
                  },
                }}
              >
                Excluir
              </MenuItem>
            </Menu>
          </>
        )}
      </ProjectCardImg>

      <ProjectCardInfo>
        <ProjectCardInfoPublication>
          <img src={project['Usuario.url_avatar']} alt="" />
          <div>
            <p>{`${project['Usuario.nome']} ${project['Usuario.sobrenome']}`}</p>
            <span>
              {month}/{year}
            </span>
          </div>
        </ProjectCardInfoPublication>

        <ProjectCardInfoTags>
          {project.tags.split(',').map((tag) => (
            <Chip
              key={tag.trim()}
              label={tag.trim()}
              color="default"
              size="medium"
              variant="filled"
            />
          ))}
        </ProjectCardInfoTags>
      </ProjectCardInfo>
    </div>
  )
}
