import './App.css';
import LoginAdmin from './admin/pages/LoginAdministrador';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './admin/pages/dashboard';
import DetalleServicio from './admin/components/detalleServicio';
import ListaServicios from './admin/components/lista_servicios';
import DetallePlanes from './admin/components/detallePlanes';
import ListaPlanes from './admin/components/lista_planes';

function App() {
  return (


    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/loginAdmin' element={<LoginAdmin />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/servicios' element={<ListaServicios />} />
        <Route path="/dashboard/servicios/:id" element={<DetalleServicio />} />
        <Route path='/dashboard/planes' element={<ListaPlanes />} />
        <Route path="/dashboard/planes/:id" element={<DetallePlanes />} />
      </Routes>
    </Router>


  );
}

export default App;
