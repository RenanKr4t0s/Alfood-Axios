import { useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import IPaginacao from '../../interfaces/IPaginacao';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import axios from 'axios';
import { Button, TextField } from '@mui/material';

interface IRetornoRenomeado{
  quantidade: number;
  listaRestaurantes: IRestaurante[];
  proximaPagina: string;
  paginaAnterior: string
}

const ListaRestaurantes = () => {
  const [retorno, setRetorno] = useState<IRetornoRenomeado>({
    quantidade:0,
    listaRestaurantes: [],
    proximaPagina: '',
    paginaAnterior: ''
  })
  
  const [restaurantePesquisado, setRestaurantePesquisado] = useState<string>('')

  function getRestaurantes(
    url: string = "http://localhost:8000/api/v1/restaurantes/",
    buscar?: string): void {
    axios.get<IPaginacao<IRestaurante>>(url, {
      params: {
        search: buscar
      }
    })
      .then(response=>{
        const {count, results, previous, next} = response.data
        setRetorno({
          quantidade:count,
          listaRestaurantes: results,
          proximaPagina: next,
          paginaAnterior: previous
        })
      })
      .catch(error => console.error(error))
      .finally(() => console.log("getRestaurantes executado"))
  }

  function pesquisaRestaurante() {
    getRestaurantes(undefined , restaurantePesquisado)
  }

  useEffect(() => {
    getRestaurantes()
  }, [])

  return (<section className={style.ListaRestaurantes}>
    <div style={{ marginBottom: 30 }}>
      <TextField style={{ width: 500 }} id="outlined-basic" label="Pesquise Restaurantes" variant="outlined" onChange={e => { setRestaurantePesquisado(e.target.value) }} />
      <Button style={{ marginLeft: 30, marginTop: 10 }} variant='outlined' color='primary' onClick={pesquisaRestaurante}>Pesquisar</Button>
    </div>
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