import { Chip } from '@mui/material'

export const Tags = ({ data, handleDelete, index }) => {
  return (
    <Chip
      label={data}
      color="default"
      size="medium"
      variant="filled"
      onClick={() => {
        handleDelete(index)
      }}
      sx={{
        marginRight: '8px',
      }}
    />
  )
}
