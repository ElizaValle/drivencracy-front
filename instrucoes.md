# Projeto Drivencracy
Este é o front-end do projeto de drivencracy, o código já foi implementado por completo, você só precisará conectar ele ao seu back-end.

Crie um repositório vazio no seu github e faça um commit e um push do código desse projeto. Você precisa colocar o front-end no seu github para fazer o deploy do front-end na vercel.

## Se conectando ao back-end
Na pasta `src/service` existem dois arquivos onde ficam as funções que usam o axios pra mandar requisições para o back-end. Se você acessar esses arquivos, notará que eles mandam as requisições para `http://localhot:5000`, que é o valor definido na constante `BACK_END_URL` que existe nesses arquivos.

Se você rodar o seu back-end na porta 5000, esse projeto front-end deverá conseguir mandar requisições pro seu back-end sem nenhum problema e sem nenhuma configuração adicional. Use isso pra testar o projeto e verificar se todos os requisitos que você implementar no back-end estão funcionando corretamente!

Caso o seu back-end tenha algum erro, é bem provável que o front-end não consiga fazer as requisições e apareçam vários erros no seu navegador. **Você não deve alterar o código dos componentes do front-end** , se algum erro está acontecendo no front-end, é porque seu back-end não está respondendo as requisições como os requisitos pedem. Se precisar de ajuda, procure a tutoria para tirar dúvidas do problema.

## Configurando o front-end para o deploy
Para configurar corretamente a conexão com o deploy do back-end, você deverá mudar o valor da constante `BACK_END_URL` que existe nos arquivos da pasta `src/service`, para que ao invés de usar o link fixo do back-end definido nessas constantes, você utilize uma variável de ambiente.

Existe um arquivo `.env.example` na raiz desse projeto contendo a variável de ambiente `VITE_API_URL`. **Essa é a variável de ambiente onde você deve configurar qual o link do seu back-end**. Você precisa criar um arquivo `.env` na raiz do projeto (pode só renomear o .env.example), contendo a variável `VITE_API_URL`, e precisa modificar o código dos arquivos em `src/service` pra usar essa variável ao invés do link definido na constante desses arquivos.

Isso é essencial pra fazer o deploy do front-end na vercel, já que o seu deploy do front-end precisa se comunicar com o deploy do back-end.

Se tiver dúvidas de como fazer esses passos, confira o material explicando [como configurar o deploy do projeto](https://www.notion.so/bootcampra/Artigo-Deploy-de-aplica-es-back-end-no-Render-MongoDB-05f2a8be6ff4451bb64e22764de991d0)

**E como sempre, se precisar de ajuda, procure a tutoria!**