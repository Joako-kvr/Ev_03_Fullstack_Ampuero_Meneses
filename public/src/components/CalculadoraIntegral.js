import React from 'react';
import { useState } from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import Table from 'react-bootstrap/Table';


function CalculadoraPrincipal() {

    const CLP = (n) => `$ ${Math.round(n).toLocaleString("es-CL")}`;

    const [potenciaPanel, setPotenciaPanel] = useState(0);
    const [cantidadPaneles, setCantidadPaneles] = useState(0);
    const [inversorPrecio, setInversorPrecio] = useState(0);
    const [bateriaPrecio, setBateriaPrecio] = useState(0);
    const [cantidadBaterias, setCantidadBaterias] = useState(0);
    const [estrucCableado, setEstrucCableado] = useState(0);
    const [instalacionBase, setInstalacionBase] = useState(0);
    const [pesoEnvio, setPesoEnvio] = useState(0);

    const [tipoTecho, setTipoTecho] = useState("");
    const porcentajeTipoTecho = { 1: 0.05, 2: 0.02, 3: 0.07 };
    const valorTipoTecho = porcentajeTipoTecho[Number(tipoTecho)] || 0;

    const [region, setRegion] = useState("");
    const porcentajeRegion = { 1: 5000, 2: 9000, 3: 10000, 4: 15000 };
    const valorRegion = porcentajeRegion[Number(region)] || 0;

    const [complejidadInstalacion, setComplejidadInstalacion] = useState("");
    const porcentajeComplejidadInstalacion = { 1: 0, 2: 0.08, 3: 0.15 };
    const valorComplejidadInstalacion = porcentajeComplejidadInstalacion[Number(complejidadInstalacion)] || 0;

    const [subsidio, setSubsidio] = useState("");
    const porcentajeSubsidio = { 1: 0, 2: 0.08, 3: 0.05 };
    const valorSubsidio = porcentajeSubsidio[Number(subsidio)] || 0;

    const [metodoEnvio, setMetodoEnvio] = useState("");
    const porcentajeMetodoEnvio = { 1: 1, 2: 1.2 };
    const valorMetodoEnvio = porcentajeMetodoEnvio[Number(metodoEnvio)] || 0;

    const [garantia, setGarantia] = useState("");
    const porcentajeGarantia = { 1: 0.02, 2: 0.04, 3: 0.06 };
    const valorGarantia = porcentajeGarantia[Number(garantia)] || 0;

    const [planPago, setPlanPago] = useState("");
    const porcentajePlanPago = { 1: 0, 2: 0.012, 3: 0.011, 4: 0.01 };
    const valorPlanPago = porcentajePlanPago[Number(planPago)] || 0;
    const cantidadPlanPago = { 1: 1, 2: 6, 3: 12, 4: 24 };
    const valorCantidadPlanPago = cantidadPlanPago[Number(planPago)] || 0;

    const [tipoPie, setTipoPie] = useState("");

    const [valorPie, setValorPie] = useState(0);

    const valorPanelSolar = parseInt(2500000)

    const potenciaEstimada = (potenciaPanel * cantidadPaneles) / 1000;
    const subtotalEquipos = ((parseInt(valorPanelSolar) * parseInt(cantidadPaneles)) + parseInt(inversorPrecio) + (parseInt(bateriaPrecio) * parseInt(cantidadBaterias)) + parseInt(estrucCableado))
    const recargoTecho = subtotalEquipos * valorTipoTecho
    const montoSubsidio = subtotalEquipos * valorSubsidio
    const instalacionFinal = (parseInt(instalacionBase) + (subtotalEquipos * valorComplejidadInstalacion))
    const montoIva = (subtotalEquipos + recargoTecho - montoSubsidio + instalacionFinal) * 0.19
    const montoEnvio = (valorRegion + parseInt(pesoEnvio * 700)) * valorMetodoEnvio
    const montoGarantia = subtotalEquipos * valorGarantia
    const totalAnteFinan = (subtotalEquipos + recargoTecho - montoSubsidio + instalacionFinal) + montoIva + montoEnvio + montoGarantia
    const montoPie = tipoPie == 1 ? totalAnteFinan * (valorPie / 100) : tipoPie == 2 ? valorPie : 0;
    const montoInteresTotal = (totalAnteFinan - montoPie) * valorPlanPago
    const montoCuota = valorCantidadPlanPago > 0 ? Math.round((montoInteresTotal + (totalAnteFinan - montoPie)) / valorCantidadPlanPago) : 0;
    const total = totalAnteFinan - montoPie + montoInteresTotal

    const buildResumen = () => {
        const lineas = [
            `Potencia estimada: ${Number.isFinite(potenciaEstimada) ? potenciaEstimada.toLocaleString('es-CL') : '—'} kW`,
            `Subtotal equipos: ${CLP(subtotalEquipos)}`,
            `Recargo techo: ${CLP(recargoTecho)}`,
            `Subsidio: ${CLP(montoSubsidio)}`,
            `Instalación final: ${CLP(instalacionFinal)}`,
            `IVA 19%: ${CLP(montoIva)}`,
            `Envío: ${CLP(montoEnvio)}`,
            `Garantía: ${CLP(montoGarantia)}`,
            `Total antes de financiar: ${CLP(totalAnteFinan)}`,
            `Pie: ${CLP(montoPie)}`,
            `Interés total: ${CLP(montoInteresTotal)}`,
            `Cuotas: ${valorCantidadPlanPago || '—'}`,
            `Cuota mensual: ${valorCantidadPlanPago > 0 ? CLP(montoCuota) : '—'}`,
            `Total final: ${CLP(total)}`
        ];
        return lineas.join('\n');
    };

    const copiarResumen = async () => {
        const texto = buildResumen();
        try {
            await navigator.clipboard.writeText(texto);
        } catch (err) {
            const ta = document.createElement('textarea');
            ta.value = texto;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
    };

    return (
        <div className='row justify-content-center' id="demo-calculadora">
            <div className='row justify-content-center'>
                <div className='col-lg-10 text-left'>
                    <h2>DEMO calculadora</h2>
                </div>
            </div>

            <div className='col-lg-5'>

                <div className='justify-content-center'>
                    <div className='bg-white p-3 rounded'>
                        <h4>Formulario</h4>

                        {/* primera row */}
                        <div className="row">

                            <div className='col-lg-6'>
                                <label className='form-label ' htmlFor='potenciaPanel'>Potencia del panel (W)</label>
                                <input id='potenciaPanel' name='potenciaPanel' placeholder='1000000' type='number' className='form-control' value={potenciaPanel} onChange={(e) => setPotenciaPanel(e.target.value)}></input>
                            </div>

                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='cantidadPaneles'>Cantidad Paneles</label>
                                <input id='cantidadPaneles' name='cantidadPaneles' placeholder='10' type='number' className='form-control' value={cantidadPaneles} onChange={(e) => setCantidadPaneles(e.target.value)}></input>

                            </div>
                        </div>
                        {/* segunda row */}
                        <div className="row mt-3">

                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='inversorPrecio'>Inversor (precio)</label>
                                <input id='inversorPrecio' name='inversorPrecio' placeholder='1000000' type='number' className='form-control' value={inversorPrecio} onChange={(e) => setInversorPrecio(e.target.value)}></input>
                            </div>

                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='bateriaPrecio'>Batería (precio unidad)</label>
                                <input id='bateriaPrecio' name='bateriaPrecio' placeholder='1000000' type='number' className='form-control' value={bateriaPrecio} onChange={(e) => setBateriaPrecio(e.target.value)}></input>

                            </div>
                        </div>

                        {/* tercera row */}
                        <div className="row mt-3">

                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='cantidadBaterias'>Cantidad Baterías</label>
                                <input id='cantidadBaterias' name='cantidadBaterias' placeholder='10' type='number' className='form-control' value={cantidadBaterias} onChange={(e) => setCantidadBaterias(e.target.value)}></input>
                            </div>

                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='estrucCableado'>Estruc./cableado</label>
                                <input id='estrucCableado' name='estrucCableado' placeholder='1000000' type='number' className='form-control' value={estrucCableado} onChange={(e) => setEstrucCableado(e.target.value)}></input>

                            </div>
                        </div>

                        {/* cuarta row */}
                        <div className="row mt-3">

                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='instalacionBase'>Instalación Base</label>
                                <input id='instalacionBase' name='instalacionBase' placeholder='1000000' type='number' className='form-control' value={instalacionBase} onChange={(e) => setInstalacionBase(e.target.value)}></input>
                            </div>

                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='pesoEnvio'>Peso envío (kg)</label>
                                <input id='pesoEnvio' name='pesoEnvio' placeholder='1000' type='number' className='form-control' value={pesoEnvio} onChange={(e) => setPesoEnvio(e.target.value)}></input>

                            </div>
                        </div>

                        {/* quinta  row con despliegue*/}
                        <div className="row mt-3">

                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='tipoTecho'>Tipo de techo</label>
                                <select className='form-select' id='tipoTecho' name='tipoTecho' value={tipoTecho} onChange={(e) => setTipoTecho(e.target.value)}>
                                    <option>Seleccione Opción</option>
                                    <option value={1}>Teja/Asfalto → recargo +5%</option>
                                    <option value={2}>Zinc/Planchas → recargo +2%</option>
                                    <option value={3}>Hormigón → recargo +7%</option>
                                </select>
                            </div>
                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='region'>Región (para envío)</label>
                                <select className='form-select' id='region' name='region' value={region} onChange={(e) => setRegion(e.target.value)}>
                                    <option>Seleccione Opción</option>
                                    <option value={1}>RM: base $5.000</option>
                                    <option value={2}>Norte: base $9.000</option>
                                    <option value={3}>Sur: base $10.000
                                    </option>
                                    <option value={4}>Austral: base $15.000</option>
                                </select>
                            </div>

                        </div>

                        {/* sexta  row con despliegue*/}
                        <div className="row mt-3">

                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='complejidadInstalacion'>Complejidad instalación</label>
                                <select className='form-select' id='complejidadInstalacion' name='complejidadInstalacion' value={complejidadInstalacion} onChange={(e) => setComplejidadInstalacion(e.target.value)}>
                                    <option>Seleccione Opción</option>
                                    <option value={1}>Baja → 0% adicional
                                    </option>
                                    <option value={2}>Media → +8% sobre instalación base</option>
                                    <option value={3}>Alta → +15% sobre instalación base</option>
                                </select>
                            </div>
                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='subsidio'>Subsidio Referencial</label>
                                <select className='form-select' id='subsidio' name='subsidio' value={subsidio} onChange={(e) => setSubsidio(e.target.value)}>
                                    <option>Seleccione Opción</option>
                                    <option value={1}>Sin subsidio → 0%</option>
                                    <option value={2}>Residencial → −8% sobre subtotal equipos</option>
                                    <option value={3}>Pyme → −5% sobre subtotal equipos</option>
                                </select>
                            </div>

                        </div>

                        {/* septima  row con despliegue*/}
                        <div className="row mt-3">

                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='metodoEnvio'>Método de envío</label>
                                <select className='form-select' id='metodoEnvio' name='metodoEnvio' value={metodoEnvio} onChange={(e) => setMetodoEnvio(e.target.value)}>
                                    <option>Seleccione Opción</option>
                                    <option value={1}>Estándar → 0%</option>
                                    <option value={2}>Exprés → 20%</option>
                                </select>
                            </div>
                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='garantia'>Garantía</label>
                                <select className='form-select' id='garantia' name='garantia' value={garantia} onChange={(e) => setGarantia(e.target.value)}>
                                    <option>Seleccione Opción</option>
                                    <option value={1}>12 meses → +2% subtotal equipos</option>
                                    <option value={2}>24 meses → +4% subtotal equipos</option>
                                    <option value={3}>36 meses → +6% subtotal equipos</option>

                                </select>
                            </div>

                        </div>

                        {/* octava  row con despliegue*/}
                        <div className="row mt-3">

                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='planPago'>Plan de Pago</label>
                                <select className='form-select' id='planPago' name='planPago' value={planPago} onChange={(e) => setPlanPago(e.target.value)}>
                                    <option>Seleccione Opción</option>
                                    <option value={1}>Contado → tasa 0, cuotas 1</option>
                                    <option value={2}>6 cuotas → 1.2% mensual</option>
                                    <option value={3}>12 cuotas → 1.1% mensua</option>
                                    <option value={4}>24 cuotas → 1.0% mensual</option>
                                </select>
                            </div>
                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='tipoPie'>Tipo de pie</label>
                                <select className='form-select' id='tipoPie' name='tipoPie' value={tipoPie} onChange={(e) => setTipoPie(e.target.value)}>
                                    <option>Seleccione Opción</option>
                                    <option value={1}>Porcentaje</option>
                                    <option value={2}>Monto fijo</option>
                                </select>
                            </div>

                        </div>

                        {/* novena  row con despliegue*/}
                        <div className="row mt-3">
                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='valorPie'>Valor de pie</label>
                                <input id='valorPie' name='valorPie' placeholder='1000000' type='number' className='form-control' value={valorPie} onChange={(e) => {
                                    const nuevoValor = Number(e.target.value);
                                    if (tipoPie == 1) {
                                        if (nuevoValor > 100) {
                                            setValorPie(100);
                                        } else {
                                            setValorPie(nuevoValor);
                                        }
                                    } else {
                                        if (nuevoValor > totalAnteFinan) {
                                            setValorPie(totalAnteFinan);
                                        } else {
                                            setValorPie(nuevoValor);
                                        }
                                    }
                                }}>

                                </input>
                                <p className="text-muted small">Si es porcentaje, 10 = 10%</p>
                            </div>


                        </div>






                        <div className='form-group mt-3'>
                            <a className='btn btn-outline-dark' onClick={(e) => {

                                setPotenciaPanel(0);
                                setCantidadPaneles(0);
                                setInversorPrecio(0);
                                setBateriaPrecio(0);
                                setCantidadBaterias(0);
                                setEstrucCableado(0);
                                setInstalacionBase(0);
                                setPesoEnvio(0);

                                setTipoTecho("");
                                setRegion("");
                                setComplejidadInstalacion("");
                                setSubsidio("");
                                setMetodoEnvio("");
                                setGarantia("");
                                setPlanPago("");
                                setTipoPie("");

                                setValorPie(0);
                            }} ><i class="fa-solid fa-poo"></i> Reiniciar </a>

                            <a className='btn btn-outline-dark ms-3' onClick={copiarResumen} ><i class="fa-solid fa-poo"></i> Copiar Resumen </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className='col-lg-5'>

                <div className='bg-white p-3 rounded'>
                    <h4>Resumen</h4>
                    <Table striped bordered hover>

                        <tbody>
                            <tr>

                                <td>Potencia Estimada (kW)</td>
                                <td>{potenciaEstimada.toLocaleString()}</td>
                            </tr>
                            <tr>

                                <td>Subtotal Equipos</td>
                                <td>$ {subtotalEquipos.toLocaleString()}</td>
                            </tr>
                            <tr>

                                <td>Recargo techo</td>
                                <td>$ {recargoTecho.toLocaleString()}</td>
                            </tr>
                            <tr>

                                <td>Subsidio</td>
                                <td>$ {montoSubsidio.toLocaleString()}</td>
                            </tr>

                            <tr>

                                <td>Instalación final</td>
                                <td>$ {instalacionFinal.toLocaleString()}</td>
                            </tr>
                            <tr>

                                <td>IVA 19%</td>
                                <td>$ {montoIva.toLocaleString()}</td>
                            </tr>
                            <tr>

                                <td>Envío</td>
                                <td>$ {montoEnvio.toLocaleString()}</td>
                            </tr>
                            <tr>

                                <td>Garantía</td>
                                <td>$ {montoGarantia.toLocaleString()}</td>
                            </tr>
                            <tr>

                                <td>Total antes de financiar</td>
                                <td>$ {totalAnteFinan.toLocaleString()}</td>
                            </tr>
                            <tr>

                                <td>Pie</td>
                                <td>$ {montoPie.toLocaleString()}</td>

                            </tr>
                            <tr>

                                <td>Interés total</td>
                                <td>$ {montoInteresTotal.toLocaleString()}</td>
                            </tr>
                            <tr>

                                <td>Cuota</td>
                                <td>$ {montoCuota.toLocaleString()}</td>
                            </tr>

                            <tr className="fw-bold text-dark">

                                <td>Total final</td>
                                <td>$ {total.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>


        </div>

    );

}


export default CalculadoraPrincipal;