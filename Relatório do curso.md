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

### Relembrando Htto

Os tipos de retorno na API Rest
1xx para informação
2xx para sucesso
3xx para redirecionamento
4xx para erros de cliente
5xx para demais erros

### Desafio campo Select

Efetuado com sucesso

## Aula 05.

Criar o container para ficar com os itens que já criei
importar Link as RouterLink do router e

- Appbar => position static

  - Container maxWidth=xl
    - Toolbar
      - Typography varh6 Administração
      - Box sx disp flex flexGrow 1
        - Link x2 component={RouterLink} to="rota do link"
          - Button sx my:2 color:white Restaurantes X Novo Restaurante

- Box
  - Container maxWidth lg sx mt:1
    - Paper sx p:2
      - Conteúdo da pg

### Extraindo layout base

agrupar a base do /admin

- Route path /admin element `<PgBaseAdmin>`
  - Por a base com Outlet /
  - Filhos sem /admin (por algum motivo tive que colocar)

## Aula 06 .

- Ainda não iniciado: Pelo visto aqui vem o fazer tudo só que melhor, para os pratos.

### Administração dos pratos

Fazer a estrutura de pratos igual de restaurantes (fez copiar colar para tudo)
Criar link na navbar
Criar rota no router
Adicionar campos da API => nome tag link pra imagem (descrição colocaria tooltip)

- target blank criando um a rel noreferrer
