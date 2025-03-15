import { Button, Container, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const FormCriarRestaurante = () => {

  const [restauranteNome, setRestauranteNome] = useState<string>('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    alert("Foi criado o restaurante: " + restauranteNome)
    axios.post('http://0.0.0.0:8000/api/v2/restaurantes/', { "nome": restauranteNome })
      .then(() => {
        window.location.href = 'http://localhost:3000/adm/restaurantes/'
      })
  }
  return (
    <Container sx={{ marginTop: "100px", width: "400px" }}>
      <Link to="/adm/restaurantes/">Voltar</Link>
      <form onSubmit={handleSubmit} style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 15 }}>
        <TextField variant="filled" id="Nome Usuario"
          onChange={(e) => { setRestauranteNome(e.target.value) }} />
        <Button type="submit" variant="outlined" color="success"> Cadastrar </Button>
      </form>
    </Container>
  )
}

export default FormCriarRestaurante
