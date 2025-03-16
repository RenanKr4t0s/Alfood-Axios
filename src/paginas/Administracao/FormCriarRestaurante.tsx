import { Button, Container, TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import IRestaurante from "../../interfaces/IRestaurante"

const FormCriarRestaurante = () => {

  const [restauranteNome, setRestauranteNome] = useState<string>('')

  const parametros = useParams()

  useEffect(() => {
    parametros.id &&
      axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`)
        .then(response => setRestauranteNome(response.data.nome))
  }, [parametros])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    if (parametros.id) {
      axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, {"nome":restauranteNome})
      .then(()=>{
        alert(`O nome foi modificado para ${restauranteNome} com sucesso!`)
        window.location.href = 'http://localhost:3000/adm/restaurantes/'
      })
    } else {
      axios.post('http://0.0.0.0:8000/api/v2/restaurantes/', { "nome": restauranteNome })
        .then(() => {
          alert("Foi criado o restaurante: " + restauranteNome)
          window.location.href = 'http://localhost:3000/adm/restaurantes/'
        })
    }
  }
  return (
    <Container sx={{ marginTop: "100px", width: "400px" }}>
      <Link to="/adm/restaurantes/">Voltar</Link>
      <form onSubmit={handleSubmit} style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 15 }}>
        <TextField variant="filled" id="Nome Usuario" value={restauranteNome}
          onChange={(e) => { setRestauranteNome(e.target.value) }} />
        <Button type="submit" variant="outlined" color="success"> Cadastrar </Button>
      </form>
    </Container>
  )
}

export default FormCriarRestaurante
