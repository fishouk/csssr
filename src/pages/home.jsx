import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron } from 'react-bootstrap/';
import SearchIssues from '../parts/searchparts'
import Preload from '../parts/preload';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Jumbotron className="welcome_jumbotron">
                        <Row>
                            <Col>
                                <h1>Welcome to this test website!</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Here you can find issues from github repos.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>First enter username in input.</p>
                                <p>Next press input with repo name.</p>
                                <p>You can see list of repos for user, if he has.</p>
                                <p>Also you can type repo name and list will be autosort.</p>
                                <p>To see all issues you can press Search button or click one in repo list.</p>
                                <p>Don't forget - you can select quantity of issues you want to see per page.</p>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Container>            
                <SearchIssues></SearchIssues>    
                <Container> 
                    <Row>
                        <Col>
                            <Preload />  
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ul className="pagination">
                                <li className="page-item disabled"><span className="page-link">Previous</span></li>
                                <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                <li className="page-item "><span className="page-link"> 2 </span></li>
                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                <li className="page-item"><a className="page-link" href="/">4</a></li>
                                <li className="page-item"><a className="page-link" href="/">5</a></li>
                                <li className="page-item disabled"><span className="page-link">...</span></li>
                                <li className="page-item"><a className="page-link" href="/">7</a></li>
                                <li className="page-item"><a className="page-link" href="/">Next</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container> 
            </React.Fragment>       
        );
    }
}

export default Home;
