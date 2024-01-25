import styles from './styles.module.css'
import { FormCadastrar } from './formCadastro'

export function Register() {
  return (
    <main className={styles.main}>
      <div className={styles.imagem_login}></div>
      <FormCadastrar/>
    </main>
  )
}
