import { useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import IPaginacao from '../../interfaces/IPaginacao';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import axios from 'axios';
import { Button } from '@mui/material';

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [maisRestaurantes, setMaisRestaurantes] = useState<string>("")
  const [proximaPagina, setProximaPagina] = useState<string>('')
  const [paginaAnterior, setPaginaAnterior] = useState<string>('')

  function irParaPagina(destino: string): void {
    axios.get<IPaginacao<IRestaurante>>(destino)
      .then(response => {
        setRestaurantes(response.data.results)
        setPaginaAnterior(response.data.previous)
        setProximaPagina(response.data.next)
      })
  }

  function verMais() {
    axios.get<IPaginacao<IRestaurante>>(maisRestaurantes)
      .then(response => {
        setRestaurantes([...restaurantes, ...response.data.results])
        setMaisRestaurantes(response.data.next)
      })
  }


  useEffect(() => {
    axios.get<IPaginacao<IRestaurante>>('http://0.0.0.0:8000/api/v1/restaurantes/')
      .then(response => {
        setRestaurantes(response.data.results)
        setMaisRestaurantes(response.data.next)
        setProximaPagina(response.data.next)
        setPaginaAnterior(response.data.previous)
        console.log(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() =>
        console.log("requisição finalizada.")
      )
  }, [])

  // const restaurantes: IRestaurante[] = [
  //   {
  //     id: 1,
  //     nome: "Lyllys Cafe",
  //     pratos: [
  //       {
  //         id: 1,
  //         descricao: 'Lasanha à Bolonhesa',
  //         imagem: 'https://receitassaborosa.com/wp-content/uploads/2019/12/Lasanha-com-Molho-a-Bolonhesa.jpg',
  //         nome: 'Lasanha',
  //         restaurante: 1,
  //         tag: 'Italiana'
  //       },
  //       {
  //         id: 2,
  //         descricao: 'Strogonoff de Frango à brasileira',
  //         imagem: 'https://img.itdg.com.br/images/recipes/000/002/462/332854/332854_original.jpg',
  //         nome: 'Strogonoff',
  //         restaurante: 1,
  //         tag: 'Russa'
  //       },
  //       {
  //         id: 3,
  //         descricao: 'Empadão de Frango',
  //         imagem: 'https://t1.uc.ltmcdn.com/pt/images/5/7/1/img_como_fazer_empadao_de_frango_27175_600.jpg',
  //         nome: 'Empadão de Frango',
  //         restaurante: 1,
  //         tag: 'Portuguesa'
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     nome: "Sugiro Sushi",
  //     pratos: [
  //       {
  //         id: 1,
  //         descricao: 'Combinado de 8 peças',
  //         imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
  //         nome: 'Sushi',
  //         restaurante: 1,
  //         tag: 'Japonesa'
  //       },
  //       {
  //         id: 2,
  //         descricao: 'Sashimi de Salmão',
  //         imagem: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/04/sashimi_facil.jpg',
  //         nome: 'Sashimi',
  //         restaurante: 1,
  //         tag: 'Japonesa'
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     nome: "Cantina da Escola",
  //     pratos: [
  //       {
  //         id: 1,
  //         descricao: 'Salgado de queijo com presunto',
  //         imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/102/312/279767/279767_original.jpg',
  //         nome: 'Quejunto',
  //         restaurante: 1,
  //         tag: 'Lanche'
  //       },
  //       {
  //         id: 2,
  //         descricao: 'Coxinha de Frango',
  //         imagem: 'https://t1.rg.ltmcdn.com/pt/posts/1/9/1/coxinha_simples_191_600.jpg',
  //         nome: 'Coxinha',
  //         restaurante: 1,
  //         tag: 'Lanche'
  //       },
  //       {
  //         id: 3,
  //         descricao: 'Risole de Palmito',
  //         imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/005/116/323871/323871_original.jpg',
  //         nome: 'Risole',
  //         restaurante: 1,
  //         tag: 'Lanche'
  //       }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     nome: "Carambola e Feijoada",
  //     pratos: [
  //       {
  //         id: 1,
  //         descricao: 'Brigadeiro com carambola',
  //         imagem: 'https://www.academiaassai.com.br/sites/default/files/styles/noticia_1020x640/public/dicas-valiosas-para-empreendedores-transforme-a-feijoada-em-um-sucesso-de_vendas-no-inverno.jpg?itok=gSaZgBhZ',
  //         nome: 'CaramBriga',
  //         restaurante: 1,
  //         tag: 'Lanche'
  //       },
  //       {
  //         id: 2,
  //         descricao: 'Coxinha de Carambola',
  //         imagem: 'https://www.academiaassai.com.br/sites/default/files/styles/noticia_1020x640/public/dicas-valiosas-para-empreendedores-transforme-a-feijoada-em-um-sucesso-de_vendas-no-inverno.jpg?itok=gSaZgBhZ',
  //         nome: 'Caranxinha',
  //         restaurante: 1,
  //         tag: 'Lanche'
  //       },
  //       {
  //         id: 3,
  //         descricao: 'Risole de compota',
  //         imagem: 'https://www.academiaassai.com.br/sites/default/files/styles/noticia_1020x640/public/dicas-valiosas-para-empreendedores-transforme-a-feijoada-em-um-sucesso-de_vendas-no-inverno.jpg?itok=gSaZgBhZ',
  //         nome: 'Composole',
  //         restaurante: 1,
  //         tag: 'Lanche'
  //       },        {
  //         id: 3,
  //         descricao: 'Xis Feijoada na Grelha',
  //         imagem: 'https://www.academiaassai.com.br/sites/default/files/styles/noticia_1020x640/public/dicas-valiosas-para-empreendedores-transforme-a-feijoada-em-um-sucesso-de_vendas-no-inverno.jpg?itok=gSaZgBhZ',
  //         nome: 'X-Fejuca',
  //         restaurante: 1,
  //         tag: 'Lanche'
  //       }
  //     ]
  //   }
  // ]

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
    <Button variant='contained' color='primary'
      onClick={() => { irParaPagina(paginaAnterior) }}
      disabled={!paginaAnterior}>
      Anterior
    </Button>
    <Button variant='contained' color='secondary'
      onClick={() => { irParaPagina(proximaPagina) }}
      disabled={!proximaPagina}>
      Próxima
    </Button>
  </section>)
}

export default ListaRestaurantes