import { Box, Button, Modal } from '@mui/material'
import { ModalDeleteContainer } from './styles'

export function ModalDelete({
  open,
  handleClose,
  handleDelete,
  projectToDelete,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '421px',
          height: '242px',
          bgcolor: 'background.paper',
          padding: '40px 42px',
          '@media (max-width: 768px)': {
            padding: '24px',
            width: '312px',
            height: '194px',
          },
        }}
      >
        <ModalDeleteContainer>
          <h5>Deseja Excluir?</h5>
          <p>Se você prosseguir irá excluir o projeto do seu portfólio</p>
          <div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              onClick={() => handleDelete(projectToDelete)}
              sx={{
                marginRight: '16px',
                background: 'var(--color-secondary-100)',
                '&:hover': {
                  background: 'var(--color-secondary-110)',
                },
              }}
            >
              EXCLUIR
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              onClick={handleClose}
            >
              CANCELAR
            </Button>
          </div>
        </ModalDeleteContainer>
      </Box>
    </Modal>
  )
}
