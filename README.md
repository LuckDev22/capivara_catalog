# Capivara Catalog API

## Descrição

O **Capivara Catalog API** é um sistema desenvolvido para auxiliar na catalogação e gestão de capivaras. Este projeto permite que usuários cadastrem, atualizem, excluam e consultem informações sobre as capivaras, incluindo nome, idade, peso, habitat, dieta, comportamento e status de saúde. O projeto é destinado a ajudar biólogos e pesquisadores a manter um controle preciso das capivaras observadas.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução do código JavaScript no servidor.
- **Express**: Framework web utilizado para construir a API REST.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB, utilizado para modelar os dados e interagir com o banco de dados.
- **Zod**: Biblioteca de validação de dados.
- **TypeScript**: Linguagem utilizada para trazer tipagem estática ao JavaScript.
- **Docker** : Para gerenciamento de containers, facilitando o deploy em produção.
- **MongoDB**: Banco de dados no-relacional (pode ser substituído dependendo das necessidades do projeto).
- **Swagger** (para documentação)
- **Insomnia** (para testes de API)
- **Vercel** (para deploy)

## Instalação Local

Para rodar o projeto localmente, siga as instruções abaixo:

### 1. Clonando o Repositório

````bash
git clone https://github.com/LuckDev22/capivara_catalog.git


 
### 2. Configuração das Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:
 
 deixei salvo em .env.example e sub o .env mesmo só para facilitar nos testes porque normalmente deixo no gitignore

### 3. Executando com Docker
Caso queira rodar o projeto com Docker, siga os passos abaixo:

Certifique-se de ter o Docker instalado e rodando.
Execute o comando:

docker-compose up --build

### 4. Instalação Manual
Se preferir rodar o projeto manualmente, siga os passos abaixo:

Instale as dependências do projeto:

npm install

Execute o projeto em modo de desenvolvimento:

npm run dev
A API estará rodando em http://localhost:8888.



#### Documentação da API
A documentação da API foi gerada utilizando Swagger e está disponível no seguinte endpoint:

Documentação Swagger (http://localhost:8888/doc)
Documentação Swagger no Vercel (https://capivara-catalog.vercel.app/doc/)
Rotas Disponíveis

GET /capivaras
Retorna todas as capivaras cadastradas.

POST /capivaras
Cadastra uma nova capivara.

Body Exemplo:


{
  "nome": "Capivara Bigodes",
  "idade": 5,
  "peso": 55.5,
  "statusSaude": "Saudável",
  "habitat": "Lagoa Sul",
  "comportamento": "Muito ativa, gosta de nadar pela manhã.",
  "dieta": "Frutas e pasto fresco",
  "observacoes": "Gosta de socializar com outras capivaras."
}

GET /capivaras/{id}
Retorna os detalhes de uma capivara específica com base no ID.

PUT /capivaras/{id}
Atualiza os detalhes de uma capivara específica.

Body Exemplo:

{
  "nome": "Capivara Atualizada",
  "idade": 6,
  "peso": 60.0,
  "statusSaude": "Saudável",
  "habitat": "Lagoa Central",
  "comportamento": "Calma e relaxada",
  "dieta": "Legumes e verduras",
  "observacoes": "Prefere ficar sozinha."
}

DELETE /capivaras/{id}
Exclui uma capivara específica com base no ID.

Testando a API com Insomnia
Você pode importar o arquivo de configuração do Insomnia para testar os endpoints da API diretamente. Basta seguir os seguintes passos:

Abra o Insomnia.
Importe o arquivo JSON da configuração do Insomnia, que você pode criar com base nas rotas fornecidas.
Teste as rotas da API utilizando os exemplos fornecidos acima.

Deploy
O projeto foi deployado no Vercel e pode ser acessado diretamente através do seguinte link:

https://capivara-catalog.vercel.app/

Capivara Catalog na Vercel
Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests no repositório.
