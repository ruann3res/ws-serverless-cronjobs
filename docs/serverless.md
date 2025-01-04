# Serverless como ferramenta de IaC

O [Serverless](https://www.serverless.com/) Framework é uma ferramenta de Infrastructure as Code (IaC) que facilita a criação, implantação e gerenciamento de aplicações serverless. Ele permite que você defina a infraestrutura necessária para sua aplicação em um arquivo de configuração (geralmente [serverless.yml](vscode-file://vscode-app/snap/code/179/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)), e então implante essa infraestrutura automaticamente.

### Como funciona:

1. **Definição da Infraestrutura**: Você define os recursos necessários (funções Lambda, APIs, bancos de dados, etc.) em um arquivo [serverless.yml](vscode-file://vscode-app/snap/code/179/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).
2. **Deploy**: O Serverless Framework usa essa definição para criar e configurar os recursos na nuvem (AWS, Azure, Google Cloud, etc.).
3. **Gerenciamento**: Ele também facilita o gerenciamento contínuo da infraestrutura, permitindo atualizações, remoções e monitoramento.

### Exemplo de [serverless.yml](vscode-file://vscode-app/snap/code/179/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html):

```yaml
service: my-service

provider:
  name: aws
  runtime: nodejs14.x

functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: hello
          method: get
```

### Componentes principais:

- **Service**: Nome do serviço.
- **Provider**: Provedor de nuvem e configurações específicas (como runtime).
- **Functions**: Definição das funções Lambda e seus eventos (gatilhos).

### Benefícios:

- **Automação**: Reduz a necessidade de configuração manual.
- **Reprodutibilidade**: Facilita a replicação de ambientes.
- **Escalabilidade**: Gerencia automaticamente a escalabilidade dos recursos.

### Comandos básicos:

- `sls deploy`: Implanta a infraestrutura definida.
- `sls remove`: Remove a infraestrutura implantada.
- `sls invoke -f functionName`: Invoca uma função Lambda diretamente.


### **Artigos Relacionados**

- [Serverless Framework](https://medium.com/@bertrandoubida/serverless-framework-setup-e21ca3a46cfa)
- [Serverless Framework: 10 melhores práticas recomendadas](https://oieduardorabelo.medium.com/serverless-framework-as-10-melhores-pr%C3%A1ticas-recomendadas-e2ec59f92699)
- [Serverless Framework ⚡️ — Criando (ou migrando) uma REST API com Express.js e AWS Lambda.](https://medium.com/@fidelissauro/serverless-framework-%EF%B8%8F-criando-ou-migrando-uma-rest-api-com-express-js-e-aws-lambda-51834740dcdb)