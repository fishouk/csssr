import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap/';

class Page404 extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Ooooops 404!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Такой страницы нет. Поищите еще.</p>
                    </Col>
                </Row>
            </Container> 
        );
    }
}

export default Page404;
