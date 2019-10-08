import React from "react";
import { Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";

function IssueRow(props) {
  const { issue } = props;
  return (
    <Row>
      <Col>
        <div className="card">
          <div className="card-header"># {issue.number}</div>
          <div className="card-body">
            <h5 className="card-title">{issue.title}</h5>
            <p className="card-text">Issue date: {issue.created_at}</p>
            <Link  className="btn btn-primary" to={`/issue/${issue.id}`}>Подробнее</Link> 
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default IssueRow;
