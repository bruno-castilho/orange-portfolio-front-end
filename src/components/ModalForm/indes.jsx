import CollectionsIcon from '@mui/icons-material/Collections'
import {
  Footer,
  InputsSection,
  UploadButton,
  UploadSection,
  ModalFormConteiner,
} from './styles'
import { Box, Button, Modal, TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export function ModalForm({
  open = false,
  closeModal,
  createProject,
  editProject,
  doIt,
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useFormContext()

  async function handleSubmitForm(data) {
    if (doIt === 'create') {
      await createProject(data)
    } else if (doIt === 'edit') {
      editProject(data)
    }
  }
  const modalTitle = doIt === 'edit' ? 'Editar projeto ' : 'Adicionar Projeto'

  const file = watch('file')
  const urlImg = watch('urlImg')
  const img = file && file.length !== 0 ? URL.createObjectURL(file[0]) : urlImg

  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableScrollLock={false}
      sx={{
        overflow: 'scroll',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '890px',
          height: '522px',
          bgcolor: 'background.paper',
          boxShadow: 24,
          padding: '16px 23px 40px 23px',
          '@media (max-width: 768px)': {
            marginTop: '148px',
            width: '312px',
            height: '859px',
          },
        }}
      >
        <ModalFormConteiner onSubmit={handleSubmit(handleSubmitForm)}>
          <h5>{modalTitle}</h5>
          <div>
            <UploadSection>
              <p>Selecione o conteúdo que você deseja fazer upload</p>
              <UploadButton img={img}>
                <div
                  style={{
                    display: img ? 'none' : 'block',
                  }}
                >
                  <div>
                    <CollectionsIcon />
                  </div>
                  <p>Compartilhe seu talento com milhares de pessoas</p>
                </div>
                <input
                  type="file"
                  accept=".jpeg, .jpg, .png"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer',
                  }}
                  {...register('file')}
                ></input>
              </UploadButton>
            </UploadSection>
            <InputsSection>
              <TextField
                fullWidth
                label="Título"
                variant="outlined"
                size="medium"
                error={errors.titulo?.message}
                {...register('titulo')}
              />
              <TextField
                fullWidth
                label="Tags"
                variant="outlined"
                size="medium"
                {...register('tags')}
              />
              <TextField
                fullWidth
                label="Link"
                variant="outlined"
                size="medium"
                error={errors.link?.message}
                {...register('link')}
              />
              <TextField
                fullWidth
                label="Descrição"
                multiline
                rows={4}
                variant="outlined"
                size="medium"
                sx={{
                  '& > div': {
                    height: '120px',
                    '@media (max-width: 768px)': {
                      height: '88px',
                    },
                  },
                }}
                {...register('descricao')}
              />
            </InputsSection>
          </div>
          <Footer>
            <p>Visualizar publicação</p>
            <div>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                sx={{
                  marginRight: '16px',
                  background: 'var(--color-secondary-100)',
                  '&:hover': {
                    background: 'var(--color-secondary-110)',
                  },
                }}
              >
                SALVAR
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                onClick={closeModal}
              >
                CANCELAR
              </Button>
            </div>
          </Footer>
        </ModalFormConteiner>
      </Box>
    </Modal>
  )
}
