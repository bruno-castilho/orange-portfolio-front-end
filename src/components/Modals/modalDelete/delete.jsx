import React, { useState } from 'react';
import styles from './styles.module.css'
import logo from '../../../assets/Text input .svg'
import ButtonExcluir from './ButtonExcluir.jsx';
import ButtonCancelar from './ButtonCancelar.jsx';
import Voltar from './retornaPagina.jsx'

export function ModalComponent() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [sucessModalOpen, setSucessModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const sucessOpenModal = () => {
        setSucessModalOpen(true)
    };

    const sucessCloseModal = () => {
        setSucessModalOpen(false)
    };

    return (
        <div>
            <div className={styles.teste}><p className={styles.teste} onClick={openModal} >🚧Construction🚧</p></div>

            {isModalOpen && (
                <div className={styles.modal_background}>
                    <div className={styles.modal_option}>
                        <div className={styles.container_conteudo_modal}>
                            <h5 className={styles.title_delete}>Deseja Excluir?</h5>
                            <p className={styles.paragraph}>Se você prosseguir irá excluir o projeto do seu portfólio</p>
                            <div className={styles.container_button}>
                                <div onClick={() => { sucessOpenModal(true); closeModal(false); }}><ButtonExcluir /></div>
                                <div onClick={closeModal}><ButtonCancelar /></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {sucessModalOpen && (
                <div className={styles.modal_background}>
                    <div className={styles.modal}>
                        <div className={styles.container_conteudo}>
                            <h5 className={styles.title}>Projeto deletado com sucesso!</h5>
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