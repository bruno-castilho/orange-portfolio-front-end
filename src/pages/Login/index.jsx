import logo from '../../assets/logo_googleg_48dp.svg'

import imgLogin from '../../assets/img_login.svg'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { Alert, Button, TextField } from '@mui/material'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

import * as zod from 'zod'
import {
  ButtonContainer,
  LoginAlertContainer,
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginFormContainer,
  LoginImg,
  LoginSection,
} from './styles'
import api from '../../confs/api'

const LoginValidationSchema = zod.object({
  email: zod.string().email({ message: 'Digite um e-mail válido' }),
  password: zod
    .string()
    .min(6, { message: 'Sua senha contém no mínimo 6 dígitos.' }),
})

export function Login() {
  const { loginSucess } = useContext(AuthContext)
  const alertRef = useRef(null)
  const [alertState, setAlertState] = useState({
    msg: '',
    severity: 'success',
  })

  function handleLogin(data) {
    api
      .post('/login', data)
      .then((response) => {
        loginSucess(response.data.user)
        setAlertState({
          msg: response.data.message,
          severity: 'success',
        })
      })
      .catch((error) => {
        setAlertState({
          msg: error.response.data.message,
          severity: 'error',
        })
      })
      .finally(() => {
        alertRef.current.style.visibility = 'visible'
      })
  }

  function handleGoogleLogin() {
    api
      .get(`/google/url`, {})
      .then((response) => {
        window.location.assign(response.data.url)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const LoginFormData = useForm({
    resolver: zodResolver(LoginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = LoginFormData

  return (
    <LoginContainer>
      <LoginContent>
        <LoginImg src={imgLogin} />
        <LoginSection>
          <div>
            <LoginAlertContainer>
              <Alert
                variant="filled"
                severity={alertState.severity}
                sx={{
                  visibility: 'hidden',
                  width: '320px',
                }}
                ref={alertRef}
              >
                {alertState.msg}
              </Alert>
            </LoginAlertContainer>
            <h3>Entre no Orange Portfólio</h3>
            <ButtonContainer>
              <button type="button" onClick={handleGoogleLogin}>
                <img src={logo} alt="" />
                <p>Entrar com Google</p>
              </button>
            </ButtonContainer>

            <LoginFormContainer>
              <LoginForm onSubmit={handleSubmit(handleLogin)}>
                <h5>Faça login com email</h5>

                <TextField
                  type="email"
                  label="Email address"
                  variant="outlined"
                  error={errors.email?.message}
                  helperText={errors.email?.message}
                  sx={{
                    width: '100%',
                    fontFamily: 'Roboto',
                  }}
                  {...register('email')}
                />
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  sx={{
                    width: '100%',
                    fontFamily: 'Roboto',
                  }}
                  error={errors.password?.message}
                  helperText={errors.password?.message}
                  {...register('password')}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  sx={{
                    width: '100%',
                    background: 'var(--color-secondary-100)',
                    '&:hover': {
                      background: 'var(--color-secondary-110)',
                    },
                  }}
                >
                  Entrar
                </Button>

                <Link to={'/registrar'}>Cadastre-se</Link>
              </LoginForm>
            </LoginFormContainer>
          </div>
        </LoginSection>
      </LoginContent>
    </LoginContainer>
  )
}
