import { Link, Button, Container, TextField, Typography } from "@mui/material"
import { httpRestaurantes } from "../../http"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import IRestaurante from "../../interfaces/IRestaurante"

const FormCriarRestaurante = () => {

  const [restauranteNome, setRestauranteNome] = useState<string>('')

  const parametros = useParams()

  useEffect(() => {
    parametros.id &&
      httpRestaurantes.get<IRestaurante>(`${parametros.id}/`)
        .then(response => setRestauranteNome(response.data.nome))
  }, [parametros])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    if (parametros.id) {
      httpRestaurantes.put(`${parametros.id}/`, { "nome": restauranteNome })
        .then(() => {
          alert(`O nome foi modificado para ${restauranteNome} com sucesso!`)
          window.location.href = 'http://localhost:3000/adm/restaurantes/'
        })
    } else {
      httpRestaurantes.post("", { "nome": restauranteNome })
        .then(() => {
          alert("Foi criado o restaurante: " + restauranteNome)
          window.location.href = 'http://localhost:3000/adm/restaurantes/'
        })
    }
  }
  return (
    <Container sx={{ marginTop: "100px", width: "400px", textAlign: "center" }}>
      <Link href="/adm/restaurantes/">Voltar</Link>
      <Typography mt={2} component="h1" variant="h5">Formulário de Cadastro</Typography>
      <form onSubmit={handleSubmit}
        style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 15 }}>
        <TextField variant="filled"
          color="primary"
          required
          id="Nome Usuario"
          helperText="Campo obrigatório"
          value={restauranteNome}
          onChange={(e) => { setRestauranteNome(e.target.value) }} />
        <Button type="submit" variant="outlined" color="success"> Cadastrar </Button>
      </form>
    </Container>
  )
}

export default FormCriarRestaurante
