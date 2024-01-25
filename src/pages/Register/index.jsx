import styles from './styles.module.css'
import TextField from '@mui/material/TextField';
import CustomizedButtons from './CustomizedButtons';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export function Register() {
  return (
    <main className={styles.main}>
      <div className={styles.imagem_login}></div>
      <div className={styles.layout_form}>
        <Stack sx={{ width: '50%', marginTop: '24px', fontSize: '16px', '@media (max-width: 600px)': { fontSize: '16px',width: '70%' } }} spacing={2}>
          <Alert variant="filled" severity="success" className={styles.Alert}>
            Cadastro feito com sucesso
          </Alert>
        </Stack>
        <h3>Cadastre-se</h3>
        <div className={styles.form_contaniner}>
          <form action="" method="post">
            <div className={styles.form_input_row}>
              <TextField className={styles.input_row}
                type="text"
                id="nome"
                label="Nome*"
                variant="outlined"
                InputLabelProps={{
                  style: { color: '#000000' },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: '#000000',
                    "&.Mui-focused fieldset": {
                      borderColor: '#000000',
                    },
                  },
                }}
              />
              <TextField className={styles.input_row}
                type="text"
                id="sobrenome"
                label="Sobrenome*"
                variant="outlined" InputLabelProps={{
                  style: { color: '#000000' },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: '#000000',
                    "&.Mui-focused fieldset": {
                      borderColor: '#000000',
                    },
                  },
                }} />
            </div>
            <div className={styles.email_password}>
              <TextField className={styles.input}
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                InputLabelProps={{
                  style: { color: '#000000' },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: '#000000',
                    "&.Mui-focused fieldset": {
                      borderColor: '#000000',
                    },
                  },
                }}
              />
              <TextField className={styles.input}
                type="password"
                id="password"
                label="password"
                variant="outlined" InputLabelProps={{
                  style: { color: '#000000' },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: '#000000',
                    "&.Mui-focused fieldset": {
                      borderColor: '#000000',
                    },
                  },
                }} />
            </div>
            <CustomizedButtons type="submit" className={styles.button} />
          </form>
        </div>
      </div>
    </main>
  )
}
