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

... useParams um hook do react-router-dom que permite utilizar os parametros da requisição passada para o chamar componente

jeito de passar params para o endpoint.

```js
// mais manual
axios.get <
  IPaginacao <
  IRestaurante >>
    "http://localhost:8000/api/v1/restaurantes/?ordering=nome&search=neo";

//mais organizado
axios.get <
  IPaginacao <
  IRestaurante >>
    ("http://localhost:8000/api/v1/restaurantes/",
    {
      params: {
        ordering: "nome",
        search: "neo",
      },
    });
```

### no ListaRestaurantes

Para tirar o monte de useState refatorei o código colocando tudo em um objeto "retorno"

Também centralizei as funções diferentes de get em uma única função que, dependendo dos parametros passados faz atividades diferentes.

## Aula 04.

### Tapa no Layout

no form
Typography => bom pra títulos

- configurar com doc, tipo h1 cara de h6

Colocou dentro de um BOX

- outro Box com componente form
- full width em tudo
- required

---

### Refatorando o Axios

A url se repete muito, vamos resolver

http/index.ts
criar variável http que inicia uma instancia do axios com a url base feita
