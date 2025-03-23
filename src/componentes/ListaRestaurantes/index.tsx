import { useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import IPaginacao from '../../interfaces/IPaginacao';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import { httpV1Restaurantes } from '../../http';
import { Box, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';

interface IRetornoRenomeado {
  quantidade: number;
  listaRestaurantes: IRestaurante[];
  proximaPagina: string;
  paginaAnterior: string
}

const ListaRestaurantes = () => {
  const [retorno, setRetorno] = useState<IRetornoRenomeado>({
    quantidade: 0,
    listaRestaurantes: [],
    proximaPagina: '',
    paginaAnterior: ''
  })

  const [restaurantePesquisado, setRestaurantePesquisado] = useState<string>('')
  const [ordem, setOrdem] = useState<string>('nome')

  function getRestaurantes(
    buscar?: string): void {
    httpV1Restaurantes.get<IPaginacao<IRestaurante>>('', {
      params: {
        search: buscar,
        ordering: ordem
      }
    })
      .then(response => {
        const { count, results, previous, next } = response.data
        setRetorno({
          quantidade: count,
          listaRestaurantes: results,
          proximaPagina: next,
          paginaAnterior: previous
        })
      })
      .catch(error => console.error(error))
      .finally(() => console.log("getRestaurantes executado"))
  }

  function pesquisaRestaurante() {
    getRestaurantes(restaurantePesquisado)
  }

  useEffect(() => {
    getRestaurantes()
  }, [])

  return (<section className={style.ListaRestaurantes}>
    <Box style={{ marginBottom: 30, display: "flex", gap: 3 }}>
      <TextField style={{ width: 400 }} id="outlined-basic" label="Pesquise Restaurantes" variant="outlined" onChange={e => { setRestaurantePesquisado(e.target.value) }} />
      <Box>
        <InputLabel id="select-label">Ordenar Por:</InputLabel>
        <Select
          id="select-label"
          label="Ordenar Por:"
          defaultValue={"nome"}
          value={ordem}
          onChange={(e) => setOrdem(e.target.value)}
        >
          <MenuItem value={"id"}>Mais Antigo</MenuItem>
          <MenuItem value={"nome"}>Nome</MenuItem>
        </Select>
      </Box>
      <Button style={{ marginLeft: 30, marginTop: 10 }} variant='outlined' color='primary' onClick={pesquisaRestaurante}>Pesquisar</Button>
    </Box>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {retorno.listaRestaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
    <Button variant='contained' color='primary'
      onClick={() => { getRestaurantes(retorno.paginaAnterior) }}
      disabled={!retorno.paginaAnterior}>
      Anterior
    </Button>
    <Button variant='contained' color='secondary'
      onClick={() => { getRestaurantes(retorno.proximaPagina) }}
      disabled={!retorno.proximaPagina}>
      Próxima
    </Button>
  </section>)
}

export default ListaRestaurantes