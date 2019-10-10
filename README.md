# JRSCRM

Este projeto foi desenvolvido como uma POC (Proof Of Concept ou Prova de conceito) para possibilitar uma forma de acesso para Tickets/Ordens de serviço, clientes e colaboradores da JRS Computação. A intuito da POC foi de implementar algo util e ao mesmo tempo em uma linguagem mais atual e que seja mais difundida no mercado, por isso escolhi o Angular na versão 8, com Material.

## Montando o ambiente
Para rodar a aplicação em ambiente de desenvolvimento é necessário ter instalado o NodeJS e o Angular-CLI, não vou entrar em detalhes mas a instalação pode ser a padrão mesmo seguindo os GetStarts linkados abaixo.

https://nodejs.org/en/ 
**Dica:** Dê prefência para versão LTS do Node pois é a mais estável.

https://cli.angular.io/

### Instalação das dependências de desenvolvimento
1. Após a instalação do NodeJS, abra o Prompt do Node como administrador
**Dica:** Sempre utilize este prompt e sempre como administrador, pois vários comandos fazem instalações de pacotes em pastas protegidas do sistema, portanto se não for como ADM podem ocasionar exceptions e não rodarem por completo, gerando falhas no decorrer do desenvolvimento.

2. Com o prompt do node aberto digite o comando para instalação do Angular-CLI
**_npm install -g @angular/cli_**

3. Aguarde o término da instalação

4. Ainda pelo prompt acesse uma pasta de sua prefência e execute o comando **_ng new meu-primeiro-app_**

5. Terminado a execução digite **_cd meu-primeiro-app_** e dê enter

6. Execute o comando **_ng serve --open_** e aguarde

7. Este comando inicializa o servidor de desenvolvimento e com o parâmetro _--open_ abre automaticamente o navegador com a URL http://localhost:4200 abrindo assim a pagina inicial do seu primeiro projeto, significando seu ambiente de desenvolvimento esta pronto.

### Baixando e montando o ambiente do projeto JRS-CRM
Ainda com o prompt do Node aberto execute os comando abaixo:
**PS: os Nomes das pasta são apenas uma sugestão e podem ser alteradas conforme desejado.**

1. Acesse a pasta C:\Projetos com o comando **_cd C:\projetos_**

2. Execute o comando para fazer o clone do projeto no seu micro **_git clone https://github.com/altrombetone/jrscrm.git_**

3. Completado o comando acima execute **_cd jrscrm_** para acessar a pasta do projeto.

4. Execute o comando **_npm install_** para instalação das dependências do projeto e aguarde pois este é o comando mais demorado.

5. Agora basta subir o servidor de dev com o comando **_ng serve --open_**

6. Para editar o projeto sugiro o VS Code pois além do terminal integrado que facilita na criação de componentes, possui uma variada gama de plugins que auxiliam muito no desenvolvimento.


### Agora pegue um boa xícara de café e bora codar :-).

**PS: aqui em baixo o Angular-CLI gerou o próprio README.MD, resolvi deixar pois é um material extra.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
