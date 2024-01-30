import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const StyledRetornaPagina = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#F52'),
  backgroundColor: '#F52',
  '&:hover': {
    backgroundColor: '#CC4400',
  },
  width: '100%', 
}));

export default function RetornaPagina() {
  return (
    <Stack spacing={2} direction="row" component="form">
      <StyledRetornaPagina variant="contained">
        Voltar para o Projetos
      </StyledRetornaPagina>
    </Stack>
  );
}
