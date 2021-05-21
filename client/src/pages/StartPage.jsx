import React from "react";
import {Container, Row, Col, Button, Modal, Form} from 'react-bootstrap';

import "./Start.css";

function StartPage() {

    const [modalShowAuto, setModalShowAuto] = React.useState(false);
    const [modalShowReg, setModalShowReg] = React.useState(false);

    return (
      <section className="banner text-center">
        <Container>                
            <Row>
              <div className="start-title">
                Войдите или зарегестрируйтесь для начала
              </div>
              <div className="start-subtitle">
                Узнайте много нового о здоровом питании
              </div>
                <Col>
                    <div>
                        <Button 
                        variant="outline-success"
                        onClick={() => setModalShowAuto(true) }>
                            Войти
                        </Button>

                        <Autorization
                        show={modalShowAuto}
                        onHide={() => setModalShowAuto(false)}
                        />
                    </div>
                </Col>
                <Col>
                    <div>
                        <Button 
                        variant="outline-primary" 
                        onClick={() => setModalShowReg(true)}>
                            Зарегестрироваться
                        </Button>

                        <Registation
                        show={modalShowReg}
                        onHide={() => setModalShowReg(false)}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

function Autorization(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Войти
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Адрес электронной почты" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Пароль" />
            </Form.Group>
            <Button variant="success" type="submit">
                Войти
            </Button>
        </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
            Вы не зарегестрированы?
          <Button>Зарегестрироваться</Button>
          
        </Modal.Footer>
      </Modal>
    );
  }

  function Registation(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Зарегестрироваться
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="formBasicName">
              <Form.Control 
              type="text" 
              placeholder="Ваше имя" />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="formBasicSelect">
              <Form.Control 
              as="select">
                <option>Мужчина</option>
                <option>Женщина</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="formBasicAge">
              <Form.Control 
              required 
              type="text" 
              placeholder="Сколько вам лет?" />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="formBasicHeight">
              <Form.Control 
              required 
              type="text" 
              placeholder="Ваш рост" />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="formBasicWeight">
              <Form.Control 
              required 
              type="text" 
              placeholder="Ваш вес" />
            </Form.Group>
            
            <Form.Group as={Col} md="12" controlId="formBasicEmail">
                <Form.Control 
                required 
                id="email"
                type="email" 
                placeholder="Адрес электронной почты"
                name="email" />
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="formBasicPassword">
                <Form.Control 
                required 
                id="password"
                type="password" 
                placeholder="Пароль"
                name="password" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Зарегестрироваться
            </Button>
          </Form.Row>
        </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
            Вы уже зарегестрированы?
          <Button variant="success">Войти</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default StartPage