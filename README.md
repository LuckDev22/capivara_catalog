# Capivara Catalog API

## Descrição

O **Capivara Catalog API** é um sistema desenvolvido para auxiliar na catalogação e gestão de capivaras. Este projeto permite que usuários cadastrem, atualizem, excluam e consultem informações sobre as capivaras, incluindo nome, idade, peso, habitat, dieta, comportamento e status de saúde. O projeto é destinado a ajudar biólogos e pesquisadores a manter um controle preciso das capivaras observadas.

## Funcionalidades

- **Cadastro de Capivara**: Permite criar um novo registro de capivara com todos os detalhes (nome, idade, peso, habitat, dieta, etc).
- **Atualização de Capivara**: Permite a atualização dos detalhes de uma capivara existente.
- **Exclusão de Capivara**: Permite remover um registro de capivara do sistema.
- **Listagem de Capivaras**: Permite listar todas as capivaras cadastradas.
- **Consulta de Capivara**: Permite buscar uma capivara específica por seu ID.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução do código JavaScript no servidor.
- **Express**: Framework web utilizado para construir a API REST.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB, utilizado para modelar os dados e interagir com o banco de dados.
- **Zod**: Biblioteca de validação de dados.
- **TypeScript**: Linguagem utilizada para trazer tipagem estática ao JavaScript.
- **Docker** : Para gerenciamento de containers, facilitando o deploy em produção.
- **MySQL**: Banco de dados relacional (pode ser substituído dependendo das necessidades do projeto).

## Instalação

### 1. Clone o repositório:

```bash

git clone https://github.com/seu-usuario/capivara-catalog.git
cd capivara-catalog


2. Instale as dependências:

npm install

3. Configuração do banco de dados:
Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

env

PORT=8888
DB_CONEXAO_STRING=mongodb+srv://codebyluck:Y8qSHN65cWaBVpEm@capivaracatalog.rys8d.mongodb.net/
SECRET_KEY=capivarasecretkey


4. Rodar a aplicação:
npm run dev


5. Acessar a API:
A aplicação estará rodando na URL: http://localhost:8888.
