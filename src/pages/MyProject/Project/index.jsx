import styles from './styles.module.css'
import Chip from '@mui/material/Chip'

import img from '../../../assets/image.png'
import perfil from '../../../assets/perfil.svg'

export function Project() {
  return (
    <div className={styles.projectContainer}>
      <div
        className={styles.projectCard}
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>

      <div className={styles.projectInfo}>
        <div className={styles.projectInfoFirst}>
          <img src={perfil} alt="" />
          <div>
            <p>Camila Soares</p>
            <span>12/23</span>
          </div>
        </div>

        <div className={styles.projectInfoLast}>
          <Chip label="UX" color="default" size="medium" variant="filled" />
          <Chip label="Web" color="default" size="medium" variant="filled" />
        </div>
      </div>
    </div>
  )
}
