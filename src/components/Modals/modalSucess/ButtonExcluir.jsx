import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const StyledButtonExcluir = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#F52'),
  backgroundColor: '#FF5522',
  '&:hover': {
    backgroundColor: '#CC4400',
  },
  width: '100%', 
}));

export default function ButtonExcluir() {
  return (
    <Stack spacing={2} direction="row" component="form">
      <StyledButtonExcluir variant="contained">
        EXCLUIR
      </StyledButtonExcluir>
    </Stack>
  );
}
