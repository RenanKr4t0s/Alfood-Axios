import { useEffect, useState } from 'react'
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
import IRestaurante from '../../../interfaces/IRestaurante'
import { httpRestaurantes } from '../../../http'

const AdministracaoRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
    const [deleteMade, setDeleteMade] = useState<boolean>(false)

    useEffect(() => {
        httpRestaurantes.get('')
            .then(response => setRestaurantes(response.data))
        return (
            setDeleteMade(false)
        )
    }, [deleteMade])

    function deletarItem(restaurante: IRestaurante): void {
        const queroDeletar = window.confirm(`Tem certeza que quer deletar ${restaurante.nome}?`)
        if (queroDeletar) {
            httpRestaurantes.delete(`${restaurante.id}/`);
            setDeleteMade(true)
            window.alert("Restaurante excluido com sucesso!")
        } else {
            window.alert("Restaurante não foi deletado")
        }
    }
    function changeFiltrar(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        httpRestaurantes.get('', {
            params: {
                search: e.target.value
            }
        })
            .then((response) => {
                setRestaurantes(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <Container sx={{ marginTop: "100px", width: "600px" }}>
            <Paper elevation={3} sx={{ display: 'flex', padding: 1, margin: 3 }}>
                <TextField sx={{ width: 400 }}
                    id="filtrar" size='small' color="secondary" label="Filtrar" onChange={changeFiltrar} />
            </Paper>
            <TableContainer component={Paper} elevation={4}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Restaurante:</TableCell>
                            <TableCell align='center'>Editar</TableCell>
                            <TableCell align='center'>Ver Pratos</TableCell>
                            <TableCell align='center'>Deletar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {restaurantes.map((restaurante) => {
                            return (
                                <TableRow key={restaurante.id}>
                                    <TableCell> {restaurante.nome}</TableCell>
                                    <TableCell align='center'>
                                        <Link component={RouterLink} to={`/adm/restaurantes/${restaurante.id}`}>
                                            <Button variant='outlined' color='success'>
                                                EDIT
                                            </Button>
                                        </Link>
                                    </TableCell>
                                    <TableCell align='center'> (O) </TableCell>
                                    <TableCell align='center'>
                                        <Button variant='outlined' color='error' onClick={() => deletarItem(restaurante)}>DEL</Button>
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

export default AdministracaoRestaurantes
