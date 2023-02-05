<h1 align="center"> Customer Contracts </h1>

<p align="center">

<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>

</p>

## Tabela de Conteúdos

    - Front-End
      - Tela de Login (com link de acesso para página de cadastro)
        - Formulário para dados de login
      - Tela de cadastro (com link para retornar ao login)
        - Formulário para dados de cadastro
      - Dashboard (com link para retornar ao login)
        - Formulário para dados de cadastro de contatos
        - Tela para renderização dos contatos cadastrados

## Descrição do Projeto

<p align="justify">Plataforma para cadastro de clientes com vínculo de contatos. Onde é possível realizar o cadastro de um cliente, para que depois de registrado e autenticado. Possa cadastrar seus contatos.</p>

## Deploy da aplicação

** Em Desenvolvimento **

## Dependências e Libs Instaladas

    - Front-end
      - React
      - TypeScript
      - React-Hook_form
      - Axios
      - React Router DOM
      - React Toastify
      - React Icons
    - Back-end
      - Express
      - TypeORM
      - TypeScript
      - Bcryp
      - Jsonwebtoken
      - Jest

## Como rodar a aplicação

    1. Clone o repositório
    2. Rode o comando "cd customer-contracts"
    3. Rode o comando "cd back-end
    4. Rode o comando "yarn install" para instalar as dependências necessárias para rodar o projeto
    5. Remova o ".example" do arquivo .env e configure as variáveis de ambiente
    6. Utilize o comando "yarn typeorm migration:run -d src/data-source.ts" para rodar as migrations.
    7. Rode o comando "yarn dev" para inicar o servidor na porta 3000.
    8. Em outro terminal, rode o comando "cd front-end" seguido de "cd customer-contracts-front" para acessar o diretório do front end
    9. Rode o comando "yarn install" para instalar as dependências do front-end
    10. Rode o comando "yarn start" para abrir a aplicação no seu navegador
    11. Aperte "Y" para aceitar abrir na porta 3001.

## Como rodar os testes

    No diretório "back-end", rode o comando "yarn test" quando a aplicação não estiver rodando.

## Problemas em aberto

    - Bug na deleção de clientes

# Próximas features

    - Criação de middleware para melhor verificação de emails duplicados
    - Implementação de atualização e deleção de dados na parte do front-end

# Contato

Guilherme K Hirata - <a href="https://www.linkedin.com/in/guilhermekhirata/" target="_blank">Linkedin</a> <br>
Email - guilhermekhirata@hotmail.com
