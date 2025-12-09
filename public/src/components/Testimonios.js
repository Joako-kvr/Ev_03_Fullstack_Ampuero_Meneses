
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const data = [
  { nombre: 'Joaquín, Puente Alto', texto: 'Instalación rápida y ahorro visible en la primera boleta.' },
  { nombre: 'Luis, Las Condes', texto: 'Siento que estos rotos hacen el trabajo regio, regio...' },
  { nombre: 'Carla, Copiapó', texto: 'Excelente asesoría y postventa. 100% recomendado.' },
];

function Testimonios() {
  return (
    <section id="testimonios" className="py-5">
      <Container>
             <Row className="align-items-center mb-4">
                    
                    <Col xs={12} md={6} className='text-start'>
                        <Col xs={12} md={6}>
                        </Col>
                        <h2 className="section-title mb-0">Testimonios</h2>
                    </Col>
                    <Col xs={12} md={6} className="text-md-end text-muted small">
                        Clientes ya confian en HelioAndes
                    </Col>
                </Row>
        <Row className="row-cols-1 row-cols-md-3 g-4">
          {data.map((t, i) => (
            <Col key={i}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="h6">{t.nombre}</Card.Title>
                  <Card.Text className="text-secondary">“{t.texto}”</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
export default  Testimonios;
