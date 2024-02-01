import styles from './styles.module.css';
import Chip from '@mui/material/Chip'
import perfil from '../../../assets/Vertical container.svg'
export function Preview() {
  return (
    <main className={styles.layout_page}>
      <div className={styles.title_container}>
        <h5 className={styles.title}> Ecommerce One Page</h5>
      </div>
      <div className={styles.container_imagem}>
        <div className={styles.imagem}></div>
        <div className={styles.container_perfil}>
          <div className={styles.logo_perfil}>
            <img className={styles.perfil} src={perfil} />
            <div className={styles.perfil_descricao}>
              <p>Bianca Martin •</p>
              <span>02/24</span>
            </div>
          </div>
          <div className={styles.chip_container}>
            <Chip label="UX" color="default" size="medium" variant="filled" />
            <Chip label="Web" color="default" size="medium" variant="filled" />
          </div>
        </div>
      </div>
      <div className={styles.container_descricao}>
        <p className={styles.descricao}>Temos o prazer de compartilhar com vocês uma variação da nosso primeiro recurso gratuito, Monoceros.
          É um modelo de uma página para mostrar seus produtos.
          Tentamos redesenhar uma versão mais B2C e minimalista do nosso primeiro template de e-commerce.</p>
        <p className={styles.download}>Download</p>
        <a className={styles.link} href="">https://gumroad.com/products/wxCSL</a>
      </div>
    </main>
  );
}