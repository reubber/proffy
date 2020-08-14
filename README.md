<h1 align="center">
    <img alt="Proffy" src=".github/logo.svg" height="100px" />
</h1>

<p align="center">
  <img alt="design do projeto" width="650px" src="./.github/design.png" />
<p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-sobre">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#U+1F516-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#boom-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a><br><br>
  <a href="" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<p align="center">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/HigorSnt/proffy?style=flat-square">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/HigorSnt/proffy?style=flat-square">
<img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />
<img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
</p>

<br>

## :bookmark: Sobre

O **Proffy** é uma aplicação Web e Mobile feita para auxiliar na conexão entre os alunos e os professores. Nela, é oferecida aos professores a possibilidade de registrar aulas e adicionar informações como a disciplina e o custo por hr/aulas tanto como sua disponibilidade na semana, já os alunos tem a possibilidade de buscar pelas aulas cadastradas.

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/)
- [axios](https://github.com/axios/axios)



## :boom: Como Executar

- ### **Pré-requisitos**

  - É **necessário** o **[Node.js](https://nodejs.org/en/)** instalado.
  - É **necessário** ter o **[Git](https://git-scm.com/)** instalado e configurado
  - É **necessario** um gerenciador de pacotes de sua preferência **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)** instaldo.
  - Também , é **essencial** ter o **[Expo](https://expo.io/)** instalado.

1. Faça um clone desse e dos seguintes repositórios:
        
####  mobile e web aplication
```sh
  $ git clone https://github.com/reubber/proffy.git
  $ git clone https://github.com/reubber/proffy-mobile.git
```
####  Api em nodejs
```sh
  $ git clone https://github.com/reubber/express-crud
```

2. Executando a Aplicação:

```sh
# API
  # entre no diretorio do server
  $ cd express-crud
  # Instalando as dependências.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate

  # Inicie o servidor localmente
  $ yarn start # ou npm start

# Aplicação mobile
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start

# Aplicação web
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start

```

## 🏹 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ na nlw2 week :wave: