import { put } from '@vercel/blob'

export const config = {
  runtime: 'edge',
}

export default async function upload(formData) {
  const file = formData.get('file')

  const blob = await put(file.name, file, {
    access: 'public',
    token: import.meta.env.VITE_BLOB_READ_WRITE_TOKEN,
  })

  return blob
}
