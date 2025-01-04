# WebSockets e Cronjobs Serverless na AWS

## Sobre o projeto

Este é um projeto de estudos de um chat em tempo real utilizando WebSockets e Cronjobs Serverless na AWS.

## Tecnologias utilizadas

Back-end:
- [Node.js](https://nodejs.org/)
- [Serverless Framework](https://www.serverless.com/)
- [AWS Lambda](https://aws.amazon.com/pt/lambda/)
- [AWS API Gateway](https://aws.amazon.com/pt/api-gateway/)
- [AWS DynamoDB](https://aws.amazon.com/pt/dynamodb/)
- [AWS CloudWatch](https://aws.amazon.com/pt/cloudwatch/)

Front-end:
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [ShadcnUI](https://ui.shadcn.com/) 

## Tópicos Abordados

- [Serverless como ferramenta de IaC](docs/serverless.md)
- [Amazon API Gateway](docs/apiGW.md)
- [WebSockets](docs/ws.md)
- [Cronjobs](docs/cronjobs.md)

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Serverless Framework](https://www.serverless.com/)
- [AWS CLI](https://aws.amazon.com/pt/cli/)
- [Conta na AWS](https://aws.amazon.com/pt/)

### Back-end

```bash
# Clone este repositório
$ git clone https://github.com/ruann3res/ws-serverless-cronjobs.git 

# Acesse a pasta do projeto no terminal/cmd
$ cd wsapi

# Instale as dependências
$ npm install

# Execute o deploy

$ sls deploy

# Para realizar os testar locais da aplicação utilizando [wscat](https://www.npmjs.com/package/wscat) 

$ wscat -c wss://<api-id>.execute-api.<region>.amazonaws.com/dev
```

### Front-end

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd wsUI

# Instale as dependências

$ npm install

# Execute a aplicação

$ npm run dev
```

# Autor

- Ruan Neres 
- [LinkedIn](https://www.linkedin.com/in/ruan-neres/)
- [GitHub](https://github.com/ruann3res)
