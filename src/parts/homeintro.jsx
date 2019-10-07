import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap/";

function HomeIntro() {
  return (
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
            <p>
              To see all issues you can press Search button or click one in repo
              list.
            </p>
            <p>
              Don"t forget - you can select quantity of issues you want to see
              per page.
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default HomeIntro;
