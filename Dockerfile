# Usar uma imagem base do Node.js 18
FROM node:18

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação para o diretório de trabalho
COPY . .

# Construir a aplicação para produção
RUN npm run build

# Verificar se a pasta build foi criada e listar seu conteúdo
RUN ls -la build

# Instalar o servidor estático para servir a aplicação
RUN npm install -g serve

# Expor a porta que a aplicação vai rodar
EXPOSE 5000

# Comando para iniciar o servidor e especificar a porta correta
CMD ["serve", "-s", "build", "-l", "5000"]
