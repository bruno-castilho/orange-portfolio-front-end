import {
  RegisterImg,
  RegisterContainer,
  RegisterContent,
  RegisterSection,
  RegisterFormContainer,
  RegisterForm,
  InputNameContainer,
  RegisterAlertContainer,
} from './styles'
import imgRegister from '../../assets/img_cadastro.svg'
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material'
import Alert from '@mui/material/Alert'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useLocation } from 'react-router-dom'
import api from '../../confs/api'
import { useRef, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const RegisterValidationSchema = zod.object({
  nome: zod.string().min(1, { message: 'Digite seu nome' }),
  sobrenome: zod.string().min(1, { message: 'Digite seu sobrenome' }),
  email: zod.string().email({ message: 'Digite um e-mail válido' }),
  senha: zod
    .string()
    .min(6, { message: 'Sua senha deve ter no mínimo 6 dígitos.' }),
  url_avatar: zod.string(),
})

export function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const alertRef = useRef(null)
  const [alertState, setAlertState] = useState({
    msg: '',
    severity: 'success',
  })

  function handleCrateNewAccount(data) {
    api
      .post('/usuarios', data)
      .then(() => {
        setAlertState({
          msg: 'Cadastro feito com sucesso',
          severity: 'success',
        })
      })
      .catch(() => {
        setAlertState({
          msg: 'E-mail já está sendo utilizado',
          severity: 'error',
        })
      })
      .finally(() => {
        alertRef.current.style.visibility = 'visible'
      })
  }

  const RegisterFormData = useForm({
    resolver: zodResolver(RegisterValidationSchema),
    defaultValues: {
      nome: queryParams.get('nome') || '',
      sobrenome: queryParams.get('sobrenome') || '',
      email: queryParams.get('email') || '',
      senha: queryParams.get('senha') || '',
      url_avatar:
        queryParams.get('url_avatar') ||
        'https://i.pinimg.com/564x/9d/47/13/9d471323edafbd06af73d4b78ce2aaf3.jpg',
    },
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = RegisterFormData

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  return (
    <RegisterContainer>
      <RegisterContent>
        <RegisterImg src={imgRegister} />
        <RegisterSection>
          <div>
            <RegisterAlertContainer>
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
            </RegisterAlertContainer>

            <h3>Cadastre-se</h3>

            <RegisterFormContainer>
              <RegisterForm onSubmit={handleSubmit(handleCrateNewAccount)}>
                <InputNameContainer>
                  <TextField
                    type="text"
                    label="Nome*"
                    variant="outlined"
                    error={errors.nome?.message}
                    helperText={errors.nome?.message}
                    sx={{
                      width: '100%',
                      fontFamily: 'Roboto',
                    }}
                    {...register('nome')}
                  />

                  <TextField
                    type="text"
                    label="Sobrenome*"
                    variant="outlined"
                    error={errors.sobrenome?.message}
                    helperText={errors.sobrenome?.message}
                    sx={{
                      width: '100%',
                      fontFamily: 'Roboto',
                    }}
                    {...register('sobrenome')}
                  />
                </InputNameContainer>
                <TextField
                  type="email"
                  label="Email address"
                  variant="outlined"
                  error={errors.email?.message}
                  sx={{
                    width: '100%',
                    fontFamily: 'Roboto',
                  }}
                  helperText={errors.email?.message}
                  {...register('email')}
                />
                <FormControl
                  variant="outlined"
                  sx={{
                    width: '100%',
                    fontFamily: 'Roboto',
                  }}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    variant="outlined"
                    error={errors.password?.message}
                    helperText={errors.password?.message}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    {...register('senha')}
                  />
                </FormControl>
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
              </RegisterForm>
            </RegisterFormContainer>
          </div>
        </RegisterSection>
      </RegisterContent>
    </RegisterContainer>
  )
}
