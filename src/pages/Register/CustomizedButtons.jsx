import React from 'react'

import { Button, Stack, styled } from '@mui/material'

const CustomizedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#F52'),
  backgroundColor: '#F52',
  '&:hover': {
    backgroundColor: '#F52',
  },
  width: '100%',
}))

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <CustomizedButton type="submit" value="Cadastrar" variant="contained">
        ENTRAR
      </CustomizedButton>
    </Stack>
  )
}
