import { Routes, Route} from 'react-router-dom';
import PaginaInicial from '../Pages/Pagina-inicial';
import Menu from '../Components/Menu/Menu';
import QuemSomos from '../Pages/Quem-somos';
import NossasMarcas from '../Pages/Nossas-Marcas';
import FaleConosco from '../Pages/Fale-conosco';
export default function Navigation() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaInicial />}></Route>
        <Route path="/quemsomos" element={<QuemSomos />}></Route>
        <Route path="/nossasmarcas" element={<NossasMarcas />}></Route>
        <Route path="/faleconosco" element={<FaleConosco />}></Route>
      </Routes>
    </>
  );
}
