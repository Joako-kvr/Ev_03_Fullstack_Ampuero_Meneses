
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const planes = [
    { title: '3–5 kW', rango: 'Básico', bullets: ['Estudio energético', 'Instalación estándar', 'Monitoreo básico'] },
    { title: '10–15 kW', rango: 'Optimizado', bullets: ['Estudio avanzado', 'Instalación optimizada', 'Monitoreo avanzado'] },
    { title: 'Híbrido + baterías', rango: 'Autónomo', bullets: ['Diseño off‑grid', 'Almacenamiento', 'Soporte preferente'] },
];
function Planes() {
    return (
        <section id="planes" className="py-5">
            <Container>
                <Row className="align-items-center mb-4">

                    <Col xs={12} md={6} className='text-start'>
                        <Col xs={12} md={6}>
                        </Col>
                        <h2 className="section-title mb-0">Planes</h2>
                    </Col>
                    <Col xs={12} md={6} className="text-md-end text-muted small">
                        Elige el plan que se ajusta a tu proyecto
                    </Col>
                </Row>
                <Row className="row-cols-1 row-cols-md-3 g-4">
                    {planes.map((p, i) => (
                        <Col key={i}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body className="text-center">
                                    <span className="badge bg-info-subtle text-info-emphasis mb-2">{p.rango}</span>
                                    <Card.Title>{p.title}</Card.Title>
                                    <ul className="text-secondary list-unstyled p-0 m-0">
                                        {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                                    </ul>

                                    <Button variant="primary">Solicitar evaluación</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Container>
        </section>
    );
}


export default Planes;
