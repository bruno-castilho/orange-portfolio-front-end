import styles from './styles.module.css';
import { TextField } from '@mui/material';
import { ModalComponent } from '../../components/Modals/cardView/view'; 

export function Discover() {
  return (
    <main>
      <div className={styles.title_container}>
        <h4 className={styles.title}>Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</h4>
      </div>

      <div className={styles.input_container}>
        <TextField
          fullWidth
          label="Buscar Tags"
          variant="outlined"
          size="medium"
          InputLabelProps={{
            style: { color: '#000000' },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderColor: '#000000',
              "&.Mui-focused fieldset": {
                borderColor: '#000000',
              },
            },
          }}
        />
      </div>
      <ModalComponent />
    </main>
  );
}
