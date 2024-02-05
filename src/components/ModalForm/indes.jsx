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
import { useContext, useEffect, useState } from 'react'
import { ModalPreview } from '../ModalPreview'
import { AuthContext } from '../../contexts/AuthContext'
import { InputTags } from '../InputTags'

export function ModalForm({
  open = false,
  openModal,
  closeModal,
  createProject,
  editProject,
  doIt,
}) {
  const { user } = useContext(AuthContext)
  const [img, setImg] = useState('')
  const [tags, setTags] = useState([])

  const newTagDetected = (tag) => {
    setTags([...tags, tag])
  }

  const deleteTag = (index) => {
    const newTags = [...tags]
    newTags.splice(index, 1)
    setTags(newTags)
  }

  const [project, setProject] = useState({
    titulo: '',
    tags: '',
    link: '',
    descricao: '',
    arquivo: '',
    updatedAt: new Date(),
    'Usuario.url_avatar': '',
    'Usuario.nome': '',
    'Usuario.sobrenome': '',
  })

  const [isOpenModalPreview, setIsOpenModalPreview] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
    getValues,
  } = useFormContext()

  async function handleSubmitForm(data) {
    data.tags = tags.join()
    if (doIt === 'create') {
      await createProject(data)
      setTags([])
    } else if (doIt === 'edit') {
      await editProject(data)
      setTags([])
    }
  }

  const t = watch('tags')

  useEffect(() => {
    setTags(t ? t.split(',') : [])
  }, [t])

  const modalTitle = doIt === 'edit' ? 'Editar Projeto ' : 'Adicionar Projeto'

  const file = watch('file')
  const urlImg = watch('urlImg')

  function openModalPreview() {
    if (isValid) {
      setProject((project) => ({
        ...project,
        titulo: getValues('titulo'),
        tags: tags.join(),
        link: getValues('link'),
        descricao: getValues('descricao'),
        arquivo: img,
        'Usuario.url_avatar': user.url_avatar,
        'Usuario.nome': user.nome,
        'Usuario.sobrenome': user.sobrenome,
      }))
      closeModal()
      setIsOpenModalPreview(true)
    }
  }

  function closeModalPreview() {
    setIsOpenModalPreview(false)
    openModal()
  }

  useEffect(() => {
    setImg(file && file.length !== 0 ? URL.createObjectURL(file[0]) : urlImg)
  }, [file, urlImg])

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          closeModal()
          setTags([])
        }}
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
                <InputTags
                  tags={tags}
                  newTagDetected={newTagDetected}
                  deleteTag={deleteTag}
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
              <p
                onClick={openModalPreview}
                style={{ cursor: isValid ? 'pointer' : 'not-allowed' }}
              >
                Visualizar publicação
              </p>
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
                  onClick={() => {
                    closeModal()
                    setTags([])
                  }}
                >
                  CANCELAR
                </Button>
              </div>
            </Footer>
          </ModalFormConteiner>
        </Box>
      </Modal>
      <ModalPreview
        open={isOpenModalPreview}
        closeModal={closeModalPreview}
        project={project}
      />
    </>
  )
}
