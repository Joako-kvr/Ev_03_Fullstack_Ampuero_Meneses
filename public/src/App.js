import './App.css';
import LoginAdmin from './admin/pages/LoginAdministrador';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './admin/pages/dashboard';


function App() {
  return (


    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/loginAdmin' element={<LoginAdmin />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path="/servicios/:id" element={<DetalleServicio />} />
      </Routes>
    </Router>


  );
}

export default App;
