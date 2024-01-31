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

export function MyProject() {
  const { user, token } = useContext(AuthContext)
  const [projects, setProjects] = useState([])
  const [projectsFiltered, setProjectsFiltered] = useState([])

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

  function teste(data) {
    setProjectsFiltered(data)
  }

  return (
    <MyProjectContainer>
      <MyProjectProfile>
        <div>
          <img src={user?.url_avatar} alt="" />
          <MyProjectProfileContent>
            <strong>{`${user?.nome} ${user?.sobrenome}`}</strong>
            <p>Brasil</p>
            <Button disabled variant="contained" color="primary" size="large">
              Adicionar Projeto
            </Button>
          </MyProjectProfileContent>
        </div>
      </MyProjectProfile>

      <section>
        <MyProjectFilter>
          <div>
            <h1>Meus Projetos</h1>
            <Filter data={projects} datReturnFunc={teste} />
          </div>
        </MyProjectFilter>

        <MyProjectList>
          {!projects && <NewProjectCard />}

          {projectsFiltered?.map((project) => (
            <CardProject key={project.id} withMenu project={project} />
          ))}
        </MyProjectList>
      </section>
    </MyProjectContainer>
  )
}
