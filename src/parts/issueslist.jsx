import React from "react";
import { Container } from "react-bootstrap/";
import { connect } from "react-redux";
import { getIssues } from "../reducers/index";
import IssueRow from "./issuerow";

function IssuesList(props) {
  const { issues } = props;
  return (
    <Container>
      {issues && issues.length > 0 ? (
        issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
      ) : (
        <p> No issues. </p>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  issues: getIssues(state)
});

export default connect(mapStateToProps)(IssuesList);
