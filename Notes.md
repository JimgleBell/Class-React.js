# React.js

## Introdução

- ### O que é React.js?

React.js é uma biblioteca JavaScript para criar interfaces de usuário. É mantido pelo Facebook e por uma comunidade de desenvolvedores e empresas individuais.

- ### Por que usar React.js?

Um dos principais motivos para usar React.js é que ele permite criar interfaces de usuário de forma simples e rápida. Ele também permite criar componentes reutilizáveis, o que facilita a manutenção do código. Além disso, ele é uma biblioteca JavaScript, o que significa que você pode usar JavaScript para escrever código React.js.

## Primeiro Projeto

- ### Criando um projeto React.js 

Para criar um projeto React.js, é necessário ter o Node.js instalado na máquina. Com o Node.js instalado, basta executar o seguinte comando no terminal:

```bash  
npx create-react-app meu-projeto-react
```
- ### Estrutura de pastas

A estrutura de pastas de um projeto React.js é a seguinte:

```bash
meu-projeto-React
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
``` 
Você não precisa se procupar com a maioria desses arquivos. Os arquivos que você precisa se preocupar são: `app.js` , `index.js` e `index.html`.

- #### `index.html`
Está localizado na pasta `public` e é o arquivo que será renderizado no navegador. Ele contém uma div com o id `root` que será usada para renderizar os componentes React.js.

- #### `index.js`
Está localizado na pasta `src` e é o arquivo que contém o código que renderiza o componente principal da aplicação. Por padrão, ele renderiza o componente `App.js` na div com o id `root` do arquivo `index.html`.

- #### `app.js`
Está localizado na pasta `src` e é o arquivo que contém o componente principal da aplicação. Aqui serão criadas as componentes que serão renderizadas na tela.

## Componentes

- ## Classe vs Função

Existem duas formas de criar um componente em React.js: usando uma classe ou usando uma função. Ambas as formas serão abordadas nos exemplos abaixo. A principal diferença entre elas é que os componentes criados usando uma classe podem ter um estado, enquanto os componentes criados usando uma função presisam usar hooks para ter um estado.

- ### Criando um componente 
  
Para criar um componente, basta criar um arquivo com a extensão `.js` na pasta `src` e escrever o seguinte código:

```javascript
import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default HelloWorld;
```
- ### Renderizando um componente

Para renderizar um componente, basta importá-lo no arquivo `index.js` e renderizá-lo na div com o id `root` do arquivo `index.html`. O arquivo `index.js` deve ficar assim:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>,
  document.getElementById('root')
);
```
- ### Props

Props são propriedades que podem ser passadas para um componente. Elas são passadas como parâmetros para o componente e podem ser acessadas dentro do componente. Vamos criar um componente chamado `Hello` que recebe uma propriedade `name` e renderiza um texto na tela com o nome passado como propriedade.

```javascript
import React from 'react';

function Hello(props) {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
    </div>
  );
}

export default Hello;
```
Agora, vamos renderizar o componente `Hello` no componente `HelloWorld` passando o nome `World` como propriedade.

```javascript
import React from 'react';
import Hello from './Hello';

function HelloWorld() {
  return (
    <div>
      <Hello name="World" />
    </div>
  );
}

export default HelloWorld;
```
- ### State

State é um objeto que contém os dados de um componente. Ele é usado para armazenar dados que podem ser alterados durante a execução do programa. Vamos criar um componente chamado `Counter` que renderiza um contador na tela e incrementa o valor do contador quando o usuário clica em um botão.

```javascript
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
```
- ### Eventos
  
Eventos são ações que podem ser executadas pelo usuário. Vamos criar um componente chamado `Button` que renderiza um botão na tela e executa uma ação quando o usuário clica no botão.

```javascript
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleClick()}>Increment</button>
      </div>
    );
  }
}

export default Button;
```
- ### Hooks

Hooks são funções que permitem que você use o state e outros recursos do React sem escrever uma classe. Vamos criar um componente chamado `Counter` que renderiza um contador na tela e incrementa o valor do contador quando o usuário clica em um botão.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
