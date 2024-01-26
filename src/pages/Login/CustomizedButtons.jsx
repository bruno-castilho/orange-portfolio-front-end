import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const CustomizedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#F52'),
  backgroundColor: '#F52',
  '&:hover': {
    backgroundColor: '#F52',
  },
  width: '100%', 
}));

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row" component="form">
      <CustomizedButton type="submit" value="Cadastrar" variant="contained">
         ENTRAR
      </CustomizedButton>
    </Stack>
  );
}
