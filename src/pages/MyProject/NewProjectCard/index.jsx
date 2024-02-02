import CollectionsIcon from '@mui/icons-material/Collections'
import { NewProjectCardContainer } from './styles'

export function NewProjectCard({ handleCreateProject }) {
  return (
    <NewProjectCardContainer onClick={handleCreateProject}>
      <div>
        <CollectionsIcon />
      </div>
      <p>Adicione seu primeiro projeto</p>
      <p>Compartilhe seu talento com milhares de pessoas</p>
    </NewProjectCardContainer>
  )
}
