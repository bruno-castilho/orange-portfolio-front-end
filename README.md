# Orange Porfolio - Front-End

Este é o front-end desenvolvido para o hackathon do projeto de formação da Orange Juice.

# Pré-Requisitos
[NodeJS](https://nodejs.org/en) >= v20.10.0

[Vercel Blob](https://vercel.com/docs/storage/vercel-blob/using-blob-sdk)

[Orange Porfolio - Back-End](https://github.com/nathalyaleao/orange-portifolio-back-end)

# Instalação

1. Insira na pasta raiz do projeto um arquivo .env como o apresentado abaixo:

```
VITE_BLOB_READ_WRITE_TOKEN=    # Credencial obtida na Vercel
VITE_BASE_URL=                 # Endereço do back-end
VITE_IMAGE_PERFIL_DEFAULT=     # Imagem default para perfil
```

2. Faça a instalação dos pacotes necessários:
```bash
npm install
```

# Iniciando

1. Para iniciar o projeto, execute o comando abaixo:
```bash
npm run dev
```

2. Se tudo der certo, o log abaixo deverá ser apresentado no seu terminal:

```
> orange-portfolio-front-end@0.0.0 dev
> vite --host


  VITE v5.0.12  ready in 173 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.0.17:5173/
  ➜  Network: http://172.18.0.1:5173/
  ➜  Network: http://172.17.0.1:5173/
  ➜  Network: http://172.20.0.1:5173/
  ➜  press h + enter to show help
```
