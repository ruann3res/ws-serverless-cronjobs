# CronJobs && EventBridge

**Cron Jobs** são tarefas agendadas que são executadas automaticamente em intervalos regulares. Eles são comumente usados em sistemas Unix e Linux para automatizar a execução de scripts e comandos. A configuração de um cron job é feita através de um arquivo chamado `crontab`, onde você define a frequência e o comando a ser executado.

#### Exemplo de Crontab:

```
# Minuto (0-59) Hora (0-23) Dia do Mês (1-31) Mês (1-12) Dia da Semana (0-6) Comando
0 0 * * * /path/to/script.sh  # Executa o script.sh todos os dias à meia-noite
```

### EventBridge

**Amazon EventBridge** é um serviço da AWS que facilita a criação de arquiteturas orientadas a eventos. Ele permite que você conecte diferentes aplicações usando eventos, sem a necessidade de escrever muito código de integração. EventBridge pode receber eventos de várias fontes, como serviços da AWS, aplicações SaaS e suas próprias aplicações, e roteá-los para destinos como funções Lambda, filas SQS, e muito mais.

#### Principais Funcionalidades:

1. **Roteamento de Eventos**: Direciona eventos para diferentes destinos com base em regras configuradas.
2. **Transformação de Eventos**: Permite modificar eventos antes de enviá-los para o destino.
3. **Integração com Serviços AWS**: Facilita a integração com outros serviços da AWS.
4. **Escalabilidade**: Gerencia automaticamente a escalabilidade para lidar com diferentes volumes de eventos.
### Benefícios:

- **Automação**: Cron jobs automatizam tarefas repetitivas.
- **Desacoplamento**: EventBridge permite a criação de sistemas desacoplados, onde diferentes partes da aplicação se comunicam através de eventos.
- **Escalabilidade e Flexibilidade**: Ambos os serviços ajudam a criar sistemas escaláveis e flexíveis, facilitando a manutenção e a evolução da aplicação.

### Artigos Relacionados

- [Cron Job Mastery: A Comprehensive Guide to Task Scheduling with Cron Tab](https://medium.com/@gauravkachariya/cron-jobs-the-ultimate-guide-ef56e7697fdb)
- [Criando CRON Jobs para Lambda Functions e Monitorando Logs com AWS EventBridge e AWS CloudWatch](https://diegosouzareis.medium.com/criando-cron-jobs-para-lambda-functions-e-monitorando-logs-com-aws-eventbridge-e-aws-cloudwatch-4bc6e296e9a5)
- [Creating CRON Jobs using Amazon Event Bridge](https://amirmustafaofficial.medium.com/creating-cron-jobs-using-amazon-event-bridge-6fd6cfd6d0a2)