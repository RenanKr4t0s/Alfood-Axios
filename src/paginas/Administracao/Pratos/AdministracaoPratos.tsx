import React, { useEffect, useState } from 'react'
import IPrato from '../../../interfaces/IPrato'
import { httpPratos } from '../../../http'
import { Link as RouterLink } from 'react-router-dom'
import {
    Button,
    Container,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    Link,
} from '@mui/material'

const AdministracaoPratos = () => {
    const [pratos, setPratos] = useState<IPrato[]>([])
    const [deleteMade, setDeleteMade] = useState<boolean>(false)

    useEffect(() => {
        httpPratos.get('')
            .then(response => setPratos(response.data))
        return (
            setDeleteMade(false)
        )
    }, [deleteMade])

    function deletarItem(prato: IPrato): void {
        const queroDeletar = window.confirm('Você quer mesmo deletar o prato?')
        if (queroDeletar) {
            httpPratos.delete(`${prato.id}/`);
            setDeleteMade(true)
            window.alert("Prato deletado com sucesso!")
        } else {
            window.alert("Prato não foi deletado")
        }
    }

    function changeFiltrar(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        httpPratos.get('', {
            params: {
                search: e.target.value
            }
        })
            .then((response) => {
                setPratos(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Container sx={{ marginTop: "100px", width: "800px" }}>
            <Paper elevation={3} sx={{ display: 'flex', padding: 1, margin: 3 }}>
                <TextField sx={{ width: 400 }}
                    id="filtrar" size='small' color="secondary" label="Filtrar" onChange={changeFiltrar} />
            </Paper>
            <TableContainer component={Paper} elevation={4}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Prato:</TableCell>
                            <TableCell align='center'>Editar</TableCell>
                            <TableCell align='center'>Tag</TableCell>
                            <TableCell align='center'>Restaurante</TableCell>
                            <TableCell align='center'>Imagem</TableCell>
                            <TableCell align='center'>Deletar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pratos.map((prato) => {
                            return (
                                <TableRow key={prato.id}>
                                    <TableCell>{prato.nome}</TableCell>
                                    <TableCell align='center'>
                                        <Link component={RouterLink} to={`/adm/pratos/${prato.id}`}>
                                            <Button variant='outlined' color='success'>
                                                EDIT
                                            </Button>
                                        </Link>
                                    </TableCell>
                                    <TableCell align='center'>{prato.tag}</TableCell>
                                    <TableCell align='center'>{prato.restaurante}</TableCell>
                                    <TableCell align='center'>
                                        <Link href={`${prato.imagem}`}>
                                            <Button variant='outlined' color='success'>
                                                Ver Imagem
                                            </Button>
                                        </Link>
                                    </TableCell>
                                    <TableCell align='center'>
                                        <Button variant='outlined' color='error' onClick={() => deletarItem(prato)}>DEL</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>


                </Table>
            </TableContainer>
        </Container>
    )
}

export default AdministracaoPratos
