import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoRestaurantes from './paginas/Administracao/Restaurantes/AdministracaoRestaurantes';
import FormCriarRestaurante from './paginas/Administracao/FormCriarRestaurante';
import BaseAdministracao from './paginas/Administracao/BaseAdministracao';
import AdministracaoPratos from './paginas/Administracao/Pratos/AdministracaoPratos';
import FormCriarPrato from './paginas/Administracao/Pratos/FormCriarPrato';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path='/adm' element={<BaseAdministracao />}>
        <Route path="/adm/restaurantes" element={<AdministracaoRestaurantes />} />
        <Route path="/adm/restaurantes/novo" element={<FormCriarRestaurante />} />
        <Route path="/adm/restaurantes/:id" element={<FormCriarRestaurante />} />
        <Route path="/adm/pratos/" element={< AdministracaoPratos />} />
        <Route path="/adm/pratos/novo" element={< FormCriarPrato />} />
      </Route>
    </Routes>
  );
}

export default App;
