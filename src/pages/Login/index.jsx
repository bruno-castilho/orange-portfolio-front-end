import styles from './styles.module.css'
import logo from '../../assets/logo_googleg_48dp.svg'
import frame from '../../assets/Frame.svg'

import CustomizedButtons from './CustomizedButtons'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

import * as zod from 'zod'

const LoginValidationSchema = zod.object({
  email: zod.string().email({ message: 'Digite um e-mail válido' }),
  password: zod.string().min(1, { message: 'Informe sua senha' }),
})

export function Login() {
  const { handleGoogleLogin, handleLogin } = useContext(AuthContext)

  const LoginForm = useForm({
    resolver: zodResolver(LoginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { handleSubmit, register } = LoginForm

  return (
    <main className={styles.main}>
      <div className={styles.imagem_login}></div>
      <div className={styles.layout_form}>
        <h3 className={styles.title}>Entre no Orange Portfólio</h3>
        <button
          type="button"
          className={styles.btn_google}
          onClick={handleGoogleLogin}
        >
          <img src={logo} alt="" />
          <p>Entrar com Google</p>
        </button>
        <div className={styles.form_contaniner}>
          <div className={styles.box_login}>
            <h5 className={styles.subtitle}>Faça login com email</h5>
            <img src={frame} alt="" />
          </div>
          <form action="" onSubmit={handleSubmit(handleLogin)}>
            <div className={styles.email_password}>
              <TextField
                className={styles.input}
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                InputLabelProps={{
                  style: { color: '#000000' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderColor: '#000000',
                    '&.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                }}
                {...register('email')}
              />
              <TextField
                className={styles.input}
                type="password"
                id="password"
                label="password"
                variant="outlined"
                InputLabelProps={{
                  style: { color: '#000000' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderColor: '#000000',
                    '&.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                }}
                {...register('password')}
              />
            </div>
            <CustomizedButtons type="submit" className={styles.button} />
          </form>

          <div className={styles.registro}>
            <Link to={'/registrar'}>Cadastre-se</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
