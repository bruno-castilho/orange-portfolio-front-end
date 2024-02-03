import Button from '@mui/material/Button'

import { CardProject } from '../../components/ProjectCard'
import {
  MyProjectContainer,
  MyProjectFilter,
  MyProjectList,
  MyProjectProfile,
  MyProjectProfileContent,
} from './styles'
import { NewProjectCard } from './NewProjectCard'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import api from '../../confs/api'
import { Filter } from '../../components/Filter'
import { ModalForm } from '../../components/ModalForm/indes'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { deleteFile, upload } from '../../confs/VercelBlob'

const ProjectValidationSchema = zod.object({
  titulo: zod.string().min(1, { message: 'Digite o titulo do projeto' }),
  tags: zod.string(),
  link: zod.string().min(1, { message: 'Digite o link do seu projeto' }),
  descricao: zod.string(),
  file: zod.any(),
  id: zod.number().optional(),
  urlImg: zod.string().optional(),
})

export function MyProject() {
  const { user, token } = useContext(AuthContext)
  const [projects, setProjects] = useState([])
  const [projectsFiltered, setProjectsFiltered] = useState([])
  const [open, setOpen] = useState(false)
  const [doIt, setDoIt] = useState('')

  const ProjectFormData = useForm({
    resolver: zodResolver(ProjectValidationSchema),
    defaultValues: {
      titulo: '',
      tags: '',
      link: '',
      descricao: '',
      urlImg: '',
    },
  })

  const { reset, setValue } = ProjectFormData

  useEffect(() => {
    const params = { token }
    api
      .get('/projetos/user', { params })
      .then((response) => {
        setProjects(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [token])

  function datReturnFunc(data) {
    setProjectsFiltered(data)
  }

  const openModal = () => setOpen(true)

  function closeModal() {
    reset()
    setOpen(false)
  }

  async function createProject(data) {
    let arquivo = ''
    if (data.file.length) {
      const formData = new FormData()
      formData.append('file', data.file[0])
      const resposta = await upload(formData)
      arquivo = resposta.url
    }

    const params = {
      titulo: data.titulo,
      tags: data.tags,
      link: data.link,
      descricao: data.descricao,
      arquivo,
      token,
    }

    api
      .post(`/projetos`, params)
      .then((response) => {
        setProjects((projects) => [response.data, ...projects])
        closeModal()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async function editProject(data) {
    let arquivo = data.urlImg
    if (data.file.length) {
      if (arquivo) deleteFile(arquivo)

      const formData = new FormData()
      formData.append('file', data.file[0])
      const resposta = await upload(formData)
      arquivo = resposta.url
    }

    const params = {
      titulo: data.titulo,
      tags: data.tags,
      link: data.link,
      descricao: data.descricao,
      arquivo,
      token,
    }

    api
      .put(`/projetos/${data.id}`, params)
      .then(() => {
        const projectIndex = projects.findIndex(
          (project) => project.id === data.id,
        )

        const newProject = {
          ...projects[projectIndex],
          titulo: data.titulo,
          tags: data.tags,
          link: data.link,
          descricao: data.descricao,
          arquivo,
        }

        const newProjects = [...projects]
        newProjects.splice(projectIndex, 1)

        setProjects([newProject, ...newProjects])

        closeModal()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function deleteProject(id) {
    console.log(id)
  }

  function handleCreateProject() {
    setDoIt('create')
    openModal()
  }

  function handleEditProject(project) {
    setDoIt('edit')
    setValue('id', project.id)
    setValue('titulo', project.titulo)
    setValue('tags', project.tags)
    setValue('link', project.link)
    setValue('descricao', project.descricao)
    setValue('urlImg', project.arquivo)
    openModal()
  }

  return (
    <MyProjectContainer>
      <MyProjectProfile>
        <div>
          <img src={user?.url_avatar} alt="" />
          <MyProjectProfileContent>
            <strong>{`${user?.nome} ${user?.sobrenome}`}</strong>
            <p>Brasil</p>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleCreateProject}
            >
              Adicionar Projeto
            </Button>
          </MyProjectProfileContent>
        </div>
      </MyProjectProfile>

      <section>
        <MyProjectFilter>
          <div>
            <h1>Meus Projetos</h1>
            <Filter data={projects} datReturnFunc={datReturnFunc} />
          </div>
        </MyProjectFilter>

        <MyProjectList>
          {!projects.length && (
            <NewProjectCard handleCreateProject={handleCreateProject} />
          )}

          {projectsFiltered?.map((project) => (
            <CardProject
              key={project.id}
              withMenu
              project={project}
              handleDeleteProject={deleteProject}
              handleEditProject={handleEditProject}
            />
          ))}
        </MyProjectList>
      </section>
      <FormProvider {...ProjectFormData}>
        <ModalForm
          open={open}
          closeModal={closeModal}
          createProject={createProject}
          editProject={editProject}
          doIt={doIt}
        />
      </FormProvider>
    </MyProjectContainer>
  )
}
