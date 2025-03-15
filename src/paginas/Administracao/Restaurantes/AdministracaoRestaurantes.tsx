import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Container,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@mui/material'
import IRestaurante from '../../../interfaces/IRestaurante'
import axios from 'axios'

const AdministracaoRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(()=>{
        axios.get('http://0.0.0.0:8000/api/v2/restaurantes/')
        .then(response => setRestaurantes(response.data))
    })

    function deletarItem(itemId:number):void{
        axios.delete(`http://0.0.0.0:8000/api/v2/restaurantes/${itemId}/`)
    }


    return (
        <Container sx={{ marginTop: "100px", width:"600px" }}>
            <Link to="/adm/restaurantes/novo">Cadstrar Novo</Link>
            <TableContainer component={Paper}>
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
                        {restaurantes.map((restaurante)=>{
                            return(
                        <TableRow key={restaurante.id}>
                            <TableCell> {restaurante.nome}</TableCell>
                            <TableCell align='center'> (E) </TableCell>
                            <TableCell align='center'> (O) </TableCell>
                            <TableCell align='center'>
                                <Button onClick={()=>deletarItem(restaurante.id)}>XX</Button>
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
