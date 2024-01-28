import React, { useState } from 'react';
import styles from './styles.module.css'
import logo from '../../../assets/Text input .svg'
import Voltar from './retornaPagina.jsx'

export function ModalComponent() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div className={styles.teste}><p className={styles.teste} onClick={openModal} >🚧Construction🚧</p></div>

            {isModalOpen && (
                <div className={styles.modal_background}>
                    <div className={styles.modal}>
                        <div className={styles.container_conteudo}>
                            <h5 className={styles.title}>Projeto adicionado com sucesso!</h5>
                            <div className={styles.imagem}>
                                <img src={logo} alt="" />
                            </div>
                            <div onClick={sucessCloseModal} className={styles.button}><Voltar /></div>
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
