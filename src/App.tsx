import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoRestaurantes from './paginas/Administracao/Restaurantes/AdministracaoRestaurantes';
import FormCriarRestaurante from './paginas/Administracao/FormCriarRestaurante';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/adm/restaurantes" element={<AdministracaoRestaurantes />} />
      <Route path="/adm/restaurantes/novo" element={<FormCriarRestaurante/>} />
    </Routes>
  );
}

export default App;
