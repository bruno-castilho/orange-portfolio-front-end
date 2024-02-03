import { Box, Chip, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import {
  Autor,
  CardImage,
  ModalFooter,
  ModalHeader,
  OnlyMobile,
  TagsContainer,
} from './styles'

export function ModalPreview({ open = false, closeModal, project }) {
  const data = new Date(project.updatedAt)
  const month = ('0' + (data.getUTCMonth() + 1)).slice(-2)
  const year = ('' + data.getUTCFullYear()).slice(-2)
  
  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ overflow: 'scroll' }}
    >
      <Box
        sx={{
          marginTop: '148px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1042px',
          height: '981px',
          bgcolor: 'background.paper',
          padding: '56px 102px',

          '@media (max-width: 768px)': {
            borderRadius: '24px 24px 0px 0px',
            padding: '32px 28px',
            width: '360px',
            height: '698px',
          },
        }}
      >
        <CloseIcon
          onClick={closeModal}
          sx={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            cursor: 'pointer',
          }}
        />
        <div>
          <ModalHeader>
            <Autor>
              <img src={project['Usuario.url_avatar']} alt="" />
              <div>
                <p>{`${project['Usuario.nome']} ${project['Usuario.sobrenome']}`}</p>
                <span>
                  {month}/{year}
                </span>
              </div>
            </Autor>
            <h5>{project.titulo}</h5>
            <TagsContainer>
            {project.tags !== '' && project.tags.split(',').map((tag) => (
                <Chip
                  key={tag.trim()}
                  label={tag.trim()}
                  color="default"
                  size="medium"
                  variant="filled"
                />
              ))}
            </TagsContainer>
          </ModalHeader>
          <CardImage img={project.arquivo} />
          <OnlyMobile>
            <Autor>
              <img src={project['Usuario.url_avatar']} alt="" />
              <div>
                <p>{`${project['Usuario.nome']} ${project['Usuario.sobrenome']}`}</p>
                <span>
                  {month}/{year}
                </span>
              </div>
            </Autor>
            <TagsContainer>
                {project.tags !== '' && project.tags.split(',').map((tag) => (
                <Chip
                  key={tag.trim()}
                  label={tag.trim()}
                  color="default"
                  size="medium"
                  variant="filled"
                />
              ))}
            </TagsContainer>
          </OnlyMobile>
          <ModalFooter>
            <p>{project.descricao}</p>
            <span>Download</span>
            <a href={project.link}>{project.link}</a>
          </ModalFooter>
        </div>
      </Box>
    </Modal>
  )
}
