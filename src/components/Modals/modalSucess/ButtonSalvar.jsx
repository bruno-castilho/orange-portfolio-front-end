import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const StyledButtonSalvar = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#F52'),
  backgroundColor: '#FF5522',
  '&:hover': {
    backgroundColor: '#CC4400',
  },
  width: '100%', 
}));

export default function ButtonSalvar() {
  return (
    <Stack spacing={2} direction="row" component="form">
      <StyledButtonSalvar  variant="contained">
        SALVAR
      </StyledButtonSalvar>
    </Stack>
  );
}
