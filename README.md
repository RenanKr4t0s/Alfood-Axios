# 🍽️ Alfood

O **Alfood** é um site que lista restaurantes e pratos do menu.  
É um MVP que está só começando e ainda tem muitas funcionalidades novas para serem desenvolvidas. 🚀

![Integrando seu projeto React com APIs](thumbnail.png)

---

## 📚 Sobre esse projeto

Esse projeto foi desenvolvido a partir do curso _[Curso Integrando seu projeto React com APIs](https://cursos.alura.com.br/course/react-integrando-projeto-react-apis)_ da Alura.

O desafio foi transformar um site estático para consumir e editar dados de um backend, utilizando boas práticas e ferramentas modernas.

---

## 📝 Minhas notas

### 🎯 Objetivo

- Trabalhar mais profundamente com o **axios** e entender sua estrutura e forma assíncrona de utilização no React.

### ✨ Coisas legais que aprendi

- Utilizar uma imagem do **Docker** para rodar o backend enquanto trabalhava no front-end. 🐳
- Como funciona o **Swagger** na API (Swagger-UI - Express). 🔧
- Refatorar componentes para centralizar estados e funções, como no caso do `ListaRestaurantes`. 🛠️
- Criar formulários dinâmicos com `FormData` e o tipo `multipart/form-data`. 📤
- Utilizar o **React-Router-Dom** e o hook `useParams` para obter informações diretamente das rotas. 🔍

### 📚 Lembrando detalhes

- **Spread operator + Spread operator**  
  `setRestaurantes([...restaurantes, ...response.data.results])`

- **Passar um Tipo em uma Interface:**  
  `axios.get<IPaginacao<IRestaurante>>(...)`  
  `interface IPaginacao<T> {... results: T[]}`

### 🎨 Utilizando Material UI

- [Instalação pela Documentação](https://mui.com/material-ui/getting-started/installation/)  
  Biblioteca de estilos da aplicação.  
  Utilizamos bastante as [Tabelas](https://mui.com/material-ui/react-table/) no componente _AdministracaoRestaurantes_.

### ⚠️ Problemas no caminho

- O curso usava a versão 1 do Docker Compose, mas o novo padrão é a versão 2  
  (comandos um pouco diferentes são utilizados). 🐳

---

## 🔨 Funcionalidades do projeto

O Alfood começa com uma listagem estática de seu conteúdo e é esse o problema que queremos resolver.  
No decorrer do curso, implementamos toda a camada de comunicação com a API, incluindo:

- Listagem de restaurantes e pratos diretamente do backend.
- Formulários dinâmicos para criar e editar pratos.
- Uso de `Select` para exibir opções vindas do backend.

---

## ✔️ Técnicas e tecnologias utilizadas

Se liga nessa lista de tudo que usamos nesse treinamento:

- `React`
- `React Hooks`
- `TypeScript`
- `axios`
- `Material-UI`
- `Docker`
- `Swagger`

---

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/alfood.git
   ```
2. Acesse o diretório do projeto:
   ```bash
      cd alfood
   ```
3. Instale as dependências do front-end:
   ```bash
      npm install
   ```
4. Inicie o projeto:
   ```bash
      npm start
   ```
5. **Instale o Docker (se ainda não estiver instalado):**

   - Siga as instruções oficiais para instalar o Docker na sua máquina:  
     [Instalação do Docker](https://docs.docker.com/get-docker/)

6. **Configure o backend:**

   - O backend utilizado neste projeto está disponível no curso da Alura. Você precisará copiar o arquivo `docker-compose.yml` fornecido no curso para rodar o backend localmente.
   - Após obter o arquivo, execute o comando abaixo no terminal para iniciar o backend:
     ```bash
     docker-compose up
     ```

7. **Acesse o projeto no navegador:**
   - Front-end: <a href="http://localhost:3000/">http://localhost:3000/</a>
   - Backend (Swagger): <a href="http://localhost:8000/swagger/">http://localhost:8000/swagger/</a>

---

## 📚 Mais informações do curso

#### Busque na plataforma da Alura o curso **Integrando seu projeto React com APIs** publicado na Escola Frontend.

<img src="screencapture.png" alt="Imagem do Alfood" width="50%">
```
