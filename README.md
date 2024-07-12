# Acidente Zero

## Descrição
O projeto **Acidente Zero** é um painel para relatar problemas na cidade relacionados à falta de calçadas e lombadas. Ele visa aumentar a segurança dos pedestres e motoristas, permitindo que os cidadãos reportem locais perigosos e inadequados para a circulação.

## Tecnologias Utilizadas
- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida.
- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL orientado a documentos.
- **Mongoose**: Biblioteca ODM para MongoDB e Node.js.
- **Jest**: Framework de testes para JavaScript.

## Estrutura de Arquivos

```sh
acidente-zero/
├── public/
│   ├── img/
│   │   └── logo.png
│   ├── favicon.ico
│   └── vercel.svg
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── Menu.tsx
│   │   │   ├── Search.tsx
│   │   │   ├── UserMenu.tsx
│   │   │   └── Navigation.tsx
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   ├── Map/
│   │   │   └── Map.tsx
│   │   ├── ReportForm.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── api/
│   │   │   └── reports.ts
│   │   ├── report.tsx
│   │   └── ...
│   ├── styles/
│   │   ├── globals.css
│   │   └── tailwind.css
│   ├── utils/
│   │   ├── db.ts
│   │   └── ...
│   ├── services/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── ...
│   ├── models/
│   │   ├── Report.ts
│   │   └── ...
│   ├── hooks/
│   │   ├── useReports.ts
│   │   └── ...
│   └── index.tsx
├── tests/
│   ├── test_components/
│   │   ├── Footer/
│   │   │   └── Footer.test.tsx
│   │   └── Header/
│   │       └── Header.test.tsx
│   └── test_pages/
│       └── ...
├── .eslintrc.json
├── .gitignore
├── jest.config.js
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md

```


## Instalação e Configuração

Clone o repositório

```sh
git clone https://github.com/seu-usuario/acidente-zero.git

cd acidente-zero
```

Instale as dependências

```sh
npm install
```

Configure o arquivo .env

```
MONGODB_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/acidente-zero?retryWrites=true&w=majority
```

Inicie o servidor de desenvolvimento

```sh
npm run dev
```

## Scripts Disponíveis
`npm run dev`: Inicia o servidor de desenvolvimento.

`npm run build`: Cria a build para produção.

`npm start`: Inicia o servidor em produção.

`npm test`: Executa os testes.

## Contribuição

Faça um fork do projeto.

Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).

Commit suas alterações (`git commit -m 'Adiciona nova feature'`).

Faça o push para a branch (`git push origin feature/nova-feature`).

Abra um Pull Request.


## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo <a>LICENSE</a> para mais detalhes.


## <sumary>Clique para mostrar o texto 
<details>
Sinta-se à vontade para ajustar conforme necessário para atender melhor às suas necessidades específicas.
</details>
