import Button from '@mui/material/Button'
import perfil from '../../assets/perfil.svg'
import { TextField } from '@mui/material'
import { CardProject } from '../../components/ProjectCard'
import {
  MyProjectContainer,
  MyProjectFilter,
  MyProjectList,
  MyProjectProfile,
  MyProjectProfileContent,
} from './styles'
import { NewProjectCard } from './NewProjectCard'

export function MyProject() {
  return (
    <MyProjectContainer>
      <MyProjectProfile>
        <div>
          <img src={perfil} alt="" />
          <MyProjectProfileContent>
            <strong>Camila Soares</strong>
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
            <TextField
              fullWidth
              label="Buscar Tags"
              variant="outlined"
              size="medium"
            />
          </div>
        </MyProjectFilter>

        <MyProjectList>
          <NewProjectCard />

          <CardProject withMenu />

          <CardProject withMenu />

          <CardProject withMenu />

          <CardProject withMenu />

          <CardProject withMenu />
        </MyProjectList>
      </section>
    </MyProjectContainer>
  )
}
