# Sobre esse projeto
Projeto feito a partir do curso *[Curso]* 
O desafio era transformar um site de estático para consumir e editar dados de um backend.

## Porque?
- Para trabalhar mais profundamente com axios e entender sua estrutura e forma assincrona de utilização no React.

## Coisas legais que aprendi
- Utilizar uma imagem do docker para rodar o backend enquanto trabalhando no front
- Como funciona o Swagger na API (Swagger-UI - Express)
## Coisas que é bom exercitar
### Pontos interessantes
spread operator + spread operator
`setRestaurantes([...restaurantes, ...response.data.results])`
Passar um Tipo em uma Interface:
`axios.get<IPaginacao<IRestaurante>>(...)`
`interface IPaginacao<T> {... results: T[]}`

### Utilizando MaterialUI
- [Instalação pela Documentação](https://mui.com/material-ui/getting-started/installation/)
Biblioteca de estilos da aplicação
Utilizamos bem as [Tabelas](https://mui.com/material-ui/react-table/) no componente AdministracaoRestaurantes.
### Detalhes que a gente pega
- Curso na V1 do docker compose, novo padrão V2
    - comandos um pouco diferentes são utilizados.


## doing
- npm i axios
- tryout e execute no swagger
- useEffect no ListaRestaurantes
- fazer um get do axios no useEffect
Fetch XHR - mostra requisições e respostas

INTERFAce IPaginacao .ts com o retorno da response
Generics T (drop drilling de interface)
tipar o get
state de proxima pagina
alimentar

criar button de proxima pagina se tiver ele
function verMais