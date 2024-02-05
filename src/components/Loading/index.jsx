import Modal from '@mui/material/Modal'
import CircularProgress from '@mui/material/CircularProgress'

export function Loading({ active = false }) {
  return (
    <>
      <Modal
        open={active}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <CircularProgress
            disableShrink
            size={200}
            sx={{
              width: '100px',
              height: '100px',
              color: 'var(--color-principal-100)',
            }}
          />
        </div>
      </Modal>
    </>
  )
}
