
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faScrewdriverWrench, faCheck, faToolbox } from '@fortawesome/free-solid-svg-icons';


const items = [
    { title: 'Estudio energético', text: 'Análisis de consumo y propuesta ajustada a tu perfil.', icon: <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" /> },
    { title: 'Instalación certificada SEC', text: 'Ejecutada por personal acreditado y normativa vigente.', icon: <FontAwesomeIcon icon={faScrewdriverWrench} size="2x" /> },
    { title: 'Monitoreo', text: 'Seguimiento de rendimiento y alertas preventivas.', icon: <FontAwesomeIcon icon={faCheck} size="2x" /> },
    { title: 'Mantención', text: 'Planes periódicos para extender la vida del sistema.', icon: <FontAwesomeIcon icon={faToolbox} size="2x" /> },
];


function Servicios() {
    return (
        <section id="servicios" className="py-5">
            <Container>
                  <Row className="align-items-center mb-4">
                    
                    <Col xs={12} md={6} className='text-start'>
                        <Col xs={12} md={6}>
                        </Col>
                        <h2 className="section-title mb-0">Servicios</h2>
                    </Col>
                    <Col xs={12} md={6} className="text-md-end text-muted small">
                        Estudio energetico, instalacion certificada, monitoreo y mantención
                    </Col>
                </Row>
             <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
  {items.map((it, idx) => (
    <Col key={idx}>
      <Card className="h-100 shadow-sm border-0 servicios-card">
        <Card.Body className="p-4">
          <div className="icon-wrapper mb-3">
            {it.icon}
          </div>
          <Card.Title className="fw-semibold mb-1">{it.title}</Card.Title>
          <Card.Text className="text-muted">{it.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

            </Container>
        </section>
    );
}
export default Servicios;

