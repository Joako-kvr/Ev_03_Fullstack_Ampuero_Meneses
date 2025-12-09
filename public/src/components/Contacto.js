
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Soluciones from './Servicios';

function Contacto() {
    const [validated, setValidated] = useState(false);

    const onSubmit = (e) => {
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <section id="contacto" className="py-5">
            <Container>
                   <Row className="align-items-center mb-4">
                    <Col xs={12} md={6} className='text-start'>

                        <h2 className="section-title m-0">Contacto</h2>
                    </Col>
                    <Col md={6} className="text-md-end text-secondary">
                        Cuéntanos tu proyecto y agenda una asesoría.
                    </Col>
                </Row>
                <Row className="justify-content-left">
                    <Col md={10} lg={8}>
                        <Form noValidate validated={validated} onSubmit={onSubmit} className="bg-white p-3 rounded-2xl shadow-sm">
                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control required type="text" placeholder="Tu nombre" />
                                    <Form.Control.Feedback type="invalid">Ingresa tu nombre.</Form.Control.Feedback>
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control required type="email" placeholder="tucorreo@dominio.com" />
                                    <Form.Control.Feedback type="invalid">Ingresa un correo válido.</Form.Control.Feedback>
                                </Col>
                                <Col xs={12}>
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control required as="textarea" rows={4} placeholder="Describe brevemente tu necesidad" />
                                    <Form.Control.Feedback type="invalid">Cuéntanos tu proyecto.</Form.Control.Feedback>
                                </Col>
                                <Col xs={12} className="d-flex gap-2">
                                    <Button type="submit" variant="primary">Enviar</Button>
                                    <Button type="reset" variant="outline-secondary">Limpiar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contacto;
