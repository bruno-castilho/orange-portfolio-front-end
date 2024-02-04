import { Box, TextField } from '@mui/material'
import { useRef } from 'react'
import { Tags } from './Tags'

export function InputTags({ tags, newTagDetected, deleteTag }) {
  const tagRef = useRef()

  function handleTextChange(event) {
    if (event.target.value === ' ' || tags.length === 3) {
      event.target.value = ''
    }
  }

  function handleFocusOut() {
    if (tagRef.current.value !== '') {
      newTagDetected(tagRef.current.value)
      tagRef.current.value = ''
    }
  }

  function handleSpace(event) {
    if (event.keyCode === 32) {
      if (tagRef.current.value !== '') {
        newTagDetected(tagRef.current.value)
        tagRef.current.value = ''
      }
    }
  }

  return (
    <TextField
      onBlur={handleFocusOut}
      onKeyDown={handleSpace}
      onChange={handleTextChange}
      inputRef={tagRef}
      fullWidth
      label="Tags"
      variant="outlined"
      size="medium"
      InputProps={
        tags.length && {
          startAdornment: (
            <Box sx={{ display: 'flex' }}>
              {tags.map((data, index) => {
                return (
                  <Tags
                    data={data}
                    index={index}
                    handleDelete={deleteTag}
                    key={index}
                  />
                )
              })}
            </Box>
          ),
        }
      }
    />
  )
}
