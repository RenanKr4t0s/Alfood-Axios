# 📚 Sobre esse projeto

Esse projeto foi desenvolvido a partir do curso *[Curso Integrando seu projeto React com APIs](https://cursos.alura.com.br/course/react-integrando-projeto-react-apis)* da Alura.

O desafio foi transformar um site estático para consumir e editar dados de um backend.

![Integrando seu projeto React com APIs](thumbnail.png)

---

# 📝 Minhas notas

## 🎯 Objetivo

- Trabalhar mais profundamente com o Axios e entender sua estrutura e forma assíncrona de utilização no React.

## ✨ Coisas legais que aprendi

- Utilizar uma imagem do Docker para rodar o backend enquanto trabalhava no front-end 🚀
- Como funciona o Swagger na API (Swagger-UI - Express) 🔧

## 🏋️‍♂️ Coisas que é bom exercitar

### 📚 Lembrando detalhes

- **Spread operator + Spread operator**  
  `setRestaurantes([...restaurantes, ...response.data.results])`

- **Passar um Tipo em uma Interface:**  
  `axios.get<IPaginacao<IRestaurante>>(...)`  
  `interface IPaginacao<T> {... results: T[]}`

### 🎨 Utilizando Material UI

- [Instalação pela Documentação](https://mui.com/material-ui/getting-started/installation/)  
  Biblioteca de estilos da aplicação.  
  Utilizamos bastante as [Tabelas](https://mui.com/material-ui/react-table/) no componente *AdministracaoRestaurantes*.

### ⚠️ Problemas no caminho

- O curso usava a versão 1 do Docker Compose, mas o novo padrão é a versão 2  
  (comandos um pouco diferentes são utilizados). 🐳

---

# 🍽️ Alfood

O **Alfood** é um site que lista restaurantes e pratos do menu.  
É um MVP que está só começando e ainda tem muitas funcionalidades novas para serem desenvolvidas. 🚀


<img src="screencapture.png" alt="Imagem do Alfood" width="50%">


## 🔨 Funcionalidades do projeto

O Alfood começa com uma listagem estática de seu conteúdo e é esse o problema que queremos resolver.
No decorrer do curso, vamos implementar toda a camada de comunicação com a API.

## ✔️ Técnicas e tecnologias utilizadas

Se liga nessa lista de tudo que usaremos nesse treinamento:

- `React`
- `React Hooks`
- `TypeScript`
- `axios`

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, execute npm i para instalar as dependências e npm start para inicar o projeto.

Depois, acesse <a href="http://localhost:3000/">http://localhost:3000/</a> no seu navegador.

## 📚 Mais informações do curso

Busque na plataforma da Alura o curso **Integrando seu projeto React com APIs** publicado na Escola Frontend.