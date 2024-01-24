import styles from './styles.module.css'
import logo from '../../assets/logo googleg 48dp.svg'
import frame from '../../assets/Frame.svg'
import TextField from '@mui/material/TextField';
import CustomizedButtons from './CustomizedButtons'; 


export function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.imagem_login}></div>
      <div className={styles.layout_form}>
        <h3>Entre no Orange Portfólio</h3>
        <a className={styles.btn_google} href="">
          <img src={logo} alt="" />
          <p>Entrar com Google</p>
        </a>
        <div className={styles.form_contaniner}>
          <div className={styles.box_login}>
            <h5>Faça login com email</h5>
            <img src={frame} alt="" />
          </div>
          <form action="" method="post">
            <div className={styles.email_password}>
              <TextField  className={styles.input}
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
              variant="outlined"  InputLabelProps={{
                style: { color: '#000000' }, 
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: '#000000',
                  "&.Mui-focused fieldset": {
                    borderColor: '#000000',
                  },
                },
              }}/>
            </div>
            <CustomizedButtons type="submit" className={styles.button}/>
          </form>
          
          <div className={styles.teste}>
          <a href="">Cadastre-se</a>
          </div>
        </div>
      </div>
    </main>
  )
}
