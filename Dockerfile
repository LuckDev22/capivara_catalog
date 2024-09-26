# 1. Escolha da imagem base
FROM node:20-alpine

# 2. Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# 3. Copia o package.json e o package-lock.json
COPY package*.json ./

# 4. Instala as dependências
RUN npm install

# 5. Copia o restante dos arquivos da aplicação
COPY . .

# 6. Expõe a porta usada pela aplicação
EXPOSE 8888

# 7. Variáveis de ambiente
ENV PORT=8888
ENV DB_CONEXAO_STRING=mongodb+srv://codebyluck:Y8qSHN65cWaBVpEm@capivaracatalog.rys8d.mongodb.net/
ENV SECRET_KEY=capivarasecretkey

# 8. Comando para iniciar a aplicação no modo desenvolvimento
CMD ["npm", "run", "dev"]
