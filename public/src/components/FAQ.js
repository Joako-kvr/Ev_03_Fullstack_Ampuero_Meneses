
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';


function FAQ() {
    return (
        <section id="faq" className="py-5">
            <Container>
                 <Row className="align-items-center mb-4">
                      <Col xs={12} md={6} className='text-start'>
                        <h2 className="section-title m-0">Faq</h2>
                           <Col xs={12} md={6}></Col>
                    </Col>
                    <Col md={6} className="text-md-end text-secondary">
                        Preguntas Frecuentes
                    </Col>
                </Row>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>¿Incluye trámites y certificación?</Accordion.Header>
                        <Accordion.Body>Sí, la instalación es realizada por personal acreditado SEC y contempla la tramitación correspondiente.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>¿Ofrecen financiamiento?</Accordion.Header>
                        <Accordion.Body>Contamos con alternativas de pago en cuotas con tasa referencial que verás en la DEMO de calculadora.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>¿Tiempos de instalación?</Accordion.Header>
                        <Accordion.Body>Entre 2 y 5 días hábiles según complejidad y disponibilidad de equipos.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );
}
export default FAQ;
