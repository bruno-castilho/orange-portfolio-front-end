import { CardProject } from '../../components/ProjectCard'
import { Footer, ProjectContainer } from './styles'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import api from '../../confs/api'
import { AuthContext } from '../../contexts/AuthContext'

export function Project() {
  const { token } = useContext(AuthContext)
  const { id } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const params = { token }
    api
      .get(`/projetos/${id}`, { params })
      .then((response) => {
        setProject(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      {project && (
        <ProjectContainer>
          <h5>{project.titulo}</h5>
          <CardProject project={project} />
          <Footer>
            <p>{project.descricao}</p>
            <span>Download</span>
            <a href={project.link}>{project.link}</a>
          </Footer>
        </ProjectContainer>
      )}
    </>
  )
}
