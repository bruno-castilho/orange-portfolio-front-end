import styles from './styles.module.css'
import Button from '@mui/material/Button'
import perfil from '../../assets/perfil.svg'
import CollectionsIcon from '@mui/icons-material/Collections'
import { TextField } from '@mui/material'
import { CardProject } from '../../components/ProjectCard'

export function MyProject() {
  return (
    <main className={styles.myprojectContainer}>
      <section className={styles.profile}>
        <div>
          <img src={perfil} alt="" className={styles.avatar} />
          <div className={styles.user}>
            <strong>Camila Soares</strong>
            <p>Brasil</p>
            <Button disabled variant="contained" color="primary" size="large">
              Adicionar Projeto
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.projects}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h1>Meus Projetos</h1>
            <TextField
              fullWidth
              label="Buscar Tags"
              variant="outlined"
              size="medium"
            />
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <CollectionsIcon />
            </div>
            <p>Adicione seu primeiro projeto</p>
            <p>Compartilhe seu talento com milhares de pessoas</p>
          </div>

          <CardProject />

          <CardProject />

          <CardProject />

          <CardProject />

          <CardProject />
        </div>
      </section>
    </main>
  )
}
