import React, { useState } from 'react'
import styles from './styles.module.css'
import perfil from '../../../assets/Vertical container.svg'
import Chip from '@mui/material/Chip'

export function ModalComponent() {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div>
      <div className={styles.teste}>
        <p className={styles.teste} onClick={openModal}>
          🚧Construction🚧
        </p>
      </div>

      {isModalOpen && (
        <div className={styles.modal_background}>
          <div className={styles.modal}>
            <div className={styles.container_close}>
              <div className={styles.close} onClick={closeModal}></div>
            </div>
            <div className={styles.container_title}>
              <div className={styles.container_perfil}>
                <img className={styles.perfil} src={perfil} />
                <div className={styles.perfil_descricao}>
                  <p>Bianca Martin </p>
                  <span>12/23</span>
                </div>
              </div>
              <h5 className={styles.subtitle}> Ecommerce One Page</h5>
              <div className={styles.chip_container}>
                <Chip
                  label="UX"
                  color="default"
                  size="medium"
                  variant="filled"
                />
                <Chip
                  label="Web"
                  color="default"
                  size="medium"
                  variant="filled"
                />
              </div>
            </div>
            <div className={styles.container_imagem}></div>
            <div className={styles.descricao_portifolio}>
              <p className={styles.descricao}>
                Temos o prazer de compartilhar com vocês uma variação do nosso
                primeiro recurso gratuito. É um modelo de IA. Tentamos
                redesenhar uma versão mais minimalista do nosso primeiro
                projeto.
              </p>
              <p className={styles.download}>Download</p>
              <a className={styles.link} href="">
                https://gumroad.com/products/wxCSL
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
