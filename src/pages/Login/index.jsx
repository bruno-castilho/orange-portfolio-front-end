import logo from '../../assets/logo_googleg_48dp.svg'

import imgLogin from '../../assets/img_login.svg'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

import * as zod from 'zod'
import {
  ButtonContainer,
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginFormContainer,
  LoginImg,
  LoginSection,
} from './styles'

const LoginValidationSchema = zod.object({
  email: zod.string().email({ message: 'Digite um e-mail válido' }),
  password: zod.string().min(1, { message: 'Informe sua senha' }),
})

export function Login() {
  const { handleGoogleLogin, handleLogin } = useContext(AuthContext)

  const LoginFormData = useForm({
    resolver: zodResolver(LoginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { handleSubmit, register } = LoginFormData

  return (
    <LoginContainer>
      <LoginContent>
        <LoginImg src={imgLogin} />
        <LoginSection>
          <div>
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
                  InputLabelProps={{
                    style: { color: '#000000' },
                  }}
                  sx={{
                    width: '100%',
                    fontFamily: 'Roboto',
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
                  type="password"
                  label="Password"
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: '#000000' },
                  }}
                  sx={{
                    width: '100%',
                    fontFamily: 'Roboto',
                    '& .MuiOutlinedInput-root': {
                      borderColor: '#000000',
                      '&.Mui-focused fieldset': {
                        borderColor: '#000000',
                      },
                    },
                  }}
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
