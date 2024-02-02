import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'

export function Filter({ data, datReturnFunc }) {
  const [value, setValue] = useState('')

  function handleChangeInput(event) {
    setValue(event.target.value)
  }

  useEffect(() => {
    const dataFiltered = data.filter((item) => {
      const tags = item.tags.split(',')
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].trim().toLowerCase().startsWith(value.toLowerCase())) {
          return true
        }
      }
      return false
    })

    datReturnFunc(dataFiltered)
  }, [data, value])

  return (
    <TextField
      fullWidth
      label="Buscar Tags"
      variant="outlined"
      size="medium"
      value={value}
      onChange={handleChangeInput}
    />
  )
}
