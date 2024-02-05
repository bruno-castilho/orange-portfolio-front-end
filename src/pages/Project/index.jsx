import { CardProject } from '../../components/ProjectCard'
import { Footer, ProjectContainer } from './styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../confs/api'

export function Project() {
  const { id } = useParams()
  const [project, setProject] = useState({
    titulo: '',
    descricao: '',
    arquivo: '',
    tags: '',
    link: '',
    'Usuario.url_avatar': 'img',
    'Usuario.nome': '',
    'Usuario.sobrenome': '',
    updatedAt: '',
  })

  useEffect(() => {
    api
      .get(`/projetos/${id}`, {})
      .then((response) => {
        setProject(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <ProjectContainer>
      <h5>{project.titulo}</h5>
      <CardProject project={project} />
      <Footer>
        <p>{project.descricao}</p>
        <span>Download</span>
        <a href={project.link}>{project.link}</a>
      </Footer>
    </ProjectContainer>
  )
}
