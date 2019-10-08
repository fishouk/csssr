import React from "react";
import HomeInro from "../parts/homeIntro";
import SearchIssues from "../parts/searchIssues";
import IssueDetails from "../pages/issueDetails";
import { Container, Row, Col } from "react-bootstrap/";

function IssueContainer(props) {
  let { issues, issueId } = props;
  const issue = issues.find(issue => issue.id === issueId);

  return (
    <React.Fragment>
      <HomeInro />
      <SearchIssues {...props} />
      {issue ? (
        <IssueDetails issue={issue} {...props} />
      ) : (
        <Container>
          <Row>
            <Col>
              <h2>No issue with id: {issueId} </h2>
            </Col>
          </Row>
        </Container>
      )}
    </React.Fragment>
  );
}

export default IssueContainer;
