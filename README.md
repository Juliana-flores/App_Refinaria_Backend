# Back-end

## Instruções para rodar o projeto:
- Clonar o repositório
- Ter instalado o Node.js
- Instalar os pacotes com o comando npm install
- Instalar a biblioteca ts-node com: npm install -g ts-node
- Para expor o serviço usar o ngrok https://ngrok.com/ (criar conta para fazer o download e gerar token)
- Criar na raiz do projeto o arquivo .env e dentro o script:
  DATABASE_PASSWORD=senha-da-base-dados
  DATABASE_USERNAME=usuario-da-base-de-dados
  DATABASE_NAME=nome-da-base-de-dados
  DATABASE_HOST=host
  DATABASE_PORT=porta-de-acesso
  SID=sid-oracle
  JWT_SECRET=FtP^2OBR$i@w
- Iniciar o servidor com o comando npm start watch
- Após criadas as tabelas no banco de dados inserir os arquivos das tabelas SAT_APP que estão no repositório Database