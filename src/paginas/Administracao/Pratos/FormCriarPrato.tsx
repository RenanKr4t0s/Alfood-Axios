import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { httpPratos } from '../../../http'
import IPPrato from '../../../interfaces/IPPrato'
import { Button, Paper, TextField, Typography } from '@mui/material'

const FormCriarPrato = () => {
    const [pratoNome, setPratoNome] = useState<string>('')
    const parametros = useParams()

    useEffect(() => {
        parametros.id &&
            httpPratos.get<IPPrato>(`${parametros.id}`)
                .then(response => { setPratoNome(response.data.nome) })
    }, [parametros])

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
            <Typography mt={2} component="h1" variant="h5">Criar Prato</Typography>
            <form onSubmit={handleSubmit}
                style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 15 }}>
                <TextField variant="filled"
                    color="primary"
                    required
                    id="Nome do Prato"
                    helperText="Campo obrigatório"
                    value={pratoNome}
                    onChange={(e) => { setPratoNome(e.target.value) }} />
                <TextField variant="filled"
                    color="primary"
                    required
                    id="Descricao"
                    helperText="Campo obrigatório"
                    value={pratoNome}
                // onChange={(e) => { setPratoNome(e.target.value) }} 
                />
                <TextField variant="filled"
                    color="primary"
                    required
                    id="Link de Imagem"
                    helperText="Campo opcional"
                    value={pratoNome}
                // onChange={(e) => { setPratoImagem(e.target.value) }} 
                />
                <Button type="submit" variant="outlined" color="success"> Cadastrar </Button>
            </form>
        </Paper>
    )
}

export default FormCriarPrato