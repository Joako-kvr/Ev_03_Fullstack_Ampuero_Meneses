
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Hero() {
    return (
        <section className="py-5 pt-5 bg-hero" id="hero">
            <Container>
                <Row className="align-items-center gy-4">
                    <Col xs={12} md={6} className='text-start'>
                    <span className="badge-soft">Energía solar</span>

                        <h1 className="display-5 fw-bold mt-3">Energía solar accesible y confiable para tu hogar o pyme</h1>
                        <p className="text-secondary">Dimensiona tu sistema, conoce el costo estimado y solicita asesoría en minutos. La DEMO te guía con valores referenciales.</p>
                        <div className="d-flex gap-2">
                            <Button variant="primary" href="#demo-calculadora">Ver DEMO</Button>
                            <Button as="a" href="/assets/docs/catalogo_HelioAndes_1.pdf" download variant="outline-secondary">Descargar catálogo</Button>

                        </div>
                    </Col>

                    <Col xs={12} md={6} className="text-md-end">
                        <img src="/assets/images/panel_solar.png" alt="Panel solar" className="img-fluid"
                            style={{ maxWidth: '90%' }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;
