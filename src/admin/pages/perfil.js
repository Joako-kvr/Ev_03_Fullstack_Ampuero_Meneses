import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMEnuPrincipal from './components/sidemenu';
import PerfilUsuario from './components/profile';


function Perfil() {
    return(
        <div>
            <NavBarPrincipal/>
            <SideMEnuPrincipal/>
            <PerfilUsuario/>
        </div>
    );
}


export default Perfil;