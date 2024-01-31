import { ModalComponent } from '../../components/Modals/cardView/view'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import api from '../../confs/api'
import { Filter } from '../../components/Filter'
import {
  ProjectList,
  ProjectFilter,
  DiscoverContainer,
  DiscoverHeader,
} from './styles'
import { CardProject } from '../../components/ProjectCard'

export function Discover() {
  const { token } = useContext(AuthContext)
  const [projects, setProjects] = useState([])
  const [projectsFiltered, setProjectsFiltered] = useState([])

  useEffect(() => {
    const params = { token }
    api
      .get('/projetos', { params })
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

  return (
    <DiscoverContainer>
      <DiscoverHeader>
        <h5>
          Junte-se à comunidade de inovação, inspiração e descobertas,
          transformando experiências em conexões inesquecíveis
        </h5>
      </DiscoverHeader>

      <section>
        <ProjectFilter>
          <div>
            <Filter data={projects} datReturnFunc={datReturnFunc} />
          </div>
        </ProjectFilter>

        <ProjectList>
          {projectsFiltered?.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </ProjectList>
      </section>
      <ModalComponent />
    </DiscoverContainer>
  )
}
