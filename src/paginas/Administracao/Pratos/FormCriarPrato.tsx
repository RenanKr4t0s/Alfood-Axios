import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http, { httpPratos, httpRestaurantes } from '../../../http'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import ITag from '../../../interfaces/ITag'
import IRestaurante from '../../../interfaces/IRestaurante'

const FormCriarPrato = () => {
    const [pratoNome, setPratoNome] = useState<string>('')
    const [pratoImagem, setPratoImagem] = useState<File | null>(null)
    const [tags, setTags] = useState<ITag[]>([])
    const [tagSelected, setTagSelected] = useState<string>('')
    const [restauranteSelected, setRestauranteSelected] = useState<string>('')
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
    const parametros = useParams()

    useEffect(() => {
        http.get<{ tags: ITag[] }>('tags/').then(
            response => {
                setTags(response.data.tags)
            }
        )
        httpRestaurantes.get<IRestaurante[]>('').then(
            response => {
                setRestaurantes(response.data)
            }
        )

    }, [parametros])

    function salvarImagem(e: React.ChangeEvent<HTMLInputElement> | null) {
        if (e?.target.files) {
            setPratoImagem(e.target.files[0])
        } else {
            setPratoImagem(null)
        }
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if (parametros.id) {
            httpPratos.put(`${parametros.id}/`, { "nome": pratoNome })
                .then(() => {
                    alert(`${pratoNome} atualizado com sucesso`)
                })
        } else {
            httpPratos.post("", { "nome": pratoNome })
                .then(() => {
                    alert(`${pratoNome} cadastrado com sucesso`)
                })
        }
    }


    return (
        <Paper elevation={6} sx={{ marginTop: "100px", width: "400px", textAlign: "center", padding: 4 }}>
            <Typography mt={2} component="h1" variant="h5">Formulário de Pratos</Typography>
            <form onSubmit={handleSubmit}
                style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 15 }}>
                <TextField variant="filled"
                    color="primary"
                    required
                    placeholder='Nome do Prato'
                    id="Nome do Prato"
                    helperText="Campo obrigatório"
                    value={pratoNome}
                    onChange={(e) => { setPratoNome(e.target.value) }}
                />
                <TextField variant="filled"
                    color="primary"
                    required
                    placeholder='Descrição do prato'
                    id="Descricao"
                    helperText="Campo obrigatório"
                    value={pratoNome}
                    onChange={(e) => { setPratoNome(e.target.value) }}
                />
                <FormControl>
                    <InputLabel id="tag-select">Tipo de Comida</InputLabel>
                    <Select
                        labelId='tag-select'
                        value={tagSelected}
                        onChange={e => { setTagSelected(e.target.value) }}>
                        {tags.map(tag =>
                            <MenuItem key={tag.id} value={tag.id}>{tag.value}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="restaurante-select">Qual Restaurante</InputLabel>
                    <Select
                        labelId='restaurante-select'
                        value={restauranteSelected}
                        onChange={e => { setRestauranteSelected(e.target.value) }}>
                        {restaurantes.map(restaurante =>
                            <MenuItem key={restaurante.id} value={restaurante.id}>{restaurante.nome}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <input type='file' onChange={salvarImagem}
                />
                <Button type="submit" variant="outlined" color="success"> Cadastrar </Button>
            </form>
        </Paper>
    )
}

export default FormCriarPrato