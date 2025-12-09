import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMEnuPrincipal from './components/sidemenu';
import ListarUsuarios from './components/lista_usuarios';

function ListadoUsuarios() {
    return (
        <div>
            <NavBarPrincipal/>
            <SideMEnuPrincipal/>
            <ListarUsuarios/>
        </div>
    );


}


export default ListadoUsuarios;