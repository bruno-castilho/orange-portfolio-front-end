import React, { useState } from 'react';
import styles from './styles.module.css'
import logo from '../../../assets/Text input .svg'
import upload from '../../../assets/collections.svg'
import ButtonSalvar from './ButtonSalvar.jsx';
import ButtonCancelar from './ButtonCancelar.jsx';
import TextField from '@mui/material/TextField'
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
                    <div className={styles.modal_form}>
                        <h5 className={styles.title_form}>Editar projeto </h5>
                        <div className={styles.Input_form_container}>
                            <div className={styles.container_upload}>
                                <p className={styles.conteudo_upload}>Selecione o conteúdo que você deseja fazer upload</p>
                                <div className={styles.container_button_upload}>
                                    <div className={styles.container_img}>
                                        <button href="" className={styles.button_upload}>
                                            <img src={upload} alt="" />
                                            <p className={styles.button_text}>Compartilhe seu talento com milhares de pessoas</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Text_input_container}>
                                <TextField
                                    type="text"
                                    id="titulo"
                                    label="Título"
                                    variant="outlined"
                                    InputLabelProps={{
                                        style: { color: '#818388' },
                                    }}
                                    sx={{
                                        width: '100%',
                                        fontFamily: 'Roboto',
                                        '& .MuiOutlinedInput-root': {
                                            borderColor: '#818388',
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#818388',
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    type="text"
                                    id="tags"
                                    label="Tags"
                                    variant="outlined"
                                    InputLabelProps={{
                                        style: { color: '#818388' },
                                    }}
                                    sx={{
                                        width: '100%',
                                        fontFamily: 'Roboto',
                                        '& .MuiOutlinedInput-root': {
                                            borderColor: '#818388',
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#818388',
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    type="url"
                                    id="link"
                                    label="Link"
                                    variant="outlined"
                                    InputLabelProps={{
                                        style: { color: '#818388' },
                                    }}
                                    sx={{
                                        width: '100%',
                                        fontFamily: 'Roboto',
                                        '& .MuiOutlinedInput-root': {
                                            borderColor: '#818388',
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#818388',
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    id="descricao"
                                    label="Descrição"
                                    multiline
                                    rows={4}  
                                    variant="outlined"
                                    InputLabelProps={{
                                        style: { color: '#818388' },
                                    }}
                                    sx={{
                                        width: '100%',
                                        fontFamily: 'Roboto',
                                        borderColor: '#818388',
                                        '& .MuiOutlinedInput-root': {
                                            borderColor: '#818388',
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#818388',
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        <p className={styles.Subtitle}>Visualizar publicação</p>
                        <div className={styles.Button_container}>
                          <div  onClick={() => { sucessOpenModal(true); closeModal(false); }}><ButtonSalvar/></div> 
                          <div onClick={closeModal}><ButtonCancelar /></div>
                            
                        </div>
                    </div>
                </div>
            )}
            {sucessModalOpen && (
                <div className={styles.modal_background}>
                    <div className={styles.modal}>
                        <div className={styles.container_conteudo}>
                            <h5 className={styles.title}>Edição concluída com sucesso!</h5>
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