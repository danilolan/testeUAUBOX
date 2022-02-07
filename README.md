# Teste UAUBOX

# Sobre o projeto

Teste UAUBOX é uma aplicação desenvolvida para o desafio proposto pela uaubox de replicar / melhorar o sistema de cadastro atual da empresa. Após um breve estudo
e aprofundamento no atual fluxo de cadastro do site da uaubox e do exemplo disponibilizado pelo FIGMA, fiz algumas alterações.

Site online -> https://testeuaubox.netlify.app/identificacao
obs: O sistema de autocomplete do viacep não está funcionando devido a falta de um custom domain, porém ele funciona com o projeto localmente. 

## Alterações
- Trazendo alguns conceitos simples de UX, optei por verticalizar os formulários, visto que, quando você constrói o form em coluna ( ou o mais próximo disso possível ), facilita
a leitura e compreensão do usuário tornando-o muito mais propenso a de fato se cadastrar no sistema.

![Web 1](https://github.com/danilolan/assets/blob/main/Screenshot-box.png)

- Devido a verticalização do formulário e também para diferenciar um pouco visualmente, trouxe o header para a esquerda da tela (aside) para níveis maiores de resolução, 
devolvendo-o para o top conforme a tela diminui (responsividade).

- Com a minha análise do atual sistema de cadastro senti a falta de uma visualização de progresso por parte do usuário. Para solucionar isso adicionei uma progress-bar animada
no aside progredindo com os steps e um progress-circle no canto superior da tela com a mesma finalidade.

![Web 2](https://github.com/danilolan/assets/blob/main/Screenshot-box-2.png)
![Web 2](https://github.com/danilolan/assets/blob/main/Screenshot-box-4.png)

- Achei relativamente confuso a terceira parte do cadastro ( Resumo da compra ) pedir a localização do usuário enquanto oferece a seleção da assinatura, então, dividi essa
section em duas: Localização ( que recebe a localização do usuário) e Confirmação (que tanto confirma os dados cadastrados como oferece os planos).

![Web 3](https://github.com/danilolan/assets/blob/main/Screenshot-box-3.png)

## Features
- Inputs, buttons e labels componentizados.
- Os 4 steps do cadastro indexados com React Router
- Dados armazenados a partir do useContext (hook)
- Design 100% responsivo
- Inputs com complete text
- Buscador de cep (viaCep api) que preenche os inputs de endereço automaticamente
- Inputs masks ( Ex.: Telefone -> (__)-_____-____ )
- Validação de inputs se estão vazios ou preenchidos corretamente ( Ex.: o cep precisa de 8 números )

## Layout WEB
![Web 3](https://github.com/danilolan/assets/blob/main/box1.png)
![Web 3](https://github.com/danilolan/assets/blob/main/box2.png)
![Web 3](https://github.com/danilolan/assets/blob/main/box3.png)
![Web 3](https://github.com/danilolan/assets/blob/main/box4.png)

## Layout MOBILE

![Web 3](https://github.com/danilolan/assets/blob/main/box5.png)

# Tecnologias utilizadas
## Front end
- HTML / SCSS / JS 
- ReactJS
- Context
- React Router
- ViaCep

# Como executar o projeto

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/danilolan/testeUAUBOX/

# entrar na pasta do projeto front end web
cd testeUAUBOX

# instalar dependências
npm install

# executar o projeto
npm start
```

# Autor

Danilo Herculano

https://www.linkedin.com/in/danilo-herculano-3906761b4/
