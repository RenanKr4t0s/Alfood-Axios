import { Outlet, Link as RouterLink } from 'react-router-dom'
import {
    Button,
    Container,
    Paper,
    Link,
    AppBar
} from '@mui/material'



const BaseAdministracao = () => {
    return (
        <>
            <AppBar>
                <Container sx={{
                    display: "flex",
                    gap: "30px",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    width: "90%",
                    padding: "13px",
                    alignItems: "center"
                }}>
                    <Paper elevation={3} sx={{ display: 'flex', padding: 1, justifyContent: "space-evenly", width: 900 }}>
                        <Link component={RouterLink} to="/adm/restaurantes/novo"><Button variant='contained' color='secondary'>Novo Restaurante</Button></Link>
                        <Link component={RouterLink} to="/adm/restaurantes/"><Button variant='contained' color='secondary'>Gerenciar Restaurantes</Button></Link>
                        <Link component={RouterLink} to="/adm/pratos/novo"><Button variant='contained' color='secondary'>Novo Prato</Button></Link>
                        <Link component={RouterLink} to="/adm/pratos/"><Button variant='contained' color='secondary'>Gerenciar Pratos</Button></Link>
                        <Link component={RouterLink} to="/"><Button variant='contained' color='secondary'>Home</Button></Link>
                    </Paper>
                </Container>
            </AppBar>
            <Container sx={{ marginTop: "100px", width: "600px" }}>
                <Outlet />
            </Container>
        </>
    )
}

export default BaseAdministracao
