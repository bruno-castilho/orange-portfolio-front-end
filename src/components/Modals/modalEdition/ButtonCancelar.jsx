import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const StyledButtonCancelar = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00000061'),
  backgroundColor: '#00000061',
  '&:hover': {
    backgroundColor: '#00000061',
  },
  width: '100%', 
}));

export default function ButtonCancelar() {
  return (
    <Stack spacing={2} direction="row" component="form">
      <StyledButtonCancelar variant="contained" disabled>
        CANCELAR
      </StyledButtonCancelar>
    </Stack>
  );
}
