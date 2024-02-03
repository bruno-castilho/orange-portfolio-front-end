import { Box, Button, Modal } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { ModalSucessContainer } from './styles'

export function ModalSuccess({ message, open, handleClose }) {
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
          width: '351px',
          height: '242px',
          bgcolor: 'background.paper',
          padding: '32px 48px',
          '@media (max-width: 768px)': {
            padding: '32px 28px',
            width: '312px',
            height: '242px',
          },
        }}
      >
        <ModalSucessContainer>
          <h5>{message}</h5>
          <div>
            <CheckCircleIcon
              color="success"
              sx={{ width: '40px', height: '40px', marginBottom: '24px' }}
            />
          </div>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            sx={{
              width: '100%',
              background: 'var(--color-secondary-100)',
              '&:hover': {
                background: 'var(--color-secondary-110)',
              },
            }}
          >
            VOLTAR PARA PROJETOS
          </Button>
        </ModalSucessContainer>
      </Box>
    </Modal>
  )
}
