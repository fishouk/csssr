import React from "react";
import { Container, Row, Col } from "react-bootstrap/";

function IssueDetails(props) {
  const { issue } = props;
  console.log(props);
  return (
    
      <Container>
        <Row>
          <Col>
            <h2>Issue id: {issue.id}</h2>
            <div className="card-body">
            <h5 className="card-title">{issue.title}</h5>
            <p className="card-text">Issue date: {issue.created_at}</p>
          </div>
          </Col>
        </Row>
      </Container>
  );
}

export default IssueDetails;
