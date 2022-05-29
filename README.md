# Finance App - Sistemas Distribuídos
> Repositório dedicado para a implementação do frontend para o projeto "Finance App", desenvolvido durante a disciplina de Sistemas Distribuídos e como uma das partes do projeto final, conjuntamente ao backend localizado <a href="https://github.com/octaroxas/api-finance-app">neste repositório</a>.

---
## • How To

### 1. Requisitos para execução local do projeto
- <a href="https://nodejs.org/en/">Node.JS (versão de longo tempo de suporte - LTS)</a>
- <a href="https://yarnpkg.com/getting-started/install">Yarn Package Manager</a>
- <a href="https://docs.expo.dev/get-started/installation/">Expo CLI</a>
- Aplicativo Expo Go (Móvel)
  - <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www">Play Store (Android)</a>
  - <a href="https://itunes.apple.com/app/apple-store/id982107779">iOS (Apple)</a>

> Informação adicional: caso não seja possível instalar a aplicação móvel do Expo em hardware físico - um smartphone, pode-se utilizar um emulador Android no computador como o <a href="https://www.bluestacks.com/">BlueStacks 5</a>, por exemplo.

### 2. Execução do projeto
#### **Informação importante**: certifique-se que os dois dispositivos - no caso de computador e smartphone - estejam na mesma rede para que não ocorram erros de acesso ao projeto via Expo Go.

I) Clonar o repositório via SSH:
   ```
   $ git clone git@github.com:octaroxas/SD-frontend-finance-app.git 
   ```

II) Acessar a pasta do projeto:
   ```
   $ cd SD-frontend-finance-app 
   ```

III) Instalar as dependências do projeto com o Yarn Package Manager:
   ```
   $ yarn install 
   ```

IV) Executar o projeto com o Expo CLI:
   ```
   $ expo start 
   ```


### 3. Abrir o projeto no smartphone

#### Após a execução do comando de inicialização via terminal (```expo start```), deve ser gerada uma saída similar a esta no terminal:
```
Starting project at C:\Users\user_name\GitHub\SD-frontend-finance-app
Developer tools running on http://localhost:19002
Starting Metro Bundler
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▄▀ ▀ █ █▀█ ▄▄▄▄▄ █
█ █   █ █   █▀ ▄▀ █ █   █ █
█ █▄▄▄█ █▄█▀ ▄▀▀▄▀█ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄█ █ █▄▀ █▄▄▄▄▄▄▄█
█    █▀▄█▄█ ▄ ▀▀▄▄▄██▄ ▄▀▄█
█▄▀▀▀██▄▄▀  ▄▄ ▄█▀█ ▀██▀███
██▀▄ ▄▄▄█▀ ▄▀ ▄█ ▄█ ▄ █ █▀█
█▀▄██ ▄▄▄█▀▄ █▄▀█ ▀▀█▀▀█ ▀█
███▄▄██▄█▀▄███▄ ▄ ▄▄▄ ▀▄█▀█
█ ▄▄▄▄▄ ██▄▄▀▄███ █▄█ █▄▄▄█
█ █   █ █▀ ▄▀ █▀▀▄▄   █▀▀ █
█ █▄▄▄█ █ █ ▄█▀▄▀▄▀▄█▄▄ ▄██
█▄▄▄▄▄▄▄█▄████▄█▄██████▄▄▄█

› Metro waiting on exp://123.456.789.101:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press d │ show developer tools
› shift+d │ toggle auto opening developer tools on startup (disabled)

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
```

Após isso, deve-se apenas escanear o QR-Code gerado no terminal com o smartphone ou, caso esteja utilizando o emulador Android, copiar o endereço de acesso identificado com o padrão ```exp://endereço_ip:porta``` e utilizá-lo dentro do Expo Go.

---

## Desenvolvedores (Frontend)
<table style="border: 1px solid gray;">
  <tr>
    <td align="center"><a href="https://github.com/NepZR"><img style="width: 150px; height: 150; border-radius: 100%;" src="https://avatars.githubusercontent.com/u/37887926" width="100px;" alt=""/><br /><sub><b>Lucas Darlindo Freitas Rodrigues</b></sub></a><br /><sub><b>Graduando em Ciência da Computação</sub></a><br /><a href="https://www.linkedin.com/in/lucasdfr"><sub><b>LinkedIn</b></sub></a></td>
    <td align="center"><a href="https://github.com/octaroxas"><img style="width: 150px; height: 150; border-radius: 100%;" src="https://avatars.githubusercontent.com/u/46870808" width="100px;" alt=""/><br /><sub><b>Octacílio Carvalho de Almeida</b></sub></a><br /><sub><b>Graduando em Ciência da Computação</sub></a><br /><a href="https://www.linkedin.com/in/octacilio-c-almeida/"><sub><b>LinkedIn</b></sub></a></td>
  </tr>
<table>