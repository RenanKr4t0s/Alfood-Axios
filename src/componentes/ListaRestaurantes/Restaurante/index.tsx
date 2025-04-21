import { useEffect, useState } from 'react';
import IRestaurante from '../../../interfaces/IRestaurante';
import Prato from '../Prato';
import estilos from './Restaurante.module.scss';
import axios from 'axios';
import IPPrato from '../../../interfaces/IPPrato';

interface RestauranteProps {
  restaurante: IRestaurante
}

const Restaurante = ({ restaurante }: RestauranteProps) => {
  const [listaPratros, setListaPratos] = useState<IPPrato[] | null>();

  useEffect(() => {
    axios.get<IPPrato[]>(`http://0.0.0.0:8000/api/v1/restaurantes/${restaurante.id}/pratos/`)
      .then(response => {
        setListaPratos(response.data)
      })
      .catch(error => console.log(error))
  }, [restaurante])

  return (<section className={estilos.Restaurante}>
    <div className={estilos.Titulo}>
      <h2>{restaurante.nome}</h2>
    </div>
    <div>
      {listaPratros?.map(item => <Prato prato={item} key={item.id} />)}
    </div>
  </section>)
}

export default Restaurante